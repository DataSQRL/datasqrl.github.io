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
