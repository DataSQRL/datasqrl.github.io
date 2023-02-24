# DataSQRL Engines

An **engine** is a system or technology that executes part of the data pipeline compiled by DataSQRL. 

Which engines DataSQRL compiles to is configured in the [package configuration](../package-config) which also defines the pipeline topology. See the [build documentation](../build) for more details.

DataSQRL supports 3 types of engines that play distinct roles in a data pipeline: stream engines, database engines, and server engines.

## Stream Engine

A stream engine is a stream processing system that can ingest data from external data sources, process the data, and pass the results to external data sinks.

DataSQRL currently supports the following stream engines:

* [Apache Flink](flink): Apache Flink is a fault-tolerant and scalable open-source stream processing engine. 


## Database Engine

A database engine reliably persists data for concurrent query access.

DataSQRL currently supports the following database engines:

* [Postgres](postgres): Postgres is an open-source relational database management system.

## Server Engine

A server engine efficiently processes data API requests, fetches the result set, and returns it.

DataSQRL currently supports the following server engines:

* [Vertx](vertx): Vertx is concurrent and asynchronous server engine for Java.

## Search Engine

coming soon

## Cache Engine

coming soon



