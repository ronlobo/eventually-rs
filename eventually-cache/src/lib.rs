use async_trait::async_trait;

use futures::stream::BoxStream;

use eventually_core::store::Store;
use eventually_util::versioned::Versioned;

pub struct Cache<Main, Secondary> {
    main: Main,
    secondary: Secondary,
}

#[async_trait]
impl<Event, Main, Secondary> Store for Cache<Main, Secondary>
where
    Event: Send + Sync + Clone + 'static,
    Main: Store<Event = Versioned<Event>> + Send,
    <Main as Store>::SourceId: Send + Sync + Clone,
    <Main as Store>::Offset: Send,
    <Main as Store>::Event: Send + Sync + Clone,
    <Main as Store>::Error: Send,
    Secondary: Store<
            SourceId = <Main as Store>::SourceId,
            Offset = <Main as Store>::Offset,
            Event = <Main as Store>::Event,
            Error = <Main as Store>::Error,
        > + Send,
{
    type SourceId = <Main as Store>::SourceId;
    type Offset = <Main as Store>::Offset;
    type Event = <Main as Store>::Event;
    type Error = <Main as Store>::Error;

    fn stream<'store>(
        &'store self,
        source_id: Self::SourceId,
        from: Self::Offset,
    ) -> BoxStream<'store, Result<Self::Event, Self::Error>> {
        self.secondary.stream(source_id, from)
    }

    async fn append(
        &mut self,
        source_id: Self::SourceId,
        events: Vec<Self::Event>,
    ) -> Result<(), Self::Error> {
        self.main.append(source_id.clone(), events.clone()).await?;
        self.secondary.append(source_id, events).await
    }
}

pub type CacheBuilder = builder::Builder;

pub mod builder {
    pub struct Builder {}

    impl Builder {
        pub fn with_main_store<S>(store: S) -> WithMain<S> {
            WithMain(store)
        }
    }

    pub struct WithMain<S>(pub(super) S);

    impl<M> WithMain<M> {
        pub fn with_secondary_store<S>(self, store: S) -> WithSecondary<M, S> {
            WithSecondary(self.0, store)
        }
    }

    pub struct WithSecondary<M, S>(pub(super) M, pub(super) S);

    impl<M, S> WithSecondary<M, S> {
        pub fn build(self) -> super::Cache<M, S> {
            super::Cache {
                main: self.0,
                secondary: self.1,
            }
        }
    }
}
