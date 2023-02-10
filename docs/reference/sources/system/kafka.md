# Apache Kafka

DataSQRL supports [Apache Kafka](https://kafka.apache.org/) as a data source and data sink to ingest or export data stream. 

## Kafka Connector

```json title="datasystem.json"
{
  "type": "source",
  "connector": {
    "systemType": "kafka",
    "servers": ["111.0.0.100"],
  }
}
```

The Kafka connector has the following configuration options:

| Field Name   | Description   | Required?     |
|--------------|---------------|---------------|
| servers | List of server IPs for Kafka instances to connect to | Yes  |
| topicPrefix | Limits data discovery to topic with the given prefix | No  |


### Data Format {#format}

The Kafka connector supports all streaming [data formats](/docs/category/data-format).

The Kafka connector supports automatic data format discovery based on the topic name extension. For example, a topic name that ends in `.json` is assumed to have the [JSON data format](../format/json). Unless your Kafka topics use this particular naming convention, you have to configure a data format in the data system configuration.

## Data Discovery

Data discovery retrieve all topics in the Apache Kafka cluster. If a `topicPrefix` is configured, it filters out all topics that don't match the prefix. Data discovery maps each topic to a table source or sink.
If the topic name has an extension that matches a [data format](#format), data discovery configures that data format for the table. The data format configured in the data system configuration takes precedent. The table name is the name of the topic (without extension).

Data discovery reads part of the data stream for each topic to determine the schema of the table, unless a schema is configured.

## Data Sink

Kafka can be configured as a data sink by setting the `type` to `sink` or `source_and_sink`. `format` is a required field when using the Kafka as a sink. The exported stream table published to the topic with the name of the table sink.

<!--

Kafka supports dynamic table sinks which means you only need to configure the `datasystem.json` file and DataSQRL creates table sinks at compile time. You don't need to run data discovery or configure individual table sinks when using Kafka as a dynamic sink.
-->