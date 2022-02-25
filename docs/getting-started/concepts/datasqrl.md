---
title: "DataSQRL"
---

# What is DataSQRL?

DataSQRL is a data system that makes it easy and productive to build [data services](data-service) from external data sources.

Implementing a data service with DataSQRL takes only 3 steps:

1. You connect your data sources to DataSQRL. DataSQRL has connectors for files, database, queues, and logs.
2. You combine, transform, and analyze the input data by implementing SQRL scripts. [SQRL](sqrl) is a language based on SQL with some added constructs that make it easy to express the logic and structure of your data service.
3. DataSQRL compiles your SQRL script to a fully functioning data service that integrates a data pipeline, database, and API server. You can call the API from your applications or other backend services to implement data-driven features or other data-intensive functionality.

DataSQRL compiles SQRL into data services that ingest input data from connected sources, processes it according to the logic expressed in SQRL, and serves the result through an API. DataSQRL does all the laborious work of pipeline orchestration, data synchronization, schema management, and process optimization.

Developers use DataSQRL to implement responsive data services, i.e. data services that respond to new input data in realtime and serve the result through low latency, high throughput APIs to many concurrent users. <br />
DataSQRL accomplishes this combination of high responsiveness to incoming data and high responsiveness to many concurrent API requests by partially pre-computing results in the data pipeline so that API queries can be computed quickly and with little data movement in the database. <br />
Since SQRL is a declarative language, the DataSQRL compiler determines how to implement the defined data transformations most effectively and which ones get pre-computed. This saves you a lot of work and the headache associated with sorting out low-level optimizations and data structures.

DataSQRL is an implementation of a [view store](/docs/getting-started/concepts/view-store) that fills the gap between database systems and data warehouses for data services that need a bit of both: the analytic capabilities of a data warehouse and the high responsiveness and concurrency of a database.

## Learn More

- Read the [introductory tutorial](../nutshop-tutorial) to get a feel for DataSQRL and the SQRL language while building an entire data service in 10 minutes.
- Find out [Why DataSQRL Exists](../why-datasqrl) and what benefits it provides.
- [Compare DataSQRL](../comparison/overview) to other data technologies and see when to use it.