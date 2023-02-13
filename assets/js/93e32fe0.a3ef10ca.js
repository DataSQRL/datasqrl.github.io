"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3346],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||l;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9838:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const l={title:"SQL Primer"},i="Brief Introduction to SQL",a={unversionedId:"reference/sqrl/sql-primer",id:"reference/sqrl/sql-primer",title:"SQL Primer",description:"Concepts to introduce:",source:"@site/docs/reference/sqrl/sql-primer.md",sourceDirName:"reference/sqrl",slug:"/reference/sqrl/sql-primer",permalink:"/docs/reference/sqrl/sql-primer",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/sqrl/sql-primer.md",tags:[],version:"current",frontMatter:{title:"SQL Primer"}},c={},u=[],p={toc:u},s="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"brief-introduction-to-sql"},"Brief Introduction to SQL"),(0,o.kt)("p",null,"Concepts to introduce:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SELECT (aggregations)"),(0,o.kt)("li",{parentName:"ul"},"FROM"),(0,o.kt)("li",{parentName:"ul"},"JOIN ON"),(0,o.kt)("li",{parentName:"ul"},"WHERE"),(0,o.kt)("li",{parentName:"ul"},"GROUP BY and HAVING"),(0,o.kt)("li",{parentName:"ul"},"ORDER BY"),(0,o.kt)("li",{parentName:"ul"},"LIMIT"),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("p",null,"Introduce some common functions in SQL: COALESCE, AVG, MIN, MAX, SUM, CASE WHEN, COUNT (DISTINCT)\nIn where clause: IN, INTERVAL\nUNION ALL"),(0,o.kt)("p",null,"Link to full SQL tutorial and reference:\nCASE WHEN"))}f.isMDXComponent=!0}}]);