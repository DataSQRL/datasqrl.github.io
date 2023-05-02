---
title: "Flink"
---

# Flink Stream Engine

[Apache Flink](https://flink.apache.org/) is an open-source stream processing engine designed to process large volumes of real-time data with low latency and high throughput. Flink uses a distributed dataflow programming model to process data in parallel across a cluster of machines. Flink supports both batch and stream processing, allowing users to analyze both historical and real-time data with the same programming model. Flink also provides fault tolerance and high availability mechanisms, ensuring that data processing is resilient in the face of failures.

Apache Flink is DataSQRL's reference implementation for a stream engine and supports all SQRL features.

## Configure

The Flink stream engine is configured as an engine in the [package configuration](../package-config#engine) with the following configuration options.

| Field Name | Description                                                | Required? |
|------------|------------------------------------------------------------|-----------|
| name       | `flink` string literal                                     | Yes       |

You can add additional Flink configuration options to this configuration and those options are passed through to Flink. Refer to the [Flink configuration documentation](https://nightlies.apache.org/flink/flink-docs-stable/docs/deployment/config/) for a list of options.


## Deploy

Coming soon