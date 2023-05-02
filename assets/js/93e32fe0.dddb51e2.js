"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"SQL Primer"},i="The DataSQRL SQL Primer",l={unversionedId:"reference/sqrl/sql-primer",id:"reference/sqrl/sql-primer",title:"SQL Primer",description:"SQL (Structured Query Language) is the standard query language used by relational database systems.",source:"@site/docs/reference/sqrl/sql-primer.md",sourceDirName:"reference/sqrl",slug:"/reference/sqrl/sql-primer",permalink:"/docs/reference/sqrl/sql-primer",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/sqrl/sql-primer.md",tags:[],version:"current",frontMatter:{title:"SQL Primer"},sidebar:"docs",previous:{title:"Implement Custom Functions",permalink:"/docs/reference/sqrl/functions/custom-functions"},next:{title:"Data API",permalink:"/docs/reference/api/overview"}},s={},c=[{value:"SQL Tutorials",id:"tutorials",level:2},{value:"SQL Refresher",id:"refresher",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-datasqrl-sql-primer"},"The DataSQRL SQL Primer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL")," (Structured Query Language) is the standard query language used by relational database systems."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../overview"},"SQRL")," is based on SQL and this documentation assumes basic familiarity with SQL for writing queries."),(0,a.kt)("h2",{id:"tutorials"},"SQL Tutorials"),(0,a.kt)("p",null,"If you haven't used SQL before, we recommend that you follow ones of these tutorials until you feel comfortable writing ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT .. FROM .. WHERE .. GROUP BY")," queries. The investment to learn SQL is going to pay off whether or not you are going to use DataSQRL."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://sqlbolt.com/"},"SQLBolt"),": SQLBolt provides an interactive tutorial for SQL beginners. The tutorial is divided into several lessons that cover different SQL concepts. Each lesson includes a set of interactive exercises that allow users to practice SQL queries.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.khanacademy.org/computing/computer-programming/sql"},"Khan Academy SQL Course"),": Khan Academy offers a free, self-paced SQL course that covers the basics of SQL syntax and querying data. The course includes interactive exercises to help reinforce the concepts learned.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/"},"W3Schools SQL Tutorial"),": W3Schools is a popular web development tutorial website that provides a comprehensive SQL tutorial. The tutorial includes explanations, examples, and exercises that cover basic and advanced SQL concepts."))),(0,a.kt)("p",null,"We listed a number of tutorials we like. Pick one of those or choose your own. There are lots of great resources on SQL out there."),(0,a.kt)("h2",{id:"refresher"},"SQL Refresher"),(0,a.kt)("p",null,"SQRL uses SQL ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," queries to define ",(0,a.kt)("a",{parentName:"p",href:"../table"},"tables"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," query has the structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table JOIN otherTable ON joinCondition \n    WHERE filterCondition \n    GROUP BY groupingColumns\n    ORDER BY orderColumn [ASC|DESC]\n    LIMIT number;\n")),(0,a.kt)("p",null,"In addition, the ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION ALL")," operator is used to combine data from multiple queries. "),(0,a.kt)("p",null,"The column expression after ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," and the conditions can include function calls to manipulate data and predicates in filters. Common SQL functions and predicates include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aggregation Functions: ",(0,a.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"avg"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"count"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"count distinct")),(0,a.kt)("li",{parentName:"ul"},"Conditional Functions: ",(0,a.kt)("inlineCode",{parentName:"li"},"case when"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"coalesce")," (SQRL also supports the inline ",(0,a.kt)("inlineCode",{parentName:"li"},"x?y")," notation instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"coalesce(x,y)"),")"),(0,a.kt)("li",{parentName:"ul"},"Predicates: ",(0,a.kt)("inlineCode",{parentName:"li"},"in"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"between"))),(0,a.kt)("p",null,"Time intervals are specified with the ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERVAL")," syntax, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERVAL 5 DAY"),"."),(0,a.kt)("p",null,"If all of the above looks familiar to you, you know enough SQL to learn SQRL quickly. Otherwise, we recommend you do a quick google search to refresh your memory or follow one of the ",(0,a.kt)("a",{parentName:"p",href:"#tutorials"},"tutorials")," above."))}m.isMDXComponent=!0}}]);