---
title: "String Functions"
---

# String Functions

The string function package contains functions to manipulate and analyze strings and characters. The string function package is part of the standard SQRL function library.

```sql
IMPORT string.*; -- imports all string functions
IMPORT string.concat; -- imports single string function
```

## Reference

The following table lists all the functions in the string package with a short description. The table also includes the name of the function in SQL, which may be slightly different.

| Function Name                              | Description   |
|--------------------------------------------|---------------|
 concat(string, string...)                            |Concatenates two or more strings into one. For example, concat('Hello', 'World') returns 'HelloWorld'.|
| lpad(string, length, padString)            |Pads string on the left to a total of length characters using padString. For example, lpad('Hello', 10, '*') returns '*****Hello'.|
| ltrim(string)                              |Removes leading spaces from string. For example, ltrim(' Hello World') returns 'Hello World'.|
| regexp(string, pattern)                    |Returns true if string matches the pattern, otherwise false. For example, regexp('Hello World', '^Hello') returns true.|
| regexpExtract(string, pattern, groupIndex) |Extracts a substring from string that matches a pattern at the specified groupIndex. For example, regexpExtract('Hello World', '(\w+)', 0) returns 'Hello'.|
| regexReplace(string, pattern, replacement) |Replaces all substrings in string that match the pattern with replacement. For example, regexReplace('Hello World', 'l', 'z') returns 'Hezzo Worzd'.|
| replace(string, oldString, newString)      |Replaces all occurrences of oldString in string with newString. For example, replace('Hello World', 'World', 'Universe') returns 'Hello Universe'.|REPLACE
| rpad(string, length, padString)            |Pads string on the right to a total of length characters using padString. For example, rpad('Hello', 10, '*') returns 'Hello*****'.|
|  rtrim(string)                              |Removes trailing spaces from string. For example, rtrim('Hello World ') returns 'Hello World'.|
|  substring(string, start, length)           |Returns a substring from string starting at start position for length characters. For example, substring('Hello World', 6, 5) returns 'World'.|SUBSTRING
| trim(string)                               |Removes both leading and trailing spaces from string. For example, trim(' Hello World ') returns 'Hello World'.|