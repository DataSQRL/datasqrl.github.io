
# Export

The `EXPORT` statement feeds records from a stream table to an external data system or action trigger in realtime.

Export statements are used to react to data by publishing the rows in a stream table to some external system that further processes the data or triggering an action immediately.

An export statement connects a stream table to a table sink which is identified by the export path.

```sql
EXPORT UserPromotion TO mysink.promotion;
```
This statement exports the stream table `UserPromotion` to the sink table `promotion` inside the `mysink` package via the export path `mysink.promotion`.

Import and export paths are resolved identically. Refer to the [import documentation](../import) to see how DataSQRL resolves packages.

## Export to Data System

To export to a data system, you need to define a data sink package. A data sink configures how to connect to an external data system and what table sink are available. <br />
Refer to the [data sources and sink](../../sources/overview) documentation for more details.

`print` is a data sink that is part of the SQRL standard library (i.e. it does not require a data sink package) and prints all records in the stream table.

## Export to Action Trigger

Coming soon.