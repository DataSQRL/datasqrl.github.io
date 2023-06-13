---
title: "What is DataSQRL?"
---

# What is DataSQRL?


DataSQRL is an open-source compiler and build tool for developing event-driven microservices, streaming applications, and data services. A [data service](/docs/reference/concepts/data-service) processes, transforms, or analyzes data from one or multiple sources (user input, databases, data streams, API calls, file storage, etc.) and exposes the result through an API. <br />
DataSQRL eliminates most of the laborious code of implementing and stitching together data services.

Building a data service with DataSQRL takes 3 steps:

1. **Implement SQL script:** You combine, transform, and analyze the input data using SQL.
2. **Customize API:** You define how to expose the transformed data in the API and how to accept input data.
3. **Compile Data Microservice:** DataSQRL compiles the SQL script and API specification into a fully integrated data microservice. The compiled data service ingests the user and imported data, processes it according to the transformations and analyses defined in the SQL script, and serves the resulting data through the specified API.

In a nutshell, DataSQRL is an abstraction layer that takes care of the nitty-gritties of building efficient data microservices and gives developers an easy-to-use tool to build custom data APIs.

Follow the [quickstart tutorial](../../quickstart) to build a data service in a few minutes and see how DataSQRL works in practice.

## How DataSQRL Works

<img src="/img/reference/compiledMicroservice.svg" alt="Compiled DataSQRL Data Service >" width="60%"/>

DataSQRL compiles the SQL script and API specification into a data service that uses [Apache Kafka](https://kafka.apache.org/), [Apache Flink](https://flink.apache.org/), a database, and API server [[1]](#footnotes). Kafka stores user input and result streams. Flink ingests the imported data, processes it, and writes the results to the database. The API server translates incoming requests into database queries and assembles the response from the returned query results. <br />
It's like a harmonious orchestra of data technologies with DataSQRL as the conductor.

The components can be packaged together to run on a single instance or can be scaled independently for larger deployments. <br />
DataSQRL has a pluggable architecture which means you can swap out engines (e.g. replace the database) and configure each component individually. Feel free to contribute your favorite data technology as a DataSQRL engine to the open-source, wink wink.

## What DataSQRL Does

Okay, you get the idea of a compiler that produces integrated data microservices. But what exactly does DataSQRL do for you? Glad you asked.

<img src="/img/reference/compilation_simplified.svg" alt="DataSQRL Compilation >" width="50%"/>

To produce fully integrated data services, the DataSQLR compiler:
* resolves data imports to data source connectors and generates input schemas for the stream ingestion,
* synchronizes data schemas and data management across all engines in the data service,
* aligns timestamps and watermarks across the engines,
* orchestrates optimal data flow between engines,
* translates the SQL script to the respective engine for execution,
* and generates an API server that implements the given API specification.

To produce high-performance data services that respond to new input data in realtime and provide low latency, high throughput APIs to many concurrent users, DataSQRL optimizes the compiled data service by:
* partitioning the data flow and co-locating data where possible.
* pruning the execution graph and consolidating repetitive computations.
* determining when to pre-compute data transformations in the streaming engine to reduce response latencies versus computing result sets at request time in the database or server to avoid data staleness and combinatorial explosion in pre-computed results.
* determining the optimal set of index structures to install in the database.

In other words, DataSQRL can save you a lot of time and allows you to focus on what matters: implementing the logic and API of your data service. 

## Learn More

- Read the [quickstart tutorial](../../quickstart) to get a feel for DataSQRL while building an entire data service in 5 minutes.
- Find out [Why DataSQRL Exists](../why-datasqrl) and what benefits it provides.
- [Compare DataSQRL](../../concepts/when-datasqrl) to other data technologies and see when to use it.
- Learn more about the [DataSQRL Optimizer](/docs/reference/operations/optimizer) and how the DataSQRL compiler generates efficient data services.

## Footnotes

**[1]** DataSQRL supports arbitrary DAG topologies for the underlying data service and additional types of data engines. This is a simplification for the most common use cases.