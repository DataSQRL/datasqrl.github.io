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
    "name" : "avro-confluent"
  },
```

Note, that DataSQRL still expects the AVRO schema at compile time. You can download the most recent version from the
schema registry and place it next to the table configuration file.


## Limitations

* DataSQRL does not support AVRO type unions with more than one non-null type. In other words, DataSQRL supports type definitions
like `"type": ["null", "double"]` but not like `"type": ["null", "double", "int"]`.

