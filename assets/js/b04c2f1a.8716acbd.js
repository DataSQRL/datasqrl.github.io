"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3144],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return r?n.createElement(g,i(i({ref:e},d),{},{components:r})):n.createElement(g,i({ref:e},d))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2093:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"String Functions"},i="String Functions",o={unversionedId:"reference/sqrl/functions/string",id:"reference/sqrl/functions/string",title:"String Functions",description:"The string function package contains functions to manipulate and analyze strings and characters. The string function package is part of the standard SQRL function library.",source:"@site/docs/reference/sqrl/functions/string.md",sourceDirName:"reference/sqrl/functions",slug:"/reference/sqrl/functions/string",permalink:"/docs/reference/sqrl/functions/string",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/sqrl/functions/string.md",tags:[],version:"current",frontMatter:{title:"String Functions"},sidebar:"docs",previous:{title:"Functions",permalink:"/docs/category/functions"},next:{title:"Time Functions",permalink:"/docs/reference/sqrl/functions/time"}},s={},u=[{value:"Reference",id:"reference",level:2}],d={toc:u},p="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-functions"},"String Functions"),(0,a.kt)("p",null,"The string function package contains functions to manipulate and analyze strings and characters. The string function package is part of the standard SQRL function library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT string.*; -- imports all string functions\nIMPORT string.x; -- imports single string function\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ascii"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the ASCII code of the leftmost character of a given string. For example, ASCII('A') would return 65.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"chr"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the character based on the number code in its argument. For example, CHR(65) returns the character 'A'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"concat"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a concatenated string of two or more strings. For example, CONCAT_FUNCTION('Hello', 'World') returns the string 'HelloWorld'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"concatWS"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string that is the result of concatenating a series of strings separated by a specified separator. For example, CONCAT_WS('-', 'Hello', 'World') returns 'Hello-World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"decode"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a value based on a comparison of an expression to one or more search values. For example, DECODE(1, 1, 'One', 2, 'Two', 'Other') would return 'One'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"encode"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  an encoded string of the input string using the specified algorithm. For example, ENCODE('Hello World', 'SHA1') returns '2aae6c35c94fcfb415dbe95f408b9ce91ee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromBase64"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string decoded from its base64 representation. For example, FROM_BASE64('SGVsbG8gV29ybGQ=') returns 'Hello World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"initcap"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with the first letter of each word capitalized. For example, invoking INITCAP('hello world') would return 'Hello World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instr"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the position of a substring within a string. For example, INSTR('Hello World', 'World') returns 7, indicating that the substring 'World' starts at the 7th character in the string 'Hello World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"left"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a specified number of characters from the left side of a string. For example, LEFT('Hello World', 5) would return 'Hello' as the result.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the number of characters in a given string. For example, CHAR_LENGTH('Hello World') returns 11.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"locate"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the position of a substring within a string. For example, LOCATE('world', 'Hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'Hello world'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lpad"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string padded on the left with a specified set of characters to a certain length. For example, LPAD('Hello', 10, '*') would return '",(0,a.kt)("strong",{parentName:"td"},"Hello*"),"'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ltrim"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with all leading spaces removed. For example, LTRIM('  Hello World') would return 'Hello World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"overlay"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with a substring replaced by a new substring. For example, OVERLAY('ABCDE' PLACING 'XYZ' FROM 3 FOR 3) returns 'ABXYZE'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parseURL"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the components of a URL as separate fields. For example, PARSE_URL('",(0,a.kt)("a",{parentName:"td",href:"https://www.example.com/path/to/page?query=string'"},"https://www.example.com/path/to/page?query=string'"),") would return the protocol ('https'), host ('",(0,a.kt)("a",{parentName:"td",href:"http://www.example.com'"},"www.example.com'"),"),")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the position of a substring within a string. For example, POSITION('world' IN 'hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'hello world'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regexp"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a boolean value (true or false) indicating whether a given string matches a given regular expression. For example, REGEXP('Hello World', '^Hello') returns true.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regexpExtract"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a specific part of a string that matches a regular expression pattern. For example, REGEXP_EXTRACT('Hello World', '","[a-zA-Z]","+', 0) returns 'Hello'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regexReplace"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with all substrings that match a regular expression pattern replaced by a specified replacement string. For example, REGEXP_REPLACE('Hello World', 'l', 'z') would return 'Hezzo Worzd'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"repeat"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string consisting of the specified string repeated a specified number of times. For example, REPEAT('Hello', 3) would return 'HelloHelloHello'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"replace"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a new string with some or all occurrences of a specified string replaced with another specified string. For example, REPLACE('Hello World', 'World', 'Universe') would return 'Hello Universe'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a character string in reverse order. For example, REVERSE('Hello World') would return 'dlroW olleH'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"right"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a specified number of characters from the right side of a given string. For example, RIGHT('Hello World', 5) would return \"World\".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rpad"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string that is right-padded with a specific set of characters to a specified length. For example, RPAD('Hello', 10, '*') would return 'Hello",(0,a.kt)("strong",{parentName:"td"},"*"),"'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rtrim"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a character string with the specified characters removed from the right side of the string. For example, RTRIM('Hello World  ', ' ') would return 'Hello World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"splitIndex"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a substring from a given string based on a delimiter and index. For example, SPLIT_INDEX('Hello,World', ',', 1) would return 'Hello' as the result.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"strToMap"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a map from a string of key-value pairs. For example, STR_TO_MAP('a=1,b=2,c=3') returns a map with keys 'a', 'b', and 'c' and values '")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"substr"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a substring from a given string, starting at a specified position and including a specified number of characters. For example, SUBSTR('Hello World', 6, 5) would return the string \"World\".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"substring"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a portion of a string, starting at a specified position and including a specified number of characters. For example, SUBSTRING('Hello World', 6, 5) would return the result 'World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toBase64"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a base64-encoded string from a given string. For example, TO_BASE64('Hello World') would return 'SGVsbG8gV29ybGQ=' which is the base64-encoded version of")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trim"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with leading and trailing whitespace removed. For example, TRIM('  Hello World  ') would return 'Hello World'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"upper"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with all characters converted to uppercase. For example, UPPER('hello world') would return 'HELLO WORLD'.")))))}c.isMDXComponent=!0}}]);