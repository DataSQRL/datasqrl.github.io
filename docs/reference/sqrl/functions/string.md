---
title: "String Functions"
---

# String Functions

The string function package contains functions to manipulate and analyze strings and characters. The string function package is part of the standard SQRL function library.

```sql
IMPORT string.*; -- imports all string functions
IMPORT string.x; -- imports single string function
```

## Reference

| Function Name         | Description   |
|-----------------------|---------------|
|ascii|This SQL function returns  the ASCII code of the leftmost character of a given string. For example, ASCII('A') would return 65.|
|chr|This SQL function returns  the character based on the number code in its argument. For example, CHR(65) returns the character 'A'.|
|concat|This SQL function returns  a concatenated string of two or more strings. For example, CONCAT_FUNCTION('Hello', 'World') returns the string 'HelloWorld'.|
|concatWS|This SQL function returns  a string that is the result of concatenating a series of strings separated by a specified separator. For example, CONCAT_WS('-', 'Hello', 'World') returns 'Hello-World'.|
|decode|This SQL function returns  a value based on a comparison of an expression to one or more search values. For example, DECODE(1, 1, 'One', 2, 'Two', 'Other') would return 'One'.|
|encode|This SQL function returns  an encoded string of the input string using the specified algorithm. For example, ENCODE('Hello World', 'SHA1') returns '2aae6c35c94fcfb415dbe95f408b9ce91ee|
|fromBase64|This SQL function returns  a string decoded from its base64 representation. For example, FROM_BASE64('SGVsbG8gV29ybGQ=') returns 'Hello World'.|
|initcap|This SQL function returns  a string with the first letter of each word capitalized. For example, invoking INITCAP('hello world') would return 'Hello World'.|
|instr|This SQL function returns  the position of a substring within a string. For example, INSTR('Hello World', 'World') returns 7, indicating that the substring 'World' starts at the 7th character in the string 'Hello World'.|
|left|This SQL function returns  a specified number of characters from the left side of a string. For example, LEFT('Hello World', 5) would return 'Hello' as the result.|
|length|This SQL function returns  the number of characters in a given string. For example, CHAR_LENGTH('Hello World') returns 11.|
|locate|This SQL function returns  the position of a substring within a string. For example, LOCATE('world', 'Hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'Hello world'.|
|lpad|This SQL function returns  a string padded on the left with a specified set of characters to a certain length. For example, LPAD('Hello', 10, '*') would return '**Hello***'.|
|ltrim|This SQL function returns  a string with all leading spaces removed. For example, LTRIM('  Hello World') would return 'Hello World'.|
|overlay|This SQL function returns  a string with a substring replaced by a new substring. For example, OVERLAY('ABCDE' PLACING 'XYZ' FROM 3 FOR 3) returns 'ABXYZE'.|
|parseURL|This SQL function returns  the components of a URL as separate fields. For example, PARSE_URL('https://www.example.com/path/to/page?query=string') would return the protocol ('https'), host ('www.example.com'),|
|position|This SQL function returns  the position of a substring within a string. For example, POSITION('world' IN 'hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'hello world'.|
|regexp|This SQL function returns  a boolean value (true or false) indicating whether a given string matches a given regular expression. For example, REGEXP('Hello World', '^Hello') returns true.|
|regexpExtract|This SQL function returns  a specific part of a string that matches a regular expression pattern. For example, REGEXP_EXTRACT('Hello World', '[a-zA-Z]+', 0) returns 'Hello'.|
|regexReplace|This SQL function returns  a string with all substrings that match a regular expression pattern replaced by a specified replacement string. For example, REGEXP_REPLACE('Hello World', 'l', 'z') would return 'Hezzo Worzd'.|
|repeat|This SQL function returns  a string consisting of the specified string repeated a specified number of times. For example, REPEAT('Hello', 3) would return 'HelloHelloHello'.|
|replace|This SQL function returns  a new string with some or all occurrences of a specified string replaced with another specified string. For example, REPLACE('Hello World', 'World', 'Universe') would return 'Hello Universe'.|
|reverse|This SQL function returns  a character string in reverse order. For example, REVERSE('Hello World') would return 'dlroW olleH'.|
|right|This SQL function returns  a specified number of characters from the right side of a given string. For example, RIGHT('Hello World', 5) would return "World".|
|rpad|This SQL function returns  a string that is right-padded with a specific set of characters to a specified length. For example, RPAD('Hello', 10, '*') would return 'Hello*****'.|
|rtrim|This SQL function returns  a character string with the specified characters removed from the right side of the string. For example, RTRIM('Hello World  ', ' ') would return 'Hello World'.|
|splitIndex|This SQL function returns  a substring from a given string based on a delimiter and index. For example, SPLIT_INDEX('Hello,World', ',', 1) would return 'Hello' as the result.|
|strToMap|This SQL function returns  a map from a string of key-value pairs. For example, STR_TO_MAP('a=1,b=2,c=3') returns a map with keys 'a', 'b', and 'c' and values '|
|substr|This SQL function returns  a substring from a given string, starting at a specified position and including a specified number of characters. For example, SUBSTR('Hello World', 6, 5) would return the string "World".|
|substring|This SQL function returns  a portion of a string, starting at a specified position and including a specified number of characters. For example, SUBSTRING('Hello World', 6, 5) would return the result 'World'.|
|toBase64|This SQL function returns  a base64-encoded string from a given string. For example, TO_BASE64('Hello World') would return 'SGVsbG8gV29ybGQ=' which is the base64-encoded version of|
|trim|This SQL function returns  a string with leading and trailing whitespace removed. For example, TRIM('  Hello World  ') would return 'Hello World'.|
|upper|This SQL function returns  a string with all characters converted to uppercase. For example, UPPER('hello world') would return 'HELLO WORLD'.|