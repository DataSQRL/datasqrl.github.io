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

| Function Name                        | Description                                                                                                                         |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `JsonExtract(json, String, Any)` | Extracts a value from a JSON object based on a JSON path specification. Returns the value at the specified path, or a default value if the path is not found or in case of an error. Useful for navigating complex JSON structures. |
| `ToJson(Any)`                        | Converts a given input into a `json` object. This conversion is useful for facilitating JSON manipulations within Flink data flows. Can handle inputs like strings representing JSON, other JSON objects, or various scalar values to create JSON structures. |
| `JsonToString(json)`        | Converts a `json` JSON object back to a string representation. Useful for outputting or exporting JSON data after transformations within Flink. |
| `JsonConcat(json, json)` | Merges two JSON objects, combining all key-value pairs from both. Useful for aggregating data from different JSON sources into a single JSON structure. |
| `JsonObject(Any...)`                 | Creates a JSON object from provided key-value pairs. Each pair consists of a string key and a value which can be any type, forming a JSON object dynamically. |
| `JsonArray(Any...)`                  | Constructs a JSON array from given elements of any type. This function allows for dynamic JSON array creation, accommodating a variety of data types. |
| `JsonQuery(json, String)`   | Executes a JSON path query on a JSON object and returns the query result as a JSON string. Ideal for extracting specific data from nested JSON structures. |
| `JsonExists(json, String)`  | Evaluates whether a specified JSON path exists within a JSON object, returning a boolean indicating presence or absence of the path. |
| `JsonArrayAgg(Any...)`               | Aggregates multiple values into a JSON array during a group by operation. Can handle various types of input to dynamically build a JSON array. |
| `JsonObjectAgg(String, Any...)`      | Similar to `JsonArrayAgg` but for JSON objects, aggregating key-value pairs into a JSON object during group operations, handling complex aggregation logic with JSON structures. |
| `JsonConcat(json...)`       | An extended function to concatenate multiple JSON objects into one, merging them by adding all key-value pairs from each JSON into a single object. |
