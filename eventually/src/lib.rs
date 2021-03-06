pub use eventually_core::aggregate::{
    Aggregate, AggregateExt, AggregateId, AggregateRoot, AggregateRootBuilder,
};
pub use eventually_core::repository::Repository;
pub use eventually_core::store::EventStore;
pub use eventually_core::versioning::Versioned;

pub mod aggregate {
    pub use eventually_core::aggregate::*;

    pub use eventually_util::optional::Aggregate as Optional;
}

pub mod versioning {
    pub use eventually_core::versioning::*;
}

pub mod repository {
    pub use eventually_core::repository::*;
}

pub mod store {
    pub use eventually_core::store::*;
}

pub mod optional {
    pub use eventually_util::optional::*;
}

pub mod inmemory {
    pub use eventually_util::inmemory::*;
}
