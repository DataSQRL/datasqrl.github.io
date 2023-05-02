# JSON

DataSQRL supports [JSON](https://en.wikipedia.org/wiki/JSON) as a data format.

## Configuration

```json title="system.discovery.table.json"
{
  "type": "source",
  "connector": { ... }
  "format" : {
    "name": "json",
  }
}
```

You only have to specify the format type - no other configuration options are required.

## Schema

Data discovery automatically determines the [schema](../schema) for a table source when using the JSON data format.

Alternatively, you can configure DataSQRL to use [JSON Schema](https://json-schema.org/) for a source table by providing a JSON schema file with the name of the table and the extension `.schema.json`. 