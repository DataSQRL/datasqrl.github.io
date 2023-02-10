---
title: "View Store"
---

(don't use - kept just for reference)

# What is a View Store?

A view store is a data system that provides fast, concurrent access to partially maintained views over streaming sources of input data.

That's a lot in one sentence, let's unpack it starting at the end.

* **Streaming sources of input data:** A view store processes data produced by other systems which are the sources of input data. A view store is not a transactional database or authoritative data store. It combines input data from multiple sources and processes it. To respond to changes or new data in realtime, input data is streamed into a view store.
* **View:** "Processing data" means computing views over the input data. A [view](https://en.wikipedia.org/wiki/View_(SQL)) is a database term for the result set of a pre-defined query. By composing views, a view store can derive arbitrary transformations or analytics on the input data.
* **Maintained View:** A view is called *maintained* if the result set of the view is incrementally maintained as the input data changes. Maintaining a view makes it faster to query for its results.
* **Partially maintained views:** A view store is capable of maintaining views or computing views at query time depending on the needs of the user. A view store can flexibly adjust the way it computes views to trade-off the computational cost needed to maintain views when input data changes versus computing the views at query time.
* **Fast, concurrent access:** A view store is a responsive, operational data system which means new input data is immediately available for querying and the system can support a large number of concurrent users while providing low latency (<100ms) response times.

A view store is a data system that can support realtime data services and data-driven features in user facing applications. Software developers rely on view stores to serve data-intensive or complex queries in their data service or application over external sources of data.

The motivation for breaking out view stores as a distinct category of data systems is similar to that for data warehouses. <br />
A data warehouse is a data system that combines, transforms, and consolidates input data from multiple transactional databases and other data sources to provide an environment where analysts can run business intelligence queries. <br />
A view store does the same but provides an environment where software developers can implement data services and data-driven features.

Data warehouses and view stores share many similarities: they both consume data from multiple external sources, they consolidate, integrate, and transform this data, and they execute complex queries and analytics over the data.
Where they differ is in their use and operational characteristics. Data warehouses serve business intelligence and data science workloads which are sporadic, one-off queries that can take a substantial amount of time (seconds to hours) to complete.
View stores serve application workloads which have pre-defined query that are executed thousands of times per second with low latency expectations on the order of milliseconds. 

In the context of machine learning workloads, view stores are often called "feature stores" because the computed views are features used by a machine learning algorithm.