---
title: "Flink"
---

# Flink Stream Engine

[Apache Flink](https://flink.apache.org/) is an open-source stream processing engine designed to process large volumes of real-time data with low latency and high throughput. Flink uses a distributed dataflow programming model to process data in parallel across a cluster of machines. Flink supports both batch and stream processing, allowing users to analyze both historical and real-time data with the same programming model. Flink also provides fault tolerance and high availability mechanisms, ensuring that data processing is resilient in the face of failures.

Apache Flink is DataSQRL's reference implementation for a stream engine and supports all SQRL features.

## Configure

The Flink stream engine is configured as an engine in the [package configuration](../../package-config#engine) with the following configuration options.

| Field Name | Description                                                | Required? |
|------------|------------------------------------------------------------|-----------|
| name       | `flink` string literal                                     | Yes       |

You can add additional Flink configuration options to this configuration and those options are passed through to Flink. Refer to the [Flink configuration documentation](https://nightlies.apache.org/flink/flink-docs-stable/docs/deployment/config/) for a list of options.


## Deploy

### Deployment Artifacts

The DataSQRL compiler generates a flink execution plan in the file `build/deploy/flink-plan.json`. It contains the configuration of all imported data sources, connectors for those sources, and table or data stream definitions for all tables that are pre-computed in Flink.

### Build Executable

To build an optimized Flink jar for the execution plan, run the following command:

```bash
docker run -it --rm -v $PWD/build:/build datasqrl/engine-flink
```

It produces a jar file called `flink-job.jar` that includes all required configurations and dependencies.

### Deploy Executable

You can submit the `flink-job.jar` to an existing Flink cluster, run it on a managed flink service, or set up a new Flink cluster to execute it.

You can submit the executable jar via the [Flink cli](https://nightlies.apache.org/flink/flink-docs-master/docs/deployment/cli/#submitting-a-job) or the [Flink Rest API](https://nightlies.apache.org/flink/flink-docs-master/docs/ops/rest_api/) using the `/jars/upload` endpoint.

Take a look at the [docker documentation](../../deploy/docker) for using docker to automate the setup of a FLink cluster and submitting of the executable jar.