---
title: "Secure Functions"
---

# Text Functions

The `secure` function package contains functions for generating unique ids and secure strings.

```sql
IMPORT secure.*; -- imports all functions
IMPORT secure.uuid; -- imports single function
```

## Reference

The following table lists all the functions in the `secure` package with a short description.

| Function Name         | Description   |
|-----------------------|---------------|
| randomID | Generates a random ID string with the given number of secure random bytes. The bytes are base64 encoded so the string length will be longer than the number of bytes | 
| uuid | Generates a random UUID string | 

| Function Name   | Description                                                                                                    |
|-----------------|----------------------------------------------------------------------------------------------------------------|
| `Uuid()`        | Generates a universally unique identifier (UUID) as a 36-character string. This function is non-deterministic, meaning it will return a different UUID with each call. For example, calling `Uuid()` might return "123e4567-e89b-12d3-a456-426614174000". |
| `RandomID(BIGINT)` | Generates a random ID based on the number of bytes specified. The ID is encoded in a URL-safe Base64 format without padding. If the input is `null` or less than zero, it returns `null`. For example, `RandomID(16)` could return a string like "T2Rkdk5OdXZ1ZG5GdlNhQw". |
