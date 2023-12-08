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