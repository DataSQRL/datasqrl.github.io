# CSV

DataSQRL supports [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) as a data format.

## Configuration

```json title="system.discovery.table.json"
{
  "type": "source",
  "connector": { ... }
  "format" : {
    "name": "csv",
    "delimiter": ",",
  }
}
```

The CSV data format configuration supports the following options:

| Field Name   | Description   | Required?     |
|--------------|---------------|---------------|
| delimiter | The string that separates the values in a line. Defaults to `,` | No  |
| commentPrefix | Any line that starts with this string is considered a comment and ignored | No  |
| header | The names of the columns in a CSV file. These are usually in the first line. | No  |

## Data Discovery

When using the CSV data format for data discovery, you should *not* specify the header. Data discovery will read the first line of each CSV file and automatically extract the header for each table source in the data source.

If your CSV files do not have a header, or you are not running data discovery to extract it, you will have to [define each table source manually](../../discovery#manual) and configure the header with the array of field names for the CSV file.

## Schema

Data discovery automatically determines the [schema](../../schema) for a table source when using the CSV data format.

The CSV data format does not support any other schema types.