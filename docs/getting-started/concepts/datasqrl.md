---
title: "What is DataSQRL?"
---

# What is DataSQRL?

Copy-paste repo README

DataSQRL is a flexible data development framework for building various types of streaming data architectures, like data pipelines, event-driven microservices, and Kappa. It provides the basic structure, common patterns, and a set of tools for streamlining the development process of [data products](/docs/reference/concepts/data-product).

DataSQRL integrates any combination of the following technologies:
* **Apache Flink:** a distributed and stateful stream processing engine.
* **Apache Kafka:** a distributed streaming platform.
* **PostgreSQL:** a reliable open-source relational database system.
* **Apache Iceberg:** an open table format for large analytic datasets.
* **Snowflake:** a scalable cloud data warehousing platform.
* **RedPanda:** a Kafka-compatible streaming data platform.
* **Yugabyte:** a distributed open-source relational database.
* **Vert.x:** a reactive server framework for building data APIs.

You define the data processing in SQL (with support for custom functions in Java, Scala and soon Python) and DataSQRL generates the glue code, schemas, and mappings to automatically connect and configure these components into a coherent data architecture. DataSQRL also generates Docker Compose templates for local execution or deployment to Kubernetes or cloud-managed services.

<img src="docs/img/datasqrl_architectures.jpg" alt="The architectures that DataSQRL supports " width="100%"/>

DataSQRL supports multiple types of data architectures as shown above. Learn more about the [10 types of data architectures](../when-datasqrl) you can build with DataSQRL.

## DataSQRL Features

* 🔗 **System Integration:** Combine various data technologies into streamlined data architectures.
* ☯️ **Declarative + Imperative:** Define the data flow in SQL and specific data transformations in Java, Scala, or soon Python.
* 🧪 **Testing Framework:** Automated snapshot testing.
* 🔄 **Data Flow Optimization:** Optimize data flow between systems through data mapping, partitioning, and indexing for scalability and performance.
* ✔️ **Consistent:** Ensure at-least or exactly-once data processing for consistent results across the entire system.
* 📦 **Dependency management:** Manage data sources and sinks with versioning and repository.
* 📊 **GraphQL Schema Generator:** Expose processed data through a GraphQL API with subscription support for headless data services. (REST coming soon)
* 🤖 **Integrated AI:** Support for vector data type, vector embeddings, LLM invocation, and ML model inference.
* { } **JSON Support:** Native JSON data type and JSON schema discovery.
* 🔍 **Visualization Tools:** Inspect and debug data architectures visually.
* 🪵 **Logging framework:** for observability and debugging.
* 🚀 **Deployment Profiles:** Automate the deployment of data architectures through configuration.

In a nutshell, DataSQRL is an abstraction layer that takes care of the nitty-gritties of building efficient data pipelines and gives developers an easy-to-use tool to build data products.

Follow the [quickstart tutorial](../../quickstart) to build a data product in a few minutes and see how DataSQRL works in practice.

## How DataSQRL Works

DataSQRL extends ANSI SQL with additional features designed for data development:

* **IMPORT/EXPORT statements**: Integrate data sources and export data to sinks.
* **Assignment Operator (:=)**: Define incremental table structures.
* **Stream Processing SQL**: Enhanced SQL statements for stream processing.
* **Nested Structures**: Natively support nested data structures like JSON.

<img src="docs/img/dag_example.png" alt="Example DataSQRL DAG >" width="50%" />

DataSQRL translates these SQL scripts into a data processing DAG (Directed Acyclic Graph) as visualized above, linking source and sink definitions. The cost-based optimizer cuts the DAG into segments executed by different engines (e.g. Flink, Kafka, Postgres, Vert.x), generating the necessary physical plans, schemas, and connectors for a fully integrated and streamlined data architecture. This "plan" can be instantiated by deployment profiles, such as Docker Compose templates for local execution.

Check out the [reference documentation](/docs/reference/sqrl/sqrl-spec) for a deep-dive on all things DataSQRL.

## Why DataSQRL?

Data engineers spend considerable time integrating various tools and technologies, ensuring performance, scalability, robustness, and observability. DataSQRL automates these tasks, making it easier to implement, test, debug, observe, deploy, and maintain data products. Like a web development framework, but for data.

Our goal is to eliminate the data engineering busywork, so you can focus on building and iterating on data products. Learn more about [Why DataSQRL Exists](../why-datasqrl) and what benefits it provides.


