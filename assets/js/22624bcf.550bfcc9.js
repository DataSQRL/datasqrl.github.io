"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="Reference Documentation",c={unversionedId:"reference/overview",id:"reference/overview",title:"Reference Documentation",description:"The reference documentation covers all aspects of DataSQRL and the SQRL language in detail.",source:"@site/docs/reference/overview.md",sourceDirName:"reference",slug:"/reference/overview",permalink:"/docs/reference/overview",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Internet of Things",permalink:"/docs/getting-started/tutorials/iot/intro"},next:{title:"SQRL Documentation",permalink:"/docs/reference/sqrl/overview"}},s={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-documentation"},"Reference Documentation"),(0,a.kt)("p",null,"The reference documentation covers all aspects of DataSQRL and the SQRL language in detail."),(0,a.kt)("img",{src:"/img/generic/undraw_documentation.svg",alt:"Nut Shop Tutorial >",width:"40%"}),(0,a.kt)("p",null,"If you are new to DataSQRL or SQRL, we recommend that you start with the ",(0,a.kt)("a",{parentName:"p",href:"../../getting-started/quickstart"},"Quickstart tutorial")," and the ",(0,a.kt)("a",{parentName:"p",href:"../../getting-started/intro/overview"},"DataSQRL introduction"),"."),(0,a.kt)("p",null,"The reference documentation is divided into 4 sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../sqrl/overview"},(0,a.kt)("strong",{parentName:"a"},"SQRL")),": Documentation of the SQRL language for writing SQRL scripts. SQRL is an SQL dialect with some syntactic sugar to make data product implementations easier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/overview"},(0,a.kt)("strong",{parentName:"a"},"API")),": Documentation of how to query and design the data APIs compiled by DataSQRL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../sources/overview"},(0,a.kt)("strong",{parentName:"a"},"Sources & Sinks")),": Documentation on how to create data sources and sinks for ingesting and exporting data from and to external sources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../operations/build"},(0,a.kt)("strong",{parentName:"a"},"Build")),": Documentation on how to compile, run, and deploy DataSQRL scripts.")),(0,a.kt)("p",null,"In addition, there is documentation on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/key-concepts"},"key concepts")," that are used throughout this documentation."))}d.isMDXComponent=!0}}]);