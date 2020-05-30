(function() {var implementors = {};
implementors["eventually_core"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_core/aggregate/struct.AggregateRootBuilder.html\" title=\"struct eventually_core::aggregate::AggregateRootBuilder\">AggregateRootBuilder</a>&lt;T&gt;","synthetic":false,"types":["eventually_core::aggregate::AggregateRootBuilder"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_core/store/struct.PersistedEvent.html\" title=\"struct eventually_core::store::PersistedEvent\">PersistedEvent</a>&lt;T&gt;","synthetic":false,"types":["eventually_core::store::PersistedEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"eventually_core/store/enum.Select.html\" title=\"enum eventually_core::store::Select\">Select</a>","synthetic":false,"types":["eventually_core::store::Select"]}];
implementors["eventually_postgres"] = [{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_postgres/struct.EventStore.html\" title=\"struct eventually_postgres::EventStore\">EventStore</a>&lt;Id, Event&gt;","synthetic":false,"types":["eventually_postgres::EventStore"]}];
implementors["eventually_test"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_test/log/struct.Middleware.html\" title=\"struct eventually_test::log::Middleware\">Middleware</a>","synthetic":false,"types":["eventually_test::log::Middleware"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_test/order/struct.OrderItem.html\" title=\"struct eventually_test::order::OrderItem\">OrderItem</a>","synthetic":false,"types":["eventually_test::order::OrderItem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderState.html\" title=\"enum eventually_test::order::OrderState\">OrderState</a>","synthetic":false,"types":["eventually_test::order::OrderState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_test/order/struct.Order.html\" title=\"struct eventually_test::order::Order\">Order</a>","synthetic":false,"types":["eventually_test::order::Order"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderEvent.html\" title=\"enum eventually_test::order::OrderEvent\">OrderEvent</a>","synthetic":false,"types":["eventually_test::order::OrderEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderError.html\" title=\"enum eventually_test::order::OrderError\">OrderError</a>","synthetic":false,"types":["eventually_test::order::OrderError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_test/order/struct.OrderAggregate.html\" title=\"struct eventually_test::order::OrderAggregate\">OrderAggregate</a>","synthetic":false,"types":["eventually_test::order::OrderAggregate"]}];
implementors["eventually_util"] = [{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_util/inmemory/struct.EventStore.html\" title=\"struct eventually_util::inmemory::EventStore\">EventStore</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,&nbsp;</span>","synthetic":false,"types":["eventually_util::inmemory::EventStore"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_util/optional/struct.AsAggregate.html\" title=\"struct eventually_util::optional::AsAggregate\">AsAggregate</a>&lt;A&gt;","synthetic":false,"types":["eventually_util::optional::AsAggregate"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()