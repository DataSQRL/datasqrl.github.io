---
title: "Architecture"
---

# DataSQRL Architecture Overview

DataSQRL is a compiler that produces fully integrated data pipelines.

The DataSQRL compiler takes the following inputs that it reads from the local filesystem:

<img src="/img/dev/compilation.svg" alt="DataSQRL compilation overview >" width="400"/>

* **SQRL Scripts**: SQRL scripts are text files that implement the logic of the data service in the [SQRL language](/docs/getting-started/concepts/sqrl). SQRL scripts can import tables defined in other scripts which are resolved and compiled recursively.
* **API Specification** *(optional)*: The [specification of the API](/docs/reference/api/overview) that the DataSQRL compiler generates. Currently, DataSQRL supports GraphQL schema with OpenAPI (Rest) and protocol buffers (gRPC) on the [roadmap](roadmap). If no API specification is provided, DataSQRL will generate an API that exposes all visible tables and columns defined in the SQRL script.
* **Package Configuration** *(optional)*: The `package.json` file in the directory where the DataSQRL compiler is invoked is the package configuration which defines all configuration options and declares all dependencies. The package configuration defines the topology of the data pipeline that DataSQRL compiles to and configures all engines in that topology. If no package manifest is present, DataSQRL uses a default topology, default engines (Flink, Postgres, and Vertx), and default configuration options.
* **Source and Sink Definitions**: The packages referenced by `IMPORT` and `EXPORT` statements in the SQRL script are resolved to data sources and sinks, respectively, which are either defined in local subdirectories or dependencies declared in the package configuration. If the package manager cannot resolve a dependency, it attempts to look it up in the [DataSQRL repository](/docs/reference/operations/repository).

From those provided artifacts, DataSQRL compiles a data pipeline with the specified topology which ingests data from the defined sources, exports processed data to the defined sinks, and exposes an API that matches the provided API specification.

The [DataSQRL codebase](https://github.com/DataSQRL/sqrl) consists of the following modules:

* **sqrl-common**: Common module used by all compiler modules. Defines the DataSQRL type system.
* **sqrl-schemas**: An abstract representation of schemas and infrastructure for schema mapping and synchronization.
* **sqrl-parser**: Parses SQRL scripts into abstract syntax trees (AST).
* **sqrl-loader**: The compiler uses a pluggable loader infrastructure to resolve `IMPORT` and `EXPORT` package references at compile time.
* **sqrl-io**: The io modules define different types of data sources and sinks supported by DataSQRL. The `sqrl-io-core` module implements supports for data formats.
* **sqrl-engine**: Each module defines an engine that is supported by DataSQRL.
* **sqrl-planner**: Contains the transpiler which translates the SQRL ASTs for each SQRL statement to relational logical plans represented as [Calcite](https://calcite.apache.org/) Relnodes. The Relnodes are then connected into a DAG that represents the entire script which is passed to an optimizer that produces the physical plans for each engine which are then rewritten for each engine based on the engine's physical planner. Most of the magic of DataSQRL happens in this module.
* **sqrl-compiler**: Combines planner components into a compiler that generate the pipeline and writes the pipeline artifacts into the `deploy` directory.
* **sqrl-packager**: Preprocessor which populates the `build` directory for the compiler. Downloads dependencies, runs pre-processors, generates package manifest, and handles other conveniences before invoking the compiler.
* **sqrl-discovery**: Discovers table and schemas for a given data source definition.
* **sqrl-run**: Implements the DataSQRL command line interface.

Please refer to the `README.md` and package level documentation in the [repository](https://github.com/DataSQRL/sqrl) and modules for more information. Our aim is to keep most of the code documentation with the source code to avoid discrepancies.