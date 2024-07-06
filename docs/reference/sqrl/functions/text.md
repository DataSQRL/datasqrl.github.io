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

| Function Name           | Description                                                                                                                                                                                                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Format(String, String...)` | A function that formats text based on a format string and variable number of arguments. It uses Java's `String.format` method internally. If the input text is `null`, it returns `null`. For example, `Format("Hello %s!", "World")` returns "Hello World!".                                        |
| `TextSearch(String, String...)` | Evaluates a query against multiple text fields and returns a score based on the frequency of query words in the texts. It tokenizes both the query and the texts, and scores based on the proportion of query words found in the text. For example, `TextSearch("hello", "hello world")` returns `1.0`. |
| `BannedWordsFilter(String)`    | Filters a text to check for banned words, which are loaded from a file named `banned_words_list.txt`. It returns `true` if no banned words are found, otherwise `false`. For example, `BannedWordsFilter("hello")` might return `true` if "hello" is not a banned word.                                |
