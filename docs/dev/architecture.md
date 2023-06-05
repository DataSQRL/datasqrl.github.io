---
title: "Architecture"
---

# DataSQRL Architecture Overview

DataSQRL is a compiler that produces integrated data microservices.

The DataSQRL compiler takes the following inputs that it reads from the local filesystem:

<img src="/img/dev/compilation.svg" alt="DataSQRL compilation overview >" width="400"/>

* **SQRL Scripts**: SQRL scripts are text files that implement the logic of the data service in the [SQRL language](/docs/reference/sqrl/overview). SQRL scripts can import tables defined in other scripts which are resolved and compiled recursively.
* **API Specification** *(optional)*: The [specification of the API](/docs/reference/api/overview) that the DataSQRL compiler generates. Currently, DataSQRL supports GraphQL schema with OpenAPI (Rest) and protocol buffers (gRPC) on the [roadmap](../roadmap). If no API specification is provided, DataSQRL will generate an API that exposes all visible tables and columns defined in the SQRL script.
* **Package Configuration** *(optional)*: The `package.json` file in the directory where the DataSQRL compiler is invoked is the package configuration which defines all configuration options and declares all dependencies. The package configuration defines the architecture of the data service that DataSQRL compiles to and configures all engines in that architecture. If no package manifest is present, DataSQRL uses a default topology, default engines (Flink, Postgres, and Vertx), and default configuration options.
* **Source and Sink Definitions**: The packages referenced by `IMPORT` and `EXPORT` statements in the SQRL script are resolved to data sources and sinks, respectively, which are either defined in local subdirectories or dependencies declared in the package configuration. If the package manager cannot resolve a dependency, it attempts to look it up in the [DataSQRL repository](/docs/reference/operations/repository).

From those provided artifacts, DataSQRL compiles a data microservice with the specified architecture which ingests data from the defined sources, exports processed data to the defined sinks, and exposes an API that matches the provided API specification.

Please refer to the `README.md` and package level documentation in the [repository](https://github.com/DataSQRL/sqrl) and modules for more information. Our aim is to keep most of the code documentation with the source code to avoid discrepancies.