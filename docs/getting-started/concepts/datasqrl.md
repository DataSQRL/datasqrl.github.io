---
title: "What is DataSQRL?"
---

# What is DataSQRL?


DataSQRL is an open-source compiler and build tool for developing data services. A [data service](/docs/reference/concepts/data-service) processes, transforms, or analyzes data from one or multiple sources (databases, data streams, file storage, etc.) and exposes the result through an API. <br />
DataSQRL eliminates most of the laborious code of stitching together data pipelines and makes it easier for developers to build data services.

Building a data service with DataSQRL takes 3 steps:

1. **Implement SQRL script:** You combine, transform, and analyze the input data by implementing SQRL scripts. [SQRL](../sqrl) is a language based on SQL with some added features that make it easy to express the logic and structure of your data service.
2. **Customize API:** The transformed data is exposed through an API which you can customize to meet your data service requirements by editing the API specification. This step is optional since DataSQRL can also generate a default API spec for you.
3. **Compile Data Pipeline:** DataSQRL compiles the SQRL script and API specification into a fully integrated data pipeline. The compiled pipeline ingests the imported data, processes it according to the transformations and analyses defined in the SQRL script, and serves the resulting data through the specified API.

In a nutshell, DataSQRL is an abstraction layer that takes care of the nitty-gritties of building efficient streaming data pipelines and gives developers an easy-to-use tool to build custom data APIs.

Follow the [quickstart tutorial](../../quickstart) to build a data service in a few minutes and see how DataSQRL works in practice.

## How DataSQRL Works

<img src="/img/generic/general_pipeline.svg" alt="Compiled DataSQRL Pipeline" width="100%"/>

DataSQRL compiles the SQRL script and API specification into a data pipeline that consists of a streaming engine, database engine, and API server [[1]](#footnotes). The streaming engine ingests the imported data, processes it, and writes the results to the database. The API server translates incoming requests into database queries and assembles the response from the returned query results. <br />
It's like a harmonious orchestra of data technologies with DataSQRL as the conductor.

The engines can be packaged together to run on a single instance or can be scaled independently for large deployments. <br />
DataSQRL has a pluggable architecture which means it supports various streaming, database, and server engines such as [Apache Flink](https://flink.apache.org/), [Postgres](https://www.postgresql.org/), [Vertx](https://vertx.io/), [and more](/docs/reference/operations/engines/overview). Feel free to contribute your favorite data technology as a DataSQRL engine to the open-source, wink wink.

## What DataSQRL Does

Okay, you get the idea of a compiler for data services that produces end-to-end data pipelines. But what exactly does DataSQRL do for you? Glad you asked.

To produce fully integrated data pipelines, the DataSQLR compiler:
* resolves data imports to data source connectors and generates input schemas for the stream ingestion,
* synchronizes data schemas and data management across all engines in the pipeline,
* aligns timestamps and watermarks across the engines,
* orchestrates the pipeline for optimal data flow between engines,
* translates the SQRL script to the respective engine for execution,
* and generates an API server that implements the given API specification.

To produce high-performance data services that respond to new input data in realtime and provide low latency, high throughput APIs to many concurrent users, DataSQRL optimizes the compiled data pipeline by:
* partitioning the data flow and co-locating data where possible.
* pruning the execution graph and consolidating repetitive computations.
* determining when to pre-compute data transformations in the streaming engine to reduce response latencies versus computing result sets at request time in the database or server to avoid data staleness and combinatorial explosion in pre-computed results.
* determining the optimal set of index structures to install in the database.

In other words, DataSQRL can save you a lot of time and allows you to focus on what matters: implementing the logic and API of your data service. 

## Learn More

- Read the [quickstart tutorial](../../quickstart) to get a feel for DataSQRL and the SQRL language while building an entire data service in 5 minutes.
- Find out [Why DataSQRL Exists](../why-datasqrl) and what benefits it provides.
- [Compare DataSQRL](../../comparison/overview) to other data technologies and see when to use it.
- Learn more about the [DataSQRL Optimizer](/docs/reference/operations/optimizer) and how the DataSQRL compiler generates efficient data pipelines.

## Footnotes

**[1]** DataSQRL supports arbitrary DAG topologies for the underlying data pipeline and additional types of data engines. This is a simplification for the most common use cases.