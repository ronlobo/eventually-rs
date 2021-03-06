//! [`eventually`] type implementations for PostgreSQL.
//!
//! ## Event Store
//!
//! This crate includes an [`EventStore`] implementation using PostgreSQL
//! as backend data source.
//!
//! Example usage:
//!
//! ```no_run
//! # use std::sync::Arc;
//! # use tokio::sync::RwLock;
//! # use eventually_postgres::EventStoreBuilder;
//! #
//! # async fn dox() -> Result<(), Box<dyn std::error::Error>> {
//! // Open a connection with Postgres.
//! let (client, connection) =
//!     tokio_postgres::connect("postgres://user@pass:localhost:5432/db", tokio_postgres::NoTls)
//!         .await
//!         .map_err(|err| {
//!             eprintln!("failed to connect to Postgres: {}", err);
//!             err
//!         })?;
//!
//! // The connection, responsible for the actual IO, must be handled by a different
//! // execution context.
//! tokio::spawn(async move {
//!     if let Err(e) = connection.await {
//!         eprintln!("connection error: {}", e);
//!     }
//! });
//!
//! // A domain event example -- it is deliberately simple.
//! #[derive(Debug, Clone)]
//! struct SomeEvent;
//!
//! // Use an EventStoreBuilder to build multiple EventStore instances.
//! let builder = EventStoreBuilder::from(Arc::new(RwLock::new(client)));
//!
//! // Event store for the events.
//! let store = {
//!     let store = builder.event_stream::<String, SomeEvent>("orders");
//!     store.create_stream().await?;
//!     store
//! };
//!
//! # Ok(())
//! # }
//! ```
//!
//! [`eventually`]: https://docs.rs/eventually
//! [`EventStore`]: struct.EventStore.html

use std::sync::Arc;

use eventually::store::{AppendError, EventStream, PersistedEvent, Select};
use eventually::{Aggregate, AggregateId};

use futures::future::BoxFuture;
use futures::stream::{StreamExt, TryStreamExt};

use serde::{Deserialize, Serialize};

use tokio::sync::RwLock;

use tokio_postgres::types::ToSql;
use tokio_postgres::{Client, Error};

use thiserror::Error;

/// Error type returned by the [`EventStore`] implementation, which is
/// a _newtype_ wrapper around `tokio_postgres::Error`.
///
/// [`EventStore`]: struct.EventStore.html
#[derive(Debug, Error)]
#[error(transparent)]
pub struct EventStoreError(#[from] Error);

impl AppendError for EventStoreError {
    #[inline]
    fn is_conflict_error(&self) -> bool {
        // TODO: implement this
        false
    }
}

/// Builder type for [`EventStore`] instances.
///
/// [`EventStore`]: struct.EventStore.html
pub struct EventStoreBuilder(Arc<RwLock<Client>>);

impl From<Arc<RwLock<Client>>> for EventStoreBuilder {
    #[inline]
    fn from(client: Arc<RwLock<Client>>) -> Self {
        EventStoreBuilder(client.clone())
    }
}

impl EventStoreBuilder {
    /// Creates a new [`EventStore`] instance using the specified stream name
    /// as the Postgres backend table.
    ///
    /// [`EventStore`]: struct.EventStore.html
    #[inline]
    pub fn event_stream<Id, Event>(&self, name: &'static str) -> EventStore<Id, Event> {
        EventStore {
            client: self.0.clone(),
            table_name: name,
            id: std::marker::PhantomData,
            payload: std::marker::PhantomData,
            append_query: format!(
                "INSERT INTO {} (aggregate_id, event, version, \"offset\")
                VALUES ($1, $2, $3, $4)",
                name
            ),
            stream_query: format!(
                "SELECT * FROM {}
                WHERE aggregate_id = $1 AND version >= $2
                ORDER BY committed_at",
                name
            ),
            remove_query: format!("DELETE FROM {} WHERE aggregate_id = $1", name),
        }
    }

    /// Creates a new [`EventStore`] for an [`Aggregate`] type,
    /// backed by a Postgres table using the specified stream name.
    ///
    /// ## Usage
    ///
    /// ```text
    /// // Open a connection with Postgres.
    /// let (client, connection) =
    ///     tokio_postgres::connect("postgres://user@pass:localhost:5432/db", tokio_postgres::NoTls)
    ///         .await
    ///         .map_err(|err| {
    ///             eprintln!("failed to connect to Postgres: {}", err);
    ///             err
    ///         })?;
    ///
    /// // The connection, responsible for the actual IO, must be handled by a different
    /// // execution context.
    /// tokio::spawn(async move {
    ///     if let Err(e) = connection.await {
    ///         eprintln!("connection error: {}", e);
    ///     }
    /// });
    ///
    /// // Use an EventStoreBuilder to build multiple EventStore instances.
    /// let builder = EventStoreBuilder::from(Arc::new(RwLock::new(client)));
    ///
    /// let aggregate = SomeAggregate;
    ///
    /// // Event store for the events.
    /// let store = {
    ///     let store = builder.aggregate_stream(&aggregate, "orders");
    ///     store.create_stream().await?;
    ///     store
    /// };
    /// ```
    ///
    /// [`EventStore`]: struct.EventStore.html
    /// [`Aggregate`]: ../../eventually_core/aggregate/trait.Aggregate.html
    #[inline]
    pub fn aggregate_stream<T>(
        &self,
        _: &T,
        name: &'static str,
    ) -> EventStore<AggregateId<T>, T::Event>
    where
        T: Aggregate,
    {
        self.event_stream::<AggregateId<T>, T::Event>(name)
    }
}

/// [`EventStore`] implementation using a PostgreSQL backend.
///
/// This implementation uses `tokio-postgres` crate to interface with Postgres.
///
/// Check out [`EventStoreBuilder`] for examples to how initialize new
/// instances of this type.
///
/// [`EventStore`]: ../../eventually_core/store/trait.EventStore.html
/// [`EventStoreBuilder`]: ../../eventually_core/store/trait.EventStoreBuilder.html
#[derive(Debug, Clone)]
pub struct EventStore<Id, Event> {
    client: Arc<RwLock<Client>>,
    table_name: &'static str,
    id: std::marker::PhantomData<Id>,
    payload: std::marker::PhantomData<Event>,

    append_query: String,
    stream_query: String,
    remove_query: String,
}

impl<Id, Event> EventStore<Id, Event>
where
    Id: ToString + Eq + Send + Sync,
{
    /// Creates a new table in the database for the provided Stream name
    /// during initialization.
    ///
    /// Check out [`EventStoreBuilder`] for more information.
    ///
    /// [`EventStoreBuilder`]: ../../eventually_core/store/trait.EventStoreBuilder.html
    pub async fn create_stream(&self) -> Result<(), Error> {
        let query = format!(
            "CREATE TABLE IF NOT EXISTS {table_name} (
                event_id SERIAL PRIMARY KEY,
                committed_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
                aggregate_id VARCHAR NOT NULL,
                version OID NOT NULL,
                \"offset\" OID NOT NULL,
                event JSONB NOT NULL,
                CONSTRAINT {table_name}_versioned UNIQUE (aggregate_id, version, \"offset\")
            )",
            table_name = self.table_name
        );

        self.client
            .read()
            .await
            .execute(&*query, &[])
            .await
            .map(|_| ())
    }
}

impl<Id, Event> eventually::EventStore for EventStore<Id, Event>
where
    Id: ToString + Eq + Send + Sync,
    Event: Serialize + Send + Sync,
    for<'de> Event: Deserialize<'de>,
{
    type SourceId = Id;
    type Event = Event;
    type Error = EventStoreError;

    fn append(
        &mut self,
        id: Self::SourceId,
        version: u32,
        events: Vec<Self::Event>,
    ) -> BoxFuture<Result<(), Self::Error>> {
        let serialized = events
            .into_iter()
            .enumerate()
            .map(|(i, event)| serde_json::to_value(event).map(|value| (i, value)))
            .collect::<Result<Vec<_>, _>>()
            .unwrap();

        Box::pin(async move {
            let mut tx = self.client.write().await;
            let tx = tx.transaction().await.map_err(EventStoreError::from)?;

            for (i, event) in serialized {
                tx.execute(
                    &*self.append_query,
                    &[&id.to_string(), &event, &version, &(i as u32)],
                )
                .await
                .map_err(EventStoreError::from)?;
            }

            tx.commit().await.map_err(EventStoreError::from)
        })
    }

    fn stream(
        &self,
        id: Self::SourceId,
        select: Select,
    ) -> BoxFuture<Result<EventStream<Self>, Self::Error>> {
        let from = match select {
            Select::All => 0,
            Select::From(v) => v,
        };

        Box::pin(async move {
            let params: Params = &[&id.to_string(), &from];

            Ok(self
                .client
                .read()
                .await
                .query_raw(&*self.stream_query, slice_iter(params))
                .await
                .map_err(EventStoreError::from)?
                .map_ok(|row| {
                    let event: Event = serde_json::from_value(row.get("event")).unwrap();

                    PersistedEvent::from(event)
                        .with_version(row.get("version"))
                        .with_sequence_number(row.get("offset"))
                })
                .map_err(EventStoreError::from)
                .boxed())
        })
    }

    fn remove(&mut self, id: Self::SourceId) -> BoxFuture<Result<(), Self::Error>> {
        Box::pin(async move {
            self.client
                .read()
                .await
                .execute(&*self.remove_query, &[&id.to_string()])
                .await
                .map(|_| ())
                .map_err(EventStoreError::from)
        })
    }
}

type Params<'a> = &'a [&'a (dyn ToSql + Sync)];

#[inline]
#[allow(trivial_casts)]
fn slice_iter<'a>(s: Params<'a>) -> impl ExactSizeIterator<Item = &'a dyn ToSql> + 'a {
    s.iter().map(|s| *s as _)
}
