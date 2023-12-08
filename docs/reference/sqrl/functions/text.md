---
title: "Text Functions"
---

# Text Functions

The text function package contains functions to search and manipulate text strings.

```sql
IMPORT text.*; -- imports all functions
IMPORT text.chr; -- imports single function
```

## Reference

The following table lists all the functions in the text package with a short description.

| Function Name         | Description   |
|-----------------------|---------------|
| bannedWordsFilter | Returns false if the given text contains a banned word, else true | 
| format | Replaces the placeholders in the first argument with the remaining arguments in order | 
| textSearch | Returns a numeric score for how well the given query string matches the provided string text. Returns 0 if there is no match. Use this function for full-text search. | 