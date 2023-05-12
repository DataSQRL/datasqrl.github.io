"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4073],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},i="SQRL Documentation",s={unversionedId:"reference/sqrl/overview",id:"reference/sqrl/overview",title:"SQRL Documentation",description:'SQRL is a declarative language for defining data transformations based on SQL. SQRL stands for "Structured Query and Reaction Language" because it extends SQL with support for streaming data and the ability to react to data in realtime. In addition, SQRL adds a number of convenience features that make it development-friendly.',source:"@site/docs/reference/sqrl/overview.md",sourceDirName:"reference/sqrl",slug:"/reference/sqrl/overview",permalink:"/docs/reference/sqrl/overview",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Reference Documentation",permalink:"/docs/reference/overview"},next:{title:"Table",permalink:"/docs/reference/sqrl/table"}},l={},p=[{value:"SQRL Tables",id:"sqrl-tables",level:2},{value:"SQRL Functions",id:"sqrl-functions",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sqrl-documentation"},"SQRL Documentation"),(0,n.kt)("p",null,"SQRL is a declarative language for defining data transformations based on SQL. SQRL stands for ",(0,n.kt)("em",{parentName:"p"},'"',(0,n.kt)("strong",{parentName:"em"},"S"),"tructured ",(0,n.kt)("strong",{parentName:"em"},"Q"),"uery and ",(0,n.kt)("strong",{parentName:"em"},"R"),"eaction ",(0,n.kt)("strong",{parentName:"em"},"L"),'anguage"')," because it extends SQL with support for streaming data and the ability to react to data in realtime. In addition, SQRL adds a number of convenience features that make it development-friendly."),(0,n.kt)("p",null,"This documentation explains the features of SQRL and everything you need to know to build data services with SQRL. It assumes basic familiarity with SQL. If you haven't used SQL before, or it's been a while, we recommend that you read the ",(0,n.kt)("a",{parentName:"p",href:"../sql-primer"},"SQL primer")," first."),(0,n.kt)("h2",{id:"sqrl-tables"},"SQRL Tables"),(0,n.kt)("p",null,"SQRL scripts define a set of tables. Tables can be ",(0,n.kt)("a",{parentName:"p",href:"../../api/overview#design"},"exposed in the API"),", ",(0,n.kt)("a",{parentName:"p",href:"../import"},"imported")," by other SQRL scripts, or ",(0,n.kt)("a",{parentName:"p",href:"../export"},"exported")," to other data systems and action triggers."),(0,n.kt)("p",null,"SQRL tables are ",(0,n.kt)("a",{parentName:"p",href:"../table"},"defined")," as ",(0,n.kt)("a",{parentName:"p",href:"../import"},"imports")," or as ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT")," queries from previously defined tables. Tables can also be ",(0,n.kt)("a",{parentName:"p",href:"../table"},"defined incrementally")," by adding a column or relationship to an existing table. ",(0,n.kt)("a",{parentName:"p",href:"../table"},"Learn more")," about defining tables in SQRL."),(0,n.kt)("p",null,"SQRL allows users to define ",(0,n.kt)("a",{parentName:"p",href:"../relationship"},"relationships")," between tables to relate records from one table to associated records from another table. Relationships allow SQRL to support ",(0,n.kt)("a",{parentName:"p",href:"../table#nested"},"nested tables")," which are a convenient way to represent nested or hierarchical data."),(0,n.kt)("p",null,"SQRL distinguishes between ",(0,n.kt)("em",{parentName:"p"},"state")," and ",(0,n.kt)("em",{parentName:"p"},"stream")," tables. State tables hold records that change over time as records are modified. Stream tables hold immutable records that have a timestamp and are naturally ordered in time."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../stream"},"Stream tables")," represent streams of data like events, IoT metrics, web logs, or change streams. SQRL provides native support for stream tables and methods for converting between stream and state tables. ",(0,n.kt)("a",{parentName:"p",href:"../time"},"Time")," plays an important role in stream tables because they are naturally ordered in time and SQRL provides a few features to make timestamp handling easy. ",(0,n.kt)("br",null),"\nStream tables can be ",(0,n.kt)("a",{parentName:"p",href:"../export"},"exported")," to react to certain conditions or changes in the data."),(0,n.kt)("p",null,"State tables represent entities which can change or evolve over time. State tables are ",(0,n.kt)("em",{parentName:"p"},"normal")," tables and have the same semantics and treatment as they do in ",(0,n.kt)("a",{parentName:"p",href:"../sql-primer"},"SQL"),"."),(0,n.kt)("h2",{id:"sqrl-functions"},"SQRL Functions"),(0,n.kt)("p",null,"Functions are used in queries and expressions to manipulate or aggregate data. SQRL supports most of the standard SQL functions out-of-the box."),(0,n.kt)("p",null,"You can ",(0,n.kt)("a",{parentName:"p",href:"../import#function"},"import")," additional functions from the SQRL standard function library:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../functions/string"},(0,n.kt)("strong",{parentName:"a"},"string")),": function to manipulate strings and characters"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../functions/time"},(0,n.kt)("strong",{parentName:"a"},"time")),": functions to process and aggregate by timestamp")),(0,n.kt)("p",null,"In addition, you can implement and import your own functions as a ",(0,n.kt)("a",{parentName:"p",href:"../functions/custom-functions"},"custom function package"),"."))}d.isMDXComponent=!0}}]);