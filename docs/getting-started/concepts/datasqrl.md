---
title: "What is DataSQRL?"
---

# What is DataSQRL?


DataSQRL is an open-source compiler and build tool for implementing data products as data pipelines. A [data product](/docs/reference/concepts/data-product) processes, transforms, or analyzes data from one or multiple sources (user input, databases, data streams, API calls, file storage, etc.) and exposes the result as raw data, in a database, or through an API. <br />
DataSQRL eliminates most of the laborious code of implementing and stitching together multiple technologies into data pipelines.

Building a data product with DataSQRL takes 3 steps:

1. **Implement SQL script:** You combine, transform, and analyze the input data using SQL.
2. **Expose Data (optional):** You define how to expose the transformed data in the API or database.
3. **Compile Data Pipeline:** DataSQRL compiles the SQL script and output specification into a fully integrated data pipeline. The compiled data pipeline ingests raw data, processes it according to the transformations and analyses defined in the SQL script, and serves the resulting data through the specified API or database.

In a nutshell, DataSQRL is an abstraction layer that takes care of the nitty-gritties of building efficient data pipelines and gives developers an easy-to-use tool to build data products.

Follow the [quickstart tutorial](../../quickstart) to build a data product in a few minutes and see how DataSQRL works in practice.

## How DataSQRL Works

<img src="/img/reference/compiledPipeline.svg" alt="Compiled DataSQRL data pipeline >" width="60%"/>

DataSQRL compiles the SQL script and output specification into a data pipeline that uses data technologies like [Apache Kafka](https://kafka.apache.org/), [Apache Flink](https://flink.apache.org/), or [Postgres](https://postgresql.org/). 

DataSQRL has a pluggable engine architecture which allows it to support various stream processors, databases, data warehouses, data streams, and API servers. Feel free to contribute your favorite data technology as a DataSQRL engine to the open-source, wink wink.

DataSQRL can generate data pipelines with multiple topologies. Take a look at the [types of data products](/docs/reference/concepts/data-product#types) that DataSQRL can build. You can further customize those pipeline topologies in the DataSQRL [package configuration](/docs/reference/operations/package-config) which defines the data technologies at each stage of the resulting data pipeline. 

DataSQRL compiles executables for each engine in the pipeline which can be deployed on the data technologies and cloud services you already use.
In addition, DataSQRL provides development tooling that makes it easy to run and test data pipelines locally to speed up the development cycle.

## What DataSQRL Does

Okay, you get the idea of a compiler that produces integrated data pipelines. But what exactly does DataSQRL do for you? Glad you asked.

<img src="/img/index/howDataSQRLWorksPipeline.svg" alt="DataSQRL Compilation >" width="50%"/>

To produce fully integrated data pipelines, the DataSQLR compiler:
* resolves data imports to data source connectors and generates input schemas for the stream ingestion,
* synchronizes data schemas and data management across all engines in the data pipeline,
* aligns timestamps and watermarks across the engines,
* orchestrates optimal data flow between engines,
* translates the SQL script to the respective engine for execution,
* and generates an API server that implements the given API specification.

To produce high-performance data pipelines that respond to new input data in realtime and provide low latency, high throughput APIs to many concurrent users, DataSQRL optimizes the compiled data pipeline by:
* partitioning the data flow and co-locating data where possible.
* pruning the execution graph and consolidating repetitive computations.
* determining when to pre-compute data transformations in the streaming engine to reduce response latencies versus computing result sets at request time in the database or server to avoid data staleness and combinatorial explosion in pre-computed results.
* determining the optimal set of index structures to install in the database.

In other words, DataSQRL can save you a lot of time and allows you to focus on what matters: implementing the logic and API of your data product. 

## Learn More

- Read the [quickstart tutorial](../../quickstart) to get a feel for DataSQRL while building an entire data product in 10 minutes.
- Find out [Why DataSQRL Exists](../why-datasqrl) and what benefits it provides.
- [Compare DataSQRL](../../concepts/when-datasqrl) to other data technologies and see when to use it.
- Learn more about the [DataSQRL Optimizer](/docs/reference/operations/optimizer) and how the DataSQRL compiler generates efficient data pipelines.

