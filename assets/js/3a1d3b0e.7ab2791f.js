"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7437],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(m,".").concat(c)]||d[c]||s[c]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6377:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Time Functions"},l="Time Functions",o={unversionedId:"reference/sqrl/functions/time",id:"reference/sqrl/functions/time",title:"Time Functions",description:"The time function package contains functions to convert, aggregate, and manipulate timestamps and DateTime scalars. The time function package is part of the standard SQRL function library.",source:"@site/docs/reference/sqrl/functions/time.md",sourceDirName:"reference/sqrl/functions",slug:"/reference/sqrl/functions/time",permalink:"/docs/reference/sqrl/functions/time",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/functions/time.md",tags:[],version:"current",frontMatter:{title:"Time Functions"},sidebar:"docs",previous:{title:"String Functions",permalink:"/docs/reference/sqrl/functions/string"},next:{title:"Text Functions",permalink:"/docs/reference/sqrl/functions/text"}},m={},p=[{value:"Reference",id:"reference",level:2}],u={toc:p},d="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-functions"},"Time Functions"),(0,a.kt)("p",null,"The time function package contains functions to convert, aggregate, and manipulate timestamps and DateTime scalars. The time function package is part of the standard SQRL function library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT time.*; -- imports all time functions\nIMPORT time.dayOfWeek; -- imports single time function\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"The following table lists all the functions in the time package with a short description. The table also specifies whether a function is a ",(0,a.kt)("a",{parentName:"p",href:"../../stream##aggregation"},"time-window")," function."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Time Window?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"atZone"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the timestamp at the given timezone."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dayOfMonth"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the day of the month for a given date. For example, dayOfMonth('2020-07-15') would return 15."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dayOfWeek"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  an integer representing the day of the week for a given date. For example, dayOfWeek('2020-07-01') returns 3, indicating that July 1, 2020 is a Wednesday."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dayOfYear"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the day of the year for a given date. For example, dayOfYear('2020-02-14') returns 45."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endOfDay"),(0,a.kt)("td",{parentName:"tr",align:null},"Time window function that returns the end of day for the timestamp argument.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"endOfDay(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-12T23:59:59.999999999Z")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endOfHour"),(0,a.kt)("td",{parentName:"tr",align:null},"Time window function that returns the end of hour for the timestamp argument.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"endOfHour(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-12T18:59:59.999999999Z")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endOfMinute"),(0,a.kt)("td",{parentName:"tr",align:null},"Time window function that returns the end of minute for the timestamp argument.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"endOfMinute(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-12T18:23:59.999999999Z")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endOfMonth"),(0,a.kt)("td",{parentName:"tr",align:null},"Time window function that returns the end of month for the timestamp argument.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"endOfMonth(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-31T23:59:59.999999999Z")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endOfSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"Time window function that returns the end of second for the timestamp argument.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"endOfSecond(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-12T18:23:34.999999999Z")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endOfWeek"),(0,a.kt)("td",{parentName:"tr",align:null},"Time window function that returns the end of week for the timestamp argument.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"endOfWeek(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-12T23:59:59.999999999Z")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endOfYear"),(0,a.kt)("td",{parentName:"tr",align:null},"Time window function that returns the end of year for the timestamp argument.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"endOfYear(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-12-31T23:59:59.999999999Z")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"epochMilliToTimestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"Converts the epoch timestamp in milliseconds to the corresponding timestamp.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"epochMilliToTimestamp(1678645414000)")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-12T18:23:34Z")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"epochToTimestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"Converts the epoch timestamp in seconds to the corresponding timestamp.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"epochToTimestamp(1678645414)")," returns the timestamp ",(0,a.kt)("inlineCode",{parentName:"td"},"2023-03-12T18:23:34Z")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hour"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the hour of a given time value. For example, hour('12:30:15') returns 12."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minute"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the minute of a given time value. For example, minute('12:45:30') returns 45."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"month"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the month of a given date. For example, month('2020-07-01') returns 7."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parseTimestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"Parses a timestamp from an ISO timestamp string."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"quarter"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  an integer value representing the quarter of the year for a given date. For example, quarter('2020-07-15') returns 3, representing the third quarter of the year."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"second"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the second item in a list of items. For example, second('apple', 'banana', 'cherry') would return 'banana'."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestampToEpoch"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the seconds since epoch for the given timestamp.",(0,a.kt)("br",null),"E.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"timestampToEpoch(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the number ",(0,a.kt)("inlineCode",{parentName:"td"},"1678645414")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestampToString"),(0,a.kt)("td",{parentName:"tr",align:null},"Converts the timestamp to an ISO timestamp string"),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"week"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the week number of the year for a given date. For example, week('2020-02-14') returns 7, as February 14th is the 7th week of the year 2020."),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"year"),(0,a.kt)("td",{parentName:"tr",align:null},"This SQL function returns  the year from a given date. For example, year('2020-01-01') would return 2020."),(0,a.kt)("td",{parentName:"tr",align:null},"no")))))}s.isMDXComponent=!0}}]);