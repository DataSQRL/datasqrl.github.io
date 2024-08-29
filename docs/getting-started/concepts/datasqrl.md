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

DataSQRL can generate data pipelines with multiple topologies. Take a look at the [types of data products](/docs/reference/concepts/data-product#types) that DataSQRL can build. You can further customize those pipeline topologies in the DataSQRL [package configuration](/docs/sqrl/datasqrl-spec) which defines the data technologies at each stage of the resulting data pipeline. 

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
- Learn more about the [DataSQRL Optimizer](/docs/reference/sqrl/learn/#datasqrl-optimizer) and how the DataSQRL compiler generates efficient data pipelines.

<!--
### More 

<img src="/img/getting-started/tutorial/nutshop.jpg" alt="Nut Shop Tutorial >|" width="40%"/>

**STEP 1:** Read the [Quickstart](../quickstart) to build a metrics monitoring data product in 10 minutes.

**STEP 2:** Follow one or more of the [DataSQRL tutorials](../tutorials/overview) to learn how to implement various use cases and how to apply the features DataSQRL provides.

**STEP 3:** Build your own data product with DataSQRL. Take a problem from work or grab some data you've been interested in and give it a go.

Need more information? Take a look at the [reference documentation](/docs/reference/introduction) for everything you'd ever wanted to know about DataSQRL and then some. <br />
Got stuck? No worries, the [DataSQRL community](/community) is here to help. Seriously, reach out - we don't bite!

## Understanding the Big Picture

There are a million technologies out there so why should you spend your time on DataSQRL? If you want to understand how DataSQRL fits into the bigger picture and whether it's worth your time, here are some resources to get you started.

<img src="/img/index/undraw_questions_sqrl.svg" alt="DataSQRL allows you to build with data >" width="40%"/>

DataSQRL is a compiler, optimizer, and build tool for data pipelines and event-driven microservices. To implement a data product in DataSQRL, you implement the data processing in SQL and (optionally) define the API of your data product in GraphQL schema. DataSQRL compiles those two artifacts into an optimized data pipeline that ingests, processes, stores, queries, and serves data through a responsive API in realtime.

DataSQRL solves the [data plumbing](../concepts/why-datasqrl#dataplumbing) issue that plagues most data product implementations. It eliminates integration code, schema mappings, physical data modeling, data flow orchestration, and other low-level implementation details that take a lot of time and effort. DataSQRL enables you to implement the entire data pipeline in one piece of code and compiles all the executables you need to deploy the pipeline. In other words, DataSQRL saves you a ton of time, money, and headache.

DataSQRL supports various pipeline topologies and has a pluggable engine architecture that allows DataSQRL to compile to proven technologies like Apache Kafka, Apache Flink, and Postgres. That means you are not relying on DataSQRL in production but can use the technologies and cloud services you already trust. DataSQRL compiles data pipelines that are resilient, fast, and scalable by using an optimizer that determines the most efficient data pipeline for a configured architecture.

* [**What is DataSQRL?**](../concepts/datasqrl): DataSQRL compiles optimized data pipelines. [Learn more](../concepts/datasqrl) about DataSQRL and how it works.
* [**Why Use DataSQRL?**](../concepts/why-datasqrl): DataSQRL eliminates data plumbing enabling you to ship data products quickly with less effort. [Learn more](../concepts/why-datasqrl) about the benefits of DataSQRL.
* [**When Should I Use DataSQRL?**](../concepts/when-datasqrl): DataSQRL empowers your team to build efficient data products successfully. [Find out](../concepts/when-datasqrl) when and when not to use DataSQRL.

What to know more? Start with the [reference documentation](/docs/reference/introduction) to learn everything there is to know about DataSQRL. <br />
-->