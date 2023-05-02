# Print

The print data sink prints the data records in a stream to standard output.

The print data sink is always available as an [internal package](../../concepts/package#internal-package) and does not need to be configured or included in a project.

```sql
EXPORT NewCustomerPromotion TO print.Promotion; 
```

This export statement prints all records in the `NewCustomerPromotion` stream table and uses the sink table name `Promotion` as the prefix in the output.

# Print Sink Connector

:::info
Defining a print sink is not necessary as it is pre-configured under the internal package name `print`. Only define a new print sink if you need to customize it or make it available under a different package name.
:::

To define a print sink, use the following configuration in the `system.discovery.table.json`:

```json title="system.discovery.table.json"
{
  "type": "sink",
  "name": "myprint",
  "connector": {
    "name": "print",
    "prefix": "myOwnPrint-"
  }
}
```

The print connector has the following configuration options:

| Field Name   | Description   | Required?     |
|--------------|---------------|---------------|
| prefix      | Prefix is prepended to the sink table name in the print output | No  |

The print data sink dynamically generates table sinks which means it is not required to configure individual table sinks, and you don't have to run data discovery to create a print sink package. The `system.discovery.table.json` file is sufficient to configure a print sink package.
