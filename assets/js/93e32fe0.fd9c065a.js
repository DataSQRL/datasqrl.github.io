"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[752],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1055:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(8168),a=(t(6540),t(5680));const o={title:"SQL Primer"},i="The DataSQRL SQL Primer",l={unversionedId:"reference/sqrl/sql-primer",id:"reference/sqrl/sql-primer",title:"SQL Primer",description:"SQL (Structured Query Language) is the standard query language used by relational database systems.",source:"@site/docs/reference/sqrl/sql-primer.md",sourceDirName:"reference/sqrl",slug:"/reference/sqrl/sql-primer",permalink:"/docs/reference/sqrl/sql-primer",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/sql-primer.md",tags:[],version:"current",frontMatter:{title:"SQL Primer"},sidebar:"docs",previous:{title:"Implement Custom Functions",permalink:"/docs/reference/sqrl/functions/custom-functions"},next:{title:"Data API",permalink:"/docs/reference/api/overview"}},s={},c=[{value:"SQL Tutorials",id:"tutorials",level:2},{value:"SQL Refresher",id:"refresher",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"the-datasqrl-sql-primer"},"The DataSQRL SQL Primer"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL")," (Structured Query Language) is the standard query language used by relational database systems."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"../../overview"},"SQRL")," is based on SQL and this documentation assumes basic familiarity with SQL for writing queries."),(0,a.yg)("h2",{id:"tutorials"},"SQL Tutorials"),(0,a.yg)("p",null,"If you haven't used SQL before, we recommend that you follow ones of these tutorials until you feel comfortable writing ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT .. FROM .. WHERE .. GROUP BY")," queries. The investment to learn SQL is going to pay off whether or not you are going to use DataSQRL."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://sqlbolt.com/"},"SQLBolt"),": SQLBolt provides an interactive tutorial for SQL beginners. The tutorial is divided into several lessons that cover different SQL concepts. Each lesson includes a set of interactive exercises that allow users to practice SQL queries.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://www.khanacademy.org/computing/computer-programming/sql"},"Khan Academy SQL Course"),": Khan Academy offers a free, self-paced SQL course that covers the basics of SQL syntax and querying data. The course includes interactive exercises to help reinforce the concepts learned.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://www.w3schools.com/sql/"},"W3Schools SQL Tutorial"),": W3Schools is a popular web development tutorial website that provides a comprehensive SQL tutorial. The tutorial includes explanations, examples, and exercises that cover basic and advanced SQL concepts."))),(0,a.yg)("p",null,"We listed a number of tutorials we like. Pick one of those or choose your own. There are lots of great resources on SQL out there."),(0,a.yg)("h2",{id:"refresher"},"SQL Refresher"),(0,a.yg)("p",null,"SQRL uses SQL ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT")," queries to define ",(0,a.yg)("a",{parentName:"p",href:"../table"},"tables"),". A ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT")," query has the structure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table JOIN otherTable ON joinCondition \n    WHERE filterCondition \n    GROUP BY groupingColumns\n    ORDER BY orderColumn [ASC|DESC]\n    LIMIT number;\n")),(0,a.yg)("p",null,"In addition, the ",(0,a.yg)("inlineCode",{parentName:"p"},"UNION ALL")," operator is used to combine data from multiple queries. "),(0,a.yg)("p",null,"The column expression after ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT")," and the conditions can include function calls to manipulate data and predicates in filters. Common SQL functions and predicates include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Aggregation Functions: ",(0,a.yg)("inlineCode",{parentName:"li"},"min"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"max"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"avg"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"count"),", and ",(0,a.yg)("inlineCode",{parentName:"li"},"count distinct")),(0,a.yg)("li",{parentName:"ul"},"Conditional Functions: ",(0,a.yg)("inlineCode",{parentName:"li"},"case when"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"coalesce")),(0,a.yg)("li",{parentName:"ul"},"Predicates: ",(0,a.yg)("inlineCode",{parentName:"li"},"in"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"between"))),(0,a.yg)("p",null,"Time intervals are specified with the ",(0,a.yg)("inlineCode",{parentName:"p"},"INTERVAL")," syntax, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"INTERVAL 5 DAY"),"."),(0,a.yg)("p",null,"If all of the above looks familiar to you, you know enough SQL to learn SQRL quickly. Otherwise, we recommend you do a quick google search to refresh your memory or follow one of the ",(0,a.yg)("a",{parentName:"p",href:"#tutorials"},"tutorials")," above."))}m.isMDXComponent=!0}}]);