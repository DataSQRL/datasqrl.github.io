# AVRO

DataSQRL supports [Avro](https://avro.apache.org/) as a data format and schema.

## Configuration

```json title="orders.table.json"
{
  "type" : "source",
  "canonicalizer" : "system",
  "format" : {
    "name" : "avro"
  },
  "name" : "orders",
  "identifier" : "orders",
  "schema" : "avro",
  "connector" : {
    "name" : "kafka",
    "bootstrap.servers": "${sys:datasqrl.kafka_servers}",
    "group.id": "datasqrl-orders"
  }
}
```

Note, that `avro` is specified as both the data type and schema for the source data.

DataSQRL expects an
AVRO schema file with the same name as the table configuration. For our example `orders.table.json` configuration, DataSQRL
expects an `orders.avsc` file containing the AVRO schema for the table data.

:::info
AVRO is not yet supported as a data sink format. We are working on that. 
:::

## Confluent Schema Registry

If you are using the Confluent schema registry for your AVRO schemas, configure the format as follows:

```json
  "format" : {
    "name" : "avro-confluent",
    "url" : "localhost:8081"
  },
```

Additional configuration options for `avro-confluent`:

| Field Name | Description                                          | Required?     |
|------------|------------------------------------------------------|---------------|
| url        | The URL of the Confluent Schema registry             | Yes  |
| basic-auth.credentials-source | Basic auth credentials source for Schema Registry | no |
| basic-auth.user-info | Basic auth user info for schema registry | no |
| bearer-auth.credentials-source | Bearer auth credentials source for Schema Registry | no |
| bearer-auth.token | Bearer auth token for Schema Registry | no |
| ssl.keystore.location | Location / File of SSL keystore | no |
| ssl.keystore.password | Password for SSL keystore | no |
| ssl.truststore.location | Location / File of SSL truststore | no |
| ssl.truststore.password | Password for SSL truststore | no |
<!--
| schema | The schema registered or to be registered in the Confluent Schema Registry. If no schema is provided Flink converts the table schema to avro schema. The schema provided must match the table schema. | no |
| subject | The Confluent Schema Registry subject under which to register the schema used by this format during serialization. By default, 'kafka' and 'upsert-kafka' connectors use '<topic_name>-value' or '<topic_name>-key' as the default subject name if this format is used as the value or key format. But for other connectors (e.g. 'filesystem'), the subject option is required when used as sink. | no |
-->

Note, that DataSQRL still expects the AVRO schema at compile time. You can download the most recent version from the
schema registry and place it next to the table configuration file.


## Limitations

* DataSQRL does not support AVRO type unions with more than one non-null type. In other words, DataSQRL supports type definitions
like `"type": ["null", "double"]` but not like `"type": ["null", "double", "int"]`.

