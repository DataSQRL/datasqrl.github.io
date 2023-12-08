"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3144],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(g,i(i({ref:e},p),{},{components:r})):n.createElement(g,i({ref:e},p))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2093:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"String Functions"},i="String Functions",o={unversionedId:"reference/sqrl/functions/string",id:"reference/sqrl/functions/string",title:"String Functions",description:"The string function package contains functions to manipulate and analyze strings and characters. The string function package is part of the standard SQRL function library.",source:"@site/docs/reference/sqrl/functions/string.md",sourceDirName:"reference/sqrl/functions",slug:"/reference/sqrl/functions/string",permalink:"/docs/reference/sqrl/functions/string",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/functions/string.md",tags:[],version:"current",frontMatter:{title:"String Functions"},sidebar:"docs",previous:{title:"Functions",permalink:"/docs/category/functions"},next:{title:"Time Functions",permalink:"/docs/reference/sqrl/functions/time"}},s={},u=[{value:"Reference",id:"reference",level:2}],p={toc:u},d="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-functions"},"String Functions"),(0,a.kt)("p",null,"The string function package contains functions to manipulate and analyze strings and characters. The string function package is part of the standard SQRL function library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT string.*; -- imports all string functions\nIMPORT string.concat; -- imports single string function\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"The following table lists all the functions in the string package with a short description. The table also includes the name of the function in SQL, which may be slightly different."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"SQL Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ascii"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the ASCII code of the leftmost character of a given string. For example, ascii('A') would return 65."),(0,a.kt)("td",{parentName:"tr",align:null},"ASCII")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"chr"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the character based on the number code in its argument. For example, chr(65) returns the character 'A'."),(0,a.kt)("td",{parentName:"tr",align:null},"CHR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"concat"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a concatenated string of two or more strings. For example, concat('Hello', 'World') returns the string 'HelloWorld'."),(0,a.kt)("td",{parentName:"tr",align:null},"CONCAT_FUNCTION")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"concatWS"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string that is the result of concatenating a series of strings separated by a specified separator. For example, concatWS('-', 'Hello', 'World') returns 'Hello-World'."),(0,a.kt)("td",{parentName:"tr",align:null},"CONCAT_WS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"decode"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a value based on a comparison of an expression to one or more search values. For example, decode(1, 1, 'One', 2, 'Two', 'Other') would return 'One' as the result."),(0,a.kt)("td",{parentName:"tr",align:null},"DECODE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"encode"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  an encoded string of the input string using the specified algorithm. For example, encode('Hello World', 'SHA1') returns '2aae6c35c94fcfb415dbe95f408b9ce91ee"),(0,a.kt)("td",{parentName:"tr",align:null},"ENCODE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromBase64"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string decoded from its base64 representation. For example, fromBase64('SGVsbG8gV29ybGQ=') returns 'Hello World'."),(0,a.kt)("td",{parentName:"tr",align:null},"FROM_BASE64")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"initcap"),(0,a.kt)("td",{parentName:"tr",align:null},'This SQL function returns  a string with the first letter of each word capitalized. For example, invoking the function with the string "hello world" would return "Hello World".'),(0,a.kt)("td",{parentName:"tr",align:null},"INITCAP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instr"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the position of a substring within a string. For example, instr('Hello World', 'World') returns 7, indicating that the substring 'World' starts at the 7th character in the string 'Hello World'."),(0,a.kt)("td",{parentName:"tr",align:null},"INSTR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"left"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a specified number of characters from the left side of a string. For example, left('Hello World', 5) would return 'Hello' as the result."),(0,a.kt)("td",{parentName:"tr",align:null},"LEFT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the number of characters in a given string. For example, length('Hello World') returns 11."),(0,a.kt)("td",{parentName:"tr",align:null},"CHAR_LENGTH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"locate"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the position of a substring within a string. For example, locate('world', 'Hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'Hello world'."),(0,a.kt)("td",{parentName:"tr",align:null},"LOCATE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lpad"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string padded on the left with a specified set of characters to a certain length. For example, lpad('Hello', 10, '*') would return '",(0,a.kt)("strong",{parentName:"td"},"Hello*"),"'."),(0,a.kt)("td",{parentName:"tr",align:null},"LPAD")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ltrim"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with all leading spaces removed. For example, ltrim('  Hello World') would return 'Hello World'."),(0,a.kt)("td",{parentName:"tr",align:null},"LTRIM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"overlay"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with a substring replaced by a new substring. For example, overlay('ABCDE' PLACING 'XYZ' FROM 3 FOR 3) returns 'ABXYZE'."),(0,a.kt)("td",{parentName:"tr",align:null},"OVERLAY")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parseURL"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the components of a URL as separate fields. For example, parseURL('",(0,a.kt)("a",{parentName:"td",href:"https://www.example.com/path/to/page?query=string'"},"https://www.example.com/path/to/page?query=string'"),") would return the protocol ('https'), host ('",(0,a.kt)("a",{parentName:"td",href:"http://www.example.com'"},"www.example.com'"),"),"),(0,a.kt)("td",{parentName:"tr",align:null},"PARSE_URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the position of a substring within a string. For example, position('world' IN 'hello world') returns 7, indicating that the substring 'world' begins at the 7th character in the string 'hello world'."),(0,a.kt)("td",{parentName:"tr",align:null},"POSITION")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regexp"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a boolean value (true or false) indicating whether a given string matches a given regular expression. For example, regexp('Hello World', '^Hello') returns true."),(0,a.kt)("td",{parentName:"tr",align:null},"REGEXP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regexpExtract"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a specific part of a string that matches a regular expression pattern. For example, regexpExtract('Hello World', '","[a-zA-Z]","+', 0) returns 'Hello'."),(0,a.kt)("td",{parentName:"tr",align:null},"REGEXP_EXTRACT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regexReplace"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with all substrings that match a regular expression pattern replaced by a specified replacement string. For example, regexReplace('Hello World', 'l', 'z') would return 'Hezzo Worzd'."),(0,a.kt)("td",{parentName:"tr",align:null},"REGEXP_REPLACE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"repeat"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string consisting of the specified string repeated a specified number of times. For example, repeat('Hello', 3) would return 'HelloHelloHello'."),(0,a.kt)("td",{parentName:"tr",align:null},"REPEAT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"replace"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a new string with some or all occurrences of a specified string replaced with another specified string. For example, replace('Hello World', 'World', 'Universe') would return 'Hello Universe'."),(0,a.kt)("td",{parentName:"tr",align:null},"REPLACE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a character string in reverse order. For example, reverse('Hello World') would return 'dlroW olleH'."),(0,a.kt)("td",{parentName:"tr",align:null},"REVERSE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"right"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a specified number of characters from the right side of a given string. For example, right('Hello World', 5) would return \"World\"."),(0,a.kt)("td",{parentName:"tr",align:null},"RIGHT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rpad"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string that is right-padded with a specific set of characters to a specified length. For example, rpad('Hello', 10, '*') would return 'Hello",(0,a.kt)("strong",{parentName:"td"},"*"),"'."),(0,a.kt)("td",{parentName:"tr",align:null},"RPAD")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rtrim"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a character string with the specified characters removed from the right side of the string. For example, rtrim('Hello World  ', ' ') would return 'Hello World'."),(0,a.kt)("td",{parentName:"tr",align:null},"RTRIM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"splitIndex"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a substring from a given string based on a delimiter and index. For example, splitIndex('Hello,World', ',', 1) would return 'Hello' as the result."),(0,a.kt)("td",{parentName:"tr",align:null},"SPLIT_INDEX")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"strToMap"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a map from a string of key-value pairs. For example, strToMap('a=1,b=2,c=3') returns a map with keys 'a', 'b', and 'c' and values '"),(0,a.kt)("td",{parentName:"tr",align:null},"STR_TO_MAP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"substr"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a substring from a given string, starting at a specified position and including a specified number of characters. For example, substr('Hello World', 6, 5) would return 'World'."),(0,a.kt)("td",{parentName:"tr",align:null},"SUBSTR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"substring"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a portion of a string, starting at a specified position and including a specified number of characters. For example, substring('Hello World', 6, 5) would return 'World'."),(0,a.kt)("td",{parentName:"tr",align:null},"SUBSTRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toBase64"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a base64-encoded string from a given input string. For example, toBase64('Hello World') returns 'SGVsbG8gV29ybGQ=' which is the base64-encoded version of"),(0,a.kt)("td",{parentName:"tr",align:null},"TO_BASE64")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trim"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with leading and trailing whitespace removed. For example, trim('  Hello World  ') would return 'Hello World'."),(0,a.kt)("td",{parentName:"tr",align:null},"TRIM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"upper"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  a string with all characters converted to uppercase. For example, upper('hello world') would return 'HELLO WORLD'."),(0,a.kt)("td",{parentName:"tr",align:null},"UPPER")))))}c.isMDXComponent=!0}}]);