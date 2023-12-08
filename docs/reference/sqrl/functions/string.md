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

| Function Name         | Description   | SQL Name   |
|-----------------------|---------------|------------|
| ascii | This SQL function returns  the ASCII code of the leftmost character of a given string. For example, ascii('A') would return 65. | ASCII | 
| chr | This SQL function returns  the character based on the number code in its argument. For example, chr(65) returns the character 'A'. | CHR | 
| concat | This SQL function returns  a concatenated string of two or more strings. For example, concat('Hello', 'World') returns the string 'HelloWorld'. | CONCAT_FUNCTION | 
| concatWS | This SQL function returns  a string that is the result of concatenating a series of strings separated by a specified separator. For example, concatWS('-', 'Hello', 'World') returns 'Hello-World'. | CONCAT_WS | 
| decode | This SQL function returns  a value based on a comparison of an expression to one or more search values. For example, decode(1, 1, 'One', 2, 'Two', 'Other') would return 'One' as the result. | DECODE | 
| encode | This SQL function returns  an encoded string of the input string using the specified algorithm. For example, encode('Hello World', 'SHA1') returns '2aae6c35c94fcfb415dbe95f408b9ce91ee | ENCODE | 
| fromBase64 | This SQL function returns  a string decoded from its base64 representation. For example, fromBase64('SGVsbG8gV29ybGQ=') returns 'Hello World'. | FROM_BASE64 | 
| initcap | This SQL function returns  a string with the first letter of each word capitalized. For example, invoking the function with the string "hello world" would return "Hello World". | INITCAP | 
| instr | This SQL function returns  the position of a substring within a string. For example, instr('Hello World', 'World') returns 7, indicating that the substring 'World' starts at the 7th character in the string 'Hello World'. | INSTR | 
| left | This SQL function returns  a specified number of characters from the left side of a string. For example, left('Hello World', 5) would return 'Hello' as the result. | LEFT | 
| length | This SQL function returns  the number of characters in a given string. For example, length('Hello World') returns 11. | CHAR_LENGTH | 
| locate | This SQL function returns  the position of a substring within a string. For example, locate('world', 'Hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'Hello world'. | LOCATE | 
| lpad | This SQL function returns  a string padded on the left with a specified set of characters to a certain length. For example, lpad('Hello', 10, '*') would return '**Hello***'. | LPAD | 
| ltrim | This SQL function returns  a string with all leading spaces removed. For example, ltrim('  Hello World') would return 'Hello World'. | LTRIM | 
| overlay | This SQL function returns  a string with a substring replaced by a new substring. For example, overlay('ABCDE' PLACING 'XYZ' FROM 3 FOR 3) returns 'ABXYZE'. | OVERLAY | 
| parseURL | This SQL function returns  the components of a URL as separate fields. For example, parseURL('https://www.example.com/path/to/page?query=string') would return the protocol ('https'), host ('www.example.com'), | PARSE_URL | 
| position | This SQL function returns  the position of a substring within a string. For example, position('world' IN 'hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'hello world'. | POSITION | 
| regexp | This SQL function returns  a boolean value (true or false) indicating whether a given string matches a given regular expression. For example, regexp('Hello World', '^Hello') returns true. | REGEXP | 
| regexpExtract | This SQL function returns  a specific part of a string that matches a regular expression pattern. For example, regexpExtract('Hello World', '[a-zA-Z]+', 0) returns 'Hello'. | REGEXP_EXTRACT | 
| regexReplace | This SQL function returns  a string with all substrings that match a regular expression pattern replaced by a specified replacement string. For example, regexReplace('Hello World', 'l', 'z') would return 'Hezzo Worzd'. | REGEXP_REPLACE | 
| repeat | This SQL function returns  a string consisting of the specified string repeated a specified number of times. For example, repeat('Hello', 3) would return 'HelloHelloHello'. | REPEAT | 
| replace | This SQL function returns  a new string with some or all occurrences of a specified string replaced with another specified string. For example, replace('Hello World', 'World', 'Universe') would return 'Hello Universe'. | REPLACE | 
| reverse | This SQL function returns  a character string in reverse order. For example, reverse('Hello World') would return 'dlroW olleH'. | REVERSE | 
| right | This SQL function returns  a specified number of characters from the right side of a given string. For example, right('Hello World', 5) would return "World". | RIGHT | 
| rpad | This SQL function returns  a string that is right-padded with a specific set of characters to a specified length. For example, rpad('Hello', 10, '*') would return 'Hello*****'. | RPAD | 
| rtrim | This SQL function returns  a character string with the specified characters removed from the right side of the string. For example, rtrim('Hello World  ', ' ') would return 'Hello World'. | RTRIM | 
| splitIndex | This SQL function returns  a substring from a given string based on a delimiter and index. For example, splitIndex('Hello,World', ',', 1) would return 'Hello' as the result. | SPLIT_INDEX | 
| strToMap | This SQL function returns  a map from a string of key-value pairs. For example, strToMap('a=1,b=2,c=3') returns a map with keys 'a', 'b', and 'c' and values ' | STR_TO_MAP | 
| substr | This SQL function returns  a substring from a given string, starting at a specified position and including a specified number of characters. For example, substr('Hello World', 6, 5) would return 'World'. | SUBSTR | 
| substring | This SQL function returns  a portion of a string, starting at a specified position and including a specified number of characters. For example, substring('Hello World', 6, 5) would return 'World'. | SUBSTRING | 
| toBase64 | This SQL function returns  a base64-encoded string from a given input string. For example, toBase64('Hello World') returns 'SGVsbG8gV29ybGQ=' which is the base64-encoded version of | TO_BASE64 | 
| trim | This SQL function returns  a string with leading and trailing whitespace removed. For example, trim('  Hello World  ') would return 'Hello World'. | TRIM | 
| upper | This SQL function returns  a string with all characters converted to uppercase. For example, upper('hello world') would return 'HELLO WORLD'. | UPPER |