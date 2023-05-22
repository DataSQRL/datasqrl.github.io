"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,p=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(p,i(i({ref:t},g),{},{components:a})):n.createElement(p,i({ref:t},g))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"sqrl-high-level-data-language-sql",title:"SQRL: Enhancing SQL to a High-Level Data Language",authors:["matthias"],tags:["SQRL","community"]},i="SQRL: Enhancing SQL to a High-Level Data Language",l={permalink:"/blog/sqrl-high-level-data-language-sql",editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/2023-05-22-sqrl-high-level-data-language-sql.md",source:"@site/blog/2023-05-22-sqrl-high-level-data-language-sql.md",title:"SQRL: Enhancing SQL to a High-Level Data Language",description:"When creating data-intensive applications or services, your data logic (i.e. the code that defines how to process the data) gets fragmented across multiple data systems, languages, and mental models. This makes data-driven applications difficult to implement and hard to maintain.",date:"2023-05-22T00:00:00.000Z",formattedDate:"May 22, 2023",tags:[{label:"SQRL",permalink:"/blog/tags/sqrl"},{label:"community",permalink:"/blog/tags/community"}],readingTime:7.5,hasTruncateMarker:!0,authors:[{name:"Matthias Broecheler",title:"Founder of DataSQRL",url:"https://github.com/mbroecheler",imageURL:"/img/headshots/matthias1.png",key:"matthias"}],frontMatter:{slug:"sqrl-high-level-data-language-sql",title:"SQRL: Enhancing SQL to a High-Level Data Language",authors:["matthias"],tags:["SQRL","community"]},nextItem:{title:"Let's Uplevel Our Database Game: Meet DataSQRL",permalink:"/blog/lets-uplevel-database-datasqrl"}},s={authorsImageUrls:[void 0]},c=[{value:"Why Do We Need SQRL?",id:"why-do-we-need-sqrl",level:2}],g={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When creating data-intensive applications or services, your data logic (i.e. the code that defines how to process the data) gets fragmented across multiple data systems, languages, and mental models. This makes data-driven applications difficult to implement and hard to maintain."),(0,r.kt)("p",null,"SQRL is a high-level data programming language that compiles into executables for all your data systems, so you can implement your data logic in one place. SQRL adds support for data streams and relationships to SQL while maintaining its familiar syntax and semantics."),(0,r.kt)("h2",{id:"why-do-we-need-sqrl"},"Why Do We Need SQRL?"),(0,r.kt)("img",{src:"/img/full_squirrel.svg",alt:"SQRL High-Level Data Language >",width:"30%"}),(0,r.kt)("p",null,"The data layer of a data-driven application comprises multiple components: There\u2019s the good ol\u2019 database for data storage and queries, a server for handling incoming data and translating API requests into database queries, a queue/log for asynchronous data processing, and a stream processor for pre-processing and writing new data to the database. Consequently, your data processing code becomes fragmented across various systems, technologies, and languages."))}d.isMDXComponent=!0}}]);