var searchIndex={};
searchIndex["eventually"] = {"doc":"","i":[[8,"Aggregate","eventually","An Aggregate manages a domain entity [`State`], acting as…",null,null],[16,"State","","State of the Aggregate: this should represent the Domain…",0,null],[16,"Event","","Represents a specific, domain-related change to the…",0,null],[16,"Command","","Commands are all the possible operations available on an…",0,null],[16,"Error","","Possible failures while [`apply`]ing [`Event`]s or…",0,null],[10,"apply","","Applies an [`Event`] to the current Aggregate [`State`].",0,[[],["result"]]],[10,"handle","","Handles the requested [`Command`] and returns a list of…",0,[[["self"]],[["box",["future"]],["pin",["box"]]]]],[8,"AggregateExt","","Extension trait with some handy methods to use with…",null,null],[11,"root","","Constructs a new, empty [`AggregateRoot`] using the…",1,[[["self"]],["aggregateroot"]]],[11,"fold","","Applies a list of [`Event`]s from an `Iterator` to the…",1,[[["i"]],["result"]]],[6,"AggregateId","","A short extractor type for the Aggregate id, found in the…",null,null],[3,"AggregateRoot","","An `AggregateRoot` represents an handler to the…",null,null],[8,"Identifiable","","A trait for data structures that can be identified by an id.",null,null],[16,"Id","","Type of the data id. An id must support total equality.",2,null],[10,"id","","Data structure id accessor.",2,[[["self"]]]],[3,"Repository","","Implementation of the [Repository pattern] for storing,…",null,null],[8,"EventStore","","An Event Store is an append-only, ordered list of…",null,null],[16,"SourceId","","Type of the Source id, typically an [`AggregateId`].",3,null],[16,"Offset","","Offset type for getting a slice of the [`Event`]s in the…",3,null],[16,"Event","","Event to be stored in the `EventStore`, typically an…",3,null],[16,"Error","","Possible errors returned by the `EventStore` when…",3,null],[10,"append","","Appends a new list of [`Event`]s to the Event Store, for…",3,[[["vec"],["self"]],[["pin",["box"]],["box",["future"]]]]],[10,"stream","","Streams a list of [`Event`]s from the `EventStore` back to…",3,[[["self"]],[["box",["future"]],["pin",["box"]]]]],[10,"remove","","Drops all the [`Event`]s related to one `Source`,…",3,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[0,"aggregate","","",null,null],[8,"Identifiable","eventually::aggregate","A trait for data structures that can be identified by an id.",null,null],[16,"Id","","Type of the data id. An id must support total equality.",2,null],[10,"id","","Data structure id accessor.",2,[[["self"]]]],[6,"AggregateId","","A short extractor type for the Aggregate id, found in the…",null,null],[8,"Aggregate","","An Aggregate manages a domain entity [`State`], acting as…",null,null],[16,"State","","State of the Aggregate: this should represent the Domain…",0,null],[16,"Event","","Represents a specific, domain-related change to the…",0,null],[16,"Command","","Commands are all the possible operations available on an…",0,null],[16,"Error","","Possible failures while [`apply`]ing [`Event`]s or…",0,null],[10,"apply","","Applies an [`Event`] to the current Aggregate [`State`].",0,[[],["result"]]],[10,"handle","","Handles the requested [`Command`] and returns a list of…",0,[[["self"]],[["box",["future"]],["pin",["box"]]]]],[8,"AggregateExt","","Extension trait with some handy methods to use with…",null,null],[11,"root","","Constructs a new, empty [`AggregateRoot`] using the…",1,[[["self"]],["aggregateroot"]]],[11,"fold","","Applies a list of [`Event`]s from an `Iterator` to the…",1,[[["i"]],["result"]]],[3,"AggregateRoot","","An `AggregateRoot` represents an handler to the…",null,null],[8,"Optional","","An `Option`-flavoured, [`Aggregate`]-compatible trait to…",null,null],[16,"State","","State of the Aggregate.",4,null],[16,"Event","","Events produced and supported by the Aggregate.",4,null],[16,"Command","","Commands supported by the Aggregate.",4,null],[16,"Error","","Error produced by the the Aggregate while applying…",4,null],[10,"apply_first","","Applies the specified [`Event`] when the [`State`] is empty.",4,[[],["result"]]],[10,"apply_next","","Applies the specified [`Event`] on a pre-existing…",4,[[],["result"]]],[10,"handle_first","","Handles the specified [`Command`] when the [`State`] is…",4,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[10,"handle_next","","Handles the specified [`Command`] on a pre-existing…",4,[[["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"as_aggregate","","Translates the current [`optional::Aggregate`] instance…",4,[[],["asaggregate"]]],[3,"Versioned","","Newtype extension for [`Aggregate`] types to add support…",null,null],[0,"store","eventually","",null,null],[6,"EventStream","eventually::store","Stream type returned by the [`EventStore::stream`] method.",null,null],[8,"EventStore","","An Event Store is an append-only, ordered list of…",null,null],[16,"SourceId","","Type of the Source id, typically an [`AggregateId`].",3,null],[16,"Offset","","Offset type for getting a slice of the [`Event`]s in the…",3,null],[16,"Event","","Event to be stored in the `EventStore`, typically an…",3,null],[16,"Error","","Possible errors returned by the `EventStore` when…",3,null],[10,"append","","Appends a new list of [`Event`]s to the Event Store, for…",3,[[["vec"],["self"]],[["pin",["box"]],["box",["future"]]]]],[10,"stream","","Streams a list of [`Event`]s from the `EventStore` back to…",3,[[["self"]],[["box",["future"]],["pin",["box"]]]]],[10,"remove","","Drops all the [`Event`]s related to one `Source`,…",3,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[0,"optional","eventually","",null,null],[8,"Aggregate","eventually::optional","An `Option`-flavoured, [`Aggregate`]-compatible trait to…",null,null],[16,"State","","State of the Aggregate.",4,null],[16,"Event","","Events produced and supported by the Aggregate.",4,null],[16,"Command","","Commands supported by the Aggregate.",4,null],[16,"Error","","Error produced by the the Aggregate while applying…",4,null],[10,"apply_first","","Applies the specified [`Event`] when the [`State`] is empty.",4,[[],["result"]]],[10,"apply_next","","Applies the specified [`Event`] on a pre-existing…",4,[[],["result"]]],[10,"handle_first","","Handles the specified [`Command`] when the [`State`] is…",4,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[10,"handle_next","","Handles the specified [`Command`] on a pre-existing…",4,[[["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"as_aggregate","","Translates the current [`optional::Aggregate`] instance…",4,[[],["asaggregate"]]],[3,"AsAggregate","","Newtype pattern to ensure compatibility between…",null,null],[0,"versioned","eventually","",null,null],[8,"AggregateExt","eventually::versioned","Extension trait to add Optimistic Concurrency Control…",null,null],[11,"versioned","","Returns a versioned flavour of an [`Aggregate`].",5,[[],["asaggregate"]]],[3,"AsAggregate","","Newtype extension for [`Aggregate`] types to add support…",null,null],[3,"Versioned","","Wrapper to embed version information for un-versioned data…",null,null],[0,"inmemory","eventually","",null,null],[3,"EventStoreBuilder","eventually::inmemory","Builder for [`EventStore`] instances.",null,null],[3,"EventStore","","An in-memory [`EventStore`] implementation, backed by an…",null,null],[11,"from","eventually::aggregate","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","eventually","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","eventually::versioned","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,[[["self"],["t"]]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","eventually::optional","",9,[[],["t"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","eventually::versioned","",10,[[],["t"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,[[["self"],["t"]]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"from","eventually::inmemory","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,[[["self"],["t"]]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"eq","eventually::aggregate","",6,[[["aggregateroot"],["self"]],["bool"]]],[11,"fmt","","",6,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"from","","",6,[[["t"]],["aggregateroot"]]],[11,"id","","",6,[[["self"]]]],[11,"serialize","eventually::versioned","",10,[[["self"],["__s"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"fmt","eventually::optional","",9,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"fmt","eventually::versioned","",8,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"fmt","eventually::inmemory","",12,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"apply","eventually::versioned","",8,[[],["result"]]],[11,"handle","","",8,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"apply","eventually::optional","",9,[[],["result"]]],[11,"handle","","",9,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"deref_mut","eventually::versioned","",10,[[["self"]]]],[11,"deserialize","","",10,[[["__d"]],[["versioned"],["result",["versioned"]]]]],[11,"append","eventually::inmemory","",12,[[["vec"],["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"stream","","",12,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"remove","","",12,[[["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"clone","","",12,[[["self"]],["eventstore"]]],[11,"clone","eventually::versioned","",8,[[["self"]],["asaggregate"]]],[11,"clone","","",10,[[["self"]],["versioned"]]],[11,"clone","eventually::optional","",9,[[["self"]],["asaggregate"]]],[11,"eq","eventually::versioned","",10,[[["self"],["versioned"]],["bool"]]],[11,"ne","","",10,[[["self"],["versioned"]],["bool"]]],[11,"id","","",10,[[["self"]]]],[11,"from","eventually::optional","",9,[[["a"]],["asaggregate"]]],[11,"from","eventually::versioned","",10,[[["t"]],["versioned"]]],[11,"deref","","",10,[[["self"]]]],[11,"default","eventually::inmemory","",12,[[],["eventstore"]]],[11,"default","eventually::versioned","",10,[[],["versioned"]]],[11,"state","eventually::aggregate","Returns a reference to the current Aggregate [`State`].",6,[[["self"]]]],[11,"new","","Creates a new `AggregateRoot` instance wrapping the…",6,[[["t"]],["aggregateroot"]]],[11,"handle","","Handles the submitted [`Command`] using the…",6,[[["self"]]]],[11,"new","eventually","Creates a new `Repository` instance, using the…",7,[[["t"],["store"]],["repository"]]],[11,"get","","Returns the [`Aggregate`] from the `Repository` with the…",7,[[["self"]]]],[11,"add","","Adds a new [`State`] of the [`Aggregate`] into the…",7,[[["aggregateroot"],["self"]]]],[11,"remove","","Removes the specified [`Aggregate`] from the `Repository`,…",7,[[["self"]]]],[11,"new","eventually::versioned","Wraps data with the specified version information.",10,[[["u32"],["t"]],["versioned"]]],[11,"version","","Returns version information.",10,[[["self"]],["u32"]]],[11,"take","","Extracts the wrapped data from the instance.",10,[[],["t"]]],[11,"for_aggregate","eventually::inmemory","Builds a new [`EventStore`] instance compatible with the…",11,[[["t"]],["eventstore"]]]],"p":[[8,"Aggregate"],[8,"AggregateExt"],[8,"Identifiable"],[8,"EventStore"],[8,"Aggregate"],[8,"AggregateExt"],[3,"AggregateRoot"],[3,"Repository"],[3,"AsAggregate"],[3,"AsAggregate"],[3,"Versioned"],[3,"EventStoreBuilder"],[3,"EventStore"]]};
searchIndex["eventually_core"] = {"doc":"","i":[[0,"aggregate","eventually_core","Foundation traits for creating Domain abstractions using…",null,null],[3,"AggregateRoot","eventually_core::aggregate","An `AggregateRoot` represents an handler to the…",null,null],[6,"AggregateId","","A short extractor type for the Aggregate id, found in the…",null,null],[8,"Identifiable","","A trait for data structures that can be identified by an id.",null,null],[16,"Id","","Type of the data id. An id must support total equality.",0,null],[10,"id","","Data structure id accessor.",0,[[["self"]]]],[8,"Aggregate","","An Aggregate manages a domain entity [`State`], acting as…",null,null],[16,"State","","State of the Aggregate: this should represent the Domain…",1,null],[16,"Event","","Represents a specific, domain-related change to the…",1,null],[16,"Command","","Commands are all the possible operations available on an…",1,null],[16,"Error","","Possible failures while [`apply`]ing [`Event`]s or…",1,null],[10,"apply","","Applies an [`Event`] to the current Aggregate [`State`].",1,[[],["result"]]],[10,"handle","","Handles the requested [`Command`] and returns a list of…",1,[[["self"]],[["boxfuture",["result"]],["result",["vec"]]]]],[8,"AggregateExt","","Extension trait with some handy methods to use with…",null,null],[11,"root","","Constructs a new, empty [`AggregateRoot`] using the…",2,[[["self"]],["aggregateroot"]]],[11,"fold","","Applies a list of [`Event`]s from an `Iterator` to the…",2,[[["i"]],["result"]]],[11,"state","","Returns a reference to the current Aggregate [`State`].",3,[[["self"]]]],[11,"new","","Creates a new `AggregateRoot` instance wrapping the…",3,[[["t"]],["self"]]],[11,"handle","","Handles the submitted [`Command`] using the…",3,[[["self"]]]],[0,"repository","eventually_core","Contains the [Repository pattern] implementation for…",null,null],[3,"Repository","eventually_core::repository","Implementation of the [Repository pattern] for storing,…",null,null],[4,"Error","","Error type returned by the [`Repository`].",null,null],[13,"Aggregate","","Error returned by the [`Aggregate`], usually when…",4,null],[13,"Store","","Error returned by the underlying [`EventStore`].",4,null],[13,"NoEvents","","Error returned by [`add`] method when trying to add an…",4,null],[6,"Result","","Result type returned by the [`Repository`].",null,null],[11,"new","","Creates a new `Repository` instance, using the…",5,[[["t"],["store"]],["self"]]],[11,"get","","Returns the [`Aggregate`] from the `Repository` with the…",5,[[["self"],["aggregateid"]]]],[11,"add","","Adds a new [`State`] of the [`Aggregate`] into the…",5,[[["aggregateroot"],["self"]]]],[11,"remove","","Removes the specified [`Aggregate`] from the `Repository`,…",5,[[["aggregateid"],["self"]]]],[0,"store","eventually_core","Contains the Event Store trait for storing and streaming…",null,null],[6,"EventStream","eventually_core::store","Stream type returned by the [`EventStore::stream`] method.",null,null],[8,"EventStore","","An Event Store is an append-only, ordered list of…",null,null],[16,"SourceId","","Type of the Source id, typically an [`AggregateId`].",6,null],[16,"Offset","","Offset type for getting a slice of the [`Event`]s in the…",6,null],[16,"Event","","Event to be stored in the `EventStore`, typically an…",6,null],[16,"Error","","Possible errors returned by the `EventStore` when…",6,null],[10,"append","","Appends a new list of [`Event`]s to the Event Store, for…",6,[[["self"],["vec"]],[["boxfuture",["result"]],["result"]]]],[10,"stream","","Streams a list of [`Event`]s from the `EventStore` back to…",6,[[["self"]],[["result",["eventstream"]],["boxfuture",["result"]]]]],[10,"remove","","Drops all the [`Event`]s related to one `Source`,…",6,[[["self"]],[["boxfuture",["result"]],["result"]]]],[11,"from","eventually_core::aggregate","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","eventually_core::repository","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_string","","",4,[[["self"]],["string"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"id","eventually_core::aggregate","",3,[[["self"]]]],[11,"from","","",3,[[["t"]],["self"]]],[11,"eq","","",3,[[["self"]],["bool"]]],[11,"eq","eventually_core::repository","",4,[[["self"],["error"]],["bool"]]],[11,"ne","","",4,[[["self"],["error"]],["bool"]]],[11,"fmt","eventually_core::aggregate","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","eventually_core::repository","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"source","","",4,[[["self"]],[["option",["error"]],["error"]]]]],"p":[[8,"Identifiable"],[8,"Aggregate"],[8,"AggregateExt"],[3,"AggregateRoot"],[4,"Error"],[3,"Repository"],[8,"EventStore"]]};
searchIndex["eventually_postgres"] = {"doc":"","i":[[3,"EventStoreBuilder","eventually_postgres","Builder type for [`EventStore`] instances.",null,null],[3,"EventStore","","[`EventStore`] implementation using a PostgreSQL backend.",null,null],[11,"event_stream","","Creates a new [`EventStore`] instance using the specified…",0,[[["str"],["self"]],["eventstore"]]],[11,"aggregate_stream","","Creates a new [`EventStore`] for an [`Aggregate`] type,…",0,[[["t"],["self"],["str"]],[["aggregateid"],["eventstore",["aggregateid"]]]]],[11,"create_stream","","Creates a new table in the database for the provided…",1,[[["self"]]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"vzip","","",0,[[],["v"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"vzip","","",1,[[],["v"]]],[11,"from","","",0,[[["arc",["rwlock"]],["rwlock",["client"]]],["self"]]],[11,"clone","","",1,[[["self"]],["eventstore"]]],[11,"fmt","","",1,[[["formatter"],["self"]],["result"]]],[11,"append","","",1,[[["vec"],["self"]],[["boxfuture",["result"]],["result"]]]],[11,"stream","","",1,[[["self"]],[["result",["eventstream"]],["boxfuture",["result"]]]]],[11,"remove","","",1,[[["self"]],[["boxfuture",["result"]],["result"]]]]],"p":[[3,"EventStoreBuilder"],[3,"EventStore"]]};
searchIndex["eventually_test"] = {"doc":"","i":[[5,"main","eventually_test","",null,[[],[["box",["error"]],["result",["box"]]]]],[0,"api","","",null,null],[5,"history","eventually_test::api","",null,[[["appstate"],["request",["appstate"]]]]],[5,"get_order","","",null,[[["appstate"],["request",["appstate"]]]]],[5,"create_order","","",null,[[["appstate"],["request",["appstate"]]]]],[5,"add_order_item","","",null,[[["appstate"],["request",["appstate"]]]]],[5,"complete_order","","",null,[[["appstate"],["request",["appstate"]]]]],[5,"cancel_order","","",null,[[["appstate"],["request",["appstate"]]]]],[0,"config","eventually_test","",null,null],[3,"Config","eventually_test::config","",null,null],[12,"db_host","","",0,null],[12,"db_port","","",0,null],[12,"db_username","","",0,null],[12,"db_password","","",0,null],[12,"db_database","","",0,null],[12,"http_port","","",0,null],[12,"log_level","","",0,null],[11,"postgres_dsn","","",0,[[["self"]],["string"]]],[11,"http_addr","","",0,[[["self"]]]],[0,"log","eventually_test","",null,null],[3,"Middleware","eventually_test::log","Log all incoming requests and responses.",null,null],[12,"_priv","","",1,null],[11,"new","","Create a new instance of `LogMiddleware`.",1,[[],["self"]]],[11,"log","","Log a request and a response.",1,[[["request"],["next"],["send"],["self"],["sync"]]]],[0,"order","eventually_test","",null,null],[3,"OrderItem","eventually_test::order","",null,null],[12,"item_sku","","",2,null],[12,"quantity","","",2,null],[12,"price","","",2,null],[3,"OrderItems","","",null,null],[12,"0","","",3,null],[3,"OrderAggregate","","",null,null],[4,"OrderState","","",null,null],[13,"Editable","","",4,null],[12,"id","eventually_test::order::OrderState","",5,null],[12,"created_at","","",5,null],[12,"updated_at","","",5,null],[12,"items","","",5,null],[13,"Complete","eventually_test::order","",4,null],[12,"id","eventually_test::order::OrderState","",6,null],[12,"created_at","","",6,null],[12,"items","","",6,null],[12,"completed_at","","",6,null],[13,"Cancelled","eventually_test::order","",4,null],[12,"id","eventually_test::order::OrderState","",7,null],[12,"created_at","","",7,null],[12,"items","","",7,null],[12,"cancelled_at","","",7,null],[4,"OrderCommand","eventually_test::order","",null,null],[13,"Create","","",8,null],[12,"id","eventually_test::order::OrderCommand","",9,null],[13,"AddItem","eventually_test::order","",8,null],[12,"item","eventually_test::order::OrderCommand","",10,null],[13,"Complete","eventually_test::order","",8,null],[13,"Cancel","","",8,null],[4,"OrderEvent","","",null,null],[13,"Created","","",11,null],[12,"id","eventually_test::order::OrderEvent","",12,null],[12,"at","","",12,null],[13,"ItemAdded","eventually_test::order","",11,null],[12,"item","eventually_test::order::OrderEvent","",13,null],[12,"at","","",13,null],[13,"Completed","eventually_test::order","",11,null],[12,"at","eventually_test::order::OrderEvent","",14,null],[13,"Cancelled","eventually_test::order","",11,null],[12,"at","eventually_test::order::OrderEvent","",15,null],[4,"OrderError","eventually_test::order","",null,null],[13,"AlreadyCreated","","",16,null],[13,"NotYetCreated","","",16,null],[13,"NotEditable","","",16,null],[13,"AlreadyCompleted","","",16,null],[13,"AlreadyCancelled","","",16,null],[11,"insert_or_merge","","",3,[[["orderitem"]],["self"]]],[11,"happened_at","","",11,[[["self"]],["datetime"]]],[0,"state","eventually_test","",null,null],[3,"AppState","eventually_test::state","",null,null],[12,"store","","",17,null],[12,"aggregate","","",17,null],[12,"repository","","",17,null],[6,"OrderAggregate","","",null,null],[6,"OrderStore","","",null,null],[6,"OrderRepository","","",null,null],[11,"from","eventually_test::config","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"vzip","","",0,[[],["v"]]],[11,"from","eventually_test::log","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"handle","","",1,[[["next"],["request"],["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"vzip","","",1,[[],["v"]]],[11,"from","eventually_test::order","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"vzip","","",2,[[],["v"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"vzip","","",3,[[],["v"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"into","","",18,[[],["u"]]],[11,"to_owned","","",18,[[["self"]],["t"]]],[11,"clone_into","","",18,[[["self"],["t"]]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"try_into","","",18,[[],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"type_id","","",18,[[["self"]],["typeid"]]],[11,"vzip","","",18,[[],["v"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"vzip","","",4,[[],["v"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"vzip","","",8,[[],["v"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,[[["self"],["t"]]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"vzip","","",11,[[],["v"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,[[["self"],["t"]]]],[11,"to_string","","",16,[[["self"]],["string"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"try_into","","",16,[[],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"type_id","","",16,[[["self"]],["typeid"]]],[11,"vzip","","",16,[[],["v"]]],[11,"from","eventually_test::state","",17,[[["t"]],["t"]]],[11,"into","","",17,[[],["u"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"try_into","","",17,[[],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"type_id","","",17,[[["self"]],["typeid"]]],[11,"vzip","","",17,[[],["v"]]],[11,"from","eventually_test::order","",3,[[["orderitem"],["vec",["orderitem"]]],["self"]]],[11,"clone","eventually_test::log","",1,[[["self"]],["middleware"]]],[11,"clone","eventually_test::order","",2,[[["self"]],["orderitem"]]],[11,"clone","","",4,[[["self"]],["orderstate"]]],[11,"clone","","",11,[[["self"]],["orderevent"]]],[11,"clone","","",16,[[["self"]],["ordererror"]]],[11,"clone","","",18,[[["self"]],["orderaggregate"]]],[11,"eq","","",16,[[["self"],["ordererror"]],["bool"]]],[11,"fmt","eventually_test::log","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","eventually_test::order","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",11,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",16,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",18,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",16,[[["formatter"],["self"]],["fmtresult"]]],[11,"serialize","","",2,[[["self"],["__s"]],["result"]]],[11,"serialize","","",4,[[["self"],["__s"]],["result"]]],[11,"serialize","","",11,[[["self"],["__s"]],["result"]]],[11,"deserialize","","",2,[[["__d"]],["result"]]],[11,"deserialize","","",4,[[["__d"]],["result"]]],[11,"deserialize","","",11,[[["__d"]],["result"]]],[11,"apply_first","","",18,[[],["result"]]],[11,"apply_next","","",18,[[],["result"]]],[11,"handle_first","","",18,[[["self"]],[["result",["vec"]],["boxfuture",["result"]]]]],[11,"handle_next","","",18,[[["self"]],[["result",["vec"]],["boxfuture",["result"]]]]],[11,"id","","",4,[[["self"]]]],[11,"handle","eventually_test::log","",1,[[["next"],["self"],["request"]],[["result"],["boxfuture",["result"]]]]],[11,"init","eventually_test::config","",0,[[],[["error"],["result",["error"]]]]]],"p":[[3,"Config"],[3,"Middleware"],[3,"OrderItem"],[3,"OrderItems"],[4,"OrderState"],[13,"Editable"],[13,"Complete"],[13,"Cancelled"],[4,"OrderCommand"],[13,"Create"],[13,"AddItem"],[4,"OrderEvent"],[13,"Created"],[13,"ItemAdded"],[13,"Completed"],[13,"Cancelled"],[4,"OrderError"],[3,"AppState"],[3,"OrderAggregate"]]};
searchIndex["eventually_util"] = {"doc":"","i":[[0,"inmemory","eventually_util","Contains supporting entities using an in-memory backend.",null,null],[3,"EventStoreBuilder","eventually_util::inmemory","Builder for [`EventStore`] instances.",null,null],[3,"EventStore","","An in-memory [`EventStore`] implementation, backed by an…",null,null],[11,"for_aggregate","","Builds a new [`EventStore`] instance compatible with the…",0,[[["t"]],[["aggregateid"],["eventstore",["aggregateid"]]]]],[0,"optional","eventually_util","Contains a different flavour of the [`Aggregate`] trait,…",null,null],[3,"AsAggregate","eventually_util::optional","Newtype pattern to ensure compatibility between…",null,null],[8,"Aggregate","","An `Option`-flavoured, [`Aggregate`]-compatible trait to…",null,null],[16,"State","","State of the Aggregate.",1,null],[16,"Event","","Events produced and supported by the Aggregate.",1,null],[16,"Command","","Commands supported by the Aggregate.",1,null],[16,"Error","","Error produced by the the Aggregate while applying…",1,null],[10,"apply_first","","Applies the specified [`Event`] when the [`State`] is empty.",1,[[],["result"]]],[10,"apply_next","","Applies the specified [`Event`] on a pre-existing…",1,[[],["result"]]],[10,"handle_first","","Handles the specified [`Command`] when the [`State`] is…",1,[[["self"]],[["boxfuture",["result"]],["result",["vec"]]]]],[10,"handle_next","","Handles the specified [`Command`] on a pre-existing…",1,[[["self"]],[["result",["vec"]],["boxfuture",["result"]]]]],[11,"as_aggregate","","Translates the current [`optional::Aggregate`] instance…",1,[[],["asaggregate"]]],[0,"versioned","eventually_util","Contains support for Optimistic Concurrency Control using…",null,null],[3,"AsAggregate","eventually_util::versioned","Newtype extension for [`Aggregate`] types to add support…",null,null],[3,"Versioned","","Wrapper to embed version information for un-versioned data…",null,null],[8,"AggregateExt","","Extension trait to add Optimistic Concurrency Control…",null,null],[11,"versioned","","Returns a versioned flavour of an [`Aggregate`].",2,[[],["asaggregate"]]],[11,"new","","Wraps data with the specified version information.",3,[[["u32"],["t"]],["self"]]],[11,"version","","Returns version information.",3,[[["self"]],["u32"]]],[11,"take","","Extracts the wrapped data from the instance.",3,[[],["t"]]],[11,"from","eventually_util::inmemory","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","eventually_util::optional","",5,[[],["t"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","eventually_util::versioned","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",3,[[],["t"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","eventually_util::optional","",5,[[["a"]],["self"]]],[11,"from","eventually_util::versioned","",3,[[["t"]],["self"]]],[11,"clone","eventually_util::inmemory","",4,[[["self"]],["eventstore"]]],[11,"clone","eventually_util::optional","",5,[[["self"]],["asaggregate"]]],[11,"clone","eventually_util::versioned","",6,[[["self"]],["asaggregate"]]],[11,"clone","","",3,[[["self"]],["versioned"]]],[11,"default","eventually_util::inmemory","",4,[[],["self"]]],[11,"default","eventually_util::versioned","",3,[[],["self"]]],[11,"eq","","",3,[[["self"],["versioned"]],["bool"]]],[11,"ne","","",3,[[["self"],["versioned"]],["bool"]]],[11,"deref","","",3,[[["self"]]]],[11,"deref_mut","","",3,[[["self"]]]],[11,"fmt","eventually_util::inmemory","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","eventually_util::optional","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","eventually_util::versioned","",6,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"id","","",3,[[["self"]]]],[11,"apply","eventually_util::optional","",5,[[],["result"]]],[11,"handle","","",5,[[["self"]],[["boxfuture",["result"]],["result",["vec"]]]]],[11,"apply","eventually_util::versioned","",6,[[],["result"]]],[11,"handle","","",6,[[["self"]],[["boxfuture",["result"]],["result",["vec"]]]]],[11,"append","eventually_util::inmemory","",4,[[["vec"],["self"]],[["result"],["boxfuture",["result"]]]]],[11,"stream","","",4,[[["self"]],[["boxfuture",["result"]],["result",["eventstream"]]]]],[11,"remove","","",4,[[["self"]],[["result"],["boxfuture",["result"]]]]],[11,"serialize","eventually_util::versioned","",3,[[["self"],["__s"]],["result"]]],[11,"deserialize","","",3,[[["__d"]],["result"]]]],"p":[[3,"EventStoreBuilder"],[8,"Aggregate"],[8,"AggregateExt"],[3,"Versioned"],[3,"EventStore"],[3,"AsAggregate"],[3,"AsAggregate"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);