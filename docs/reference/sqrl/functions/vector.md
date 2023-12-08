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

The following table lists all the functions in the `vector` package with a short description.

| Function Name         | Description   |
|-----------------------|---------------|
| center | Aggregates vectors by computing the centroid, i.e. summing up all vectors and dividing the resulting vector by the number of vectors. | 
| cosineDistance | Computes the cosine distance between two vectors | 
| cosineSimilarity | Computes the cosine similarity between two vectors | 
| euclideanDistance | Computes the euclidean distance between two vectors | 
| onnxEmbed | Computes a vector embedding for the given string based on the provided ONNX vector embedding model. The embedding model should be stored in a directory that is accessible at runtime. | 
| vectorToDouble | Converts a vector to a double array | 