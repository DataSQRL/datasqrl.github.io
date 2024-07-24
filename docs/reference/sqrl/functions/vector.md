---
title: "Vector Functions"
---

# Text Functions

The `vector` function package contains functions for creating and comparing vectors.

```sql
IMPORT vector.*; -- imports all functions
IMPORT vector.toJson; -- imports single function
```

## Reference

| Function Name                                                         | Description                                                                                                                                 |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `OnnxEmbed(String text, String modelPath)`                            | Embeds the given text using an ONNX model specified by the model path. This function handles text tokenization, tensor creation, and model inference, returning a `FlinkVectorType` representing the embedded text vector. Example: `onnxEmbed("Sample text for embedding.", "/path/to/model.onnx")` processes the text through the ONNX model. |
| `CosineSimilarity(FlinkVectorType vectorA, FlinkVectorType vectorB)`  | Calculates the cosine similarity between two vectors. This is a common operation in many vector space models in machine learning, especially useful in text analytics to find the similarity between documents. Example: `cosineSimilarity(vector1, vector2)` returns the cosine similarity score. |
| `CosineDistance(FlinkVectorType vectorA, FlinkVectorType vectorB)`    | Computes the cosine distance between two vectors, which is `1 - cosineSimilarity`. This function is used to measure how different two vectors are. Example: `cosineDistance(vector1, vector2)` gives a measure of the distance between two vectors. |
| `EuclideanDistance(FlinkVectorType vectorA, FlinkVectorType vectorB)` | Calculates the Euclidean distance between two vectors, a direct measure of the distance in the vector space. Example: `euclideanDistance(vector1, vector2)` computes the distance, useful in clustering and other machine learning algorithms that rely on distance calculations. |
| `AsciiTextTestEmbed(String text)`                                     | Generates a simple embedding of the text based on ASCII values. This simplistic approach can sometimes serve for quick tests or baseline embeddings in scenarios where text length or uniqueness is a factor. Example: `asciiTextTestEmbed("Hello")` generates a vector based on ASCII values of the text. |
| `Center(vector)`                                                      | Used as an aggregate function to compute the center (mean vector) of a group of vectors during aggregation operations in Flink. This function is typically used in clustering or when calculating the centroid of data points. |
| `DoubleToVector(double array)`                                        | Converts a vector to a double array | 
