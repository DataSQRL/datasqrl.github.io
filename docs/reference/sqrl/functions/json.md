---
title: "JSON Functions"
---

# Text Functions

The `json` function package contains functions for creating, querying, and manipulating JSON objects.

```sql
IMPORT json.*; -- imports all functions
IMPORT json.toJson; -- imports single function
```

## Reference

The following table lists all the functions in the `json` package with a short description.

| Function Name         | Description   |
|-----------------------|---------------|
| jsonArray | Creates a JSON array from the list of JSON objects and scalar values. | 
| jsonArrayAgg | Aggregation function that aggregates JSON objects into a JSON array. | 
| jsonExists | For a given JSON object, checks whether the provided JSON path exists | 
| jsonExtract | Extracts a value from the JSON object based on the provided JSON path. An optional third argument can be provided to specify a default value when the given JSON path does not yield a value for the JSON object. | 
| jsonObject | Creates a JSON object from key-value pairs, where the key is mapped to a field with the associated value. Key-value pairs are provided as a list of even length, with the first element of each pair being the key and the second being the value. If multiple key-value pairs have the same key, the last pair is added to the JSON object. | 
| jsonObjectAgg | Aggregation function that merges JSON objects into a single JSON object. If two JSONobjects share the same field name, the value of the later one is used in the aggregated result. | 
| jsonQuery | For a given JSON object, executes a JSON path query against the object and returns the result as string. | 
| jsonToString | Converts a JSON object to string | 
| toJson | Parses a JSON object from string | 