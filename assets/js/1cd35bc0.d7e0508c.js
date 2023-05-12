"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,d=l["".concat(s,".").concat(m)]||l[m]||f[m]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[l]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},c="Implement Custom Functions",a={unversionedId:"reference/sqrl/functions/custom-functions",id:"reference/sqrl/functions/custom-functions",title:"Implement Custom Functions",description:"A custom function package contains function definitions and implementations that the DataSQRL compiler can import into a script.",source:"@site/docs/reference/sqrl/functions/custom-functions.md",sourceDirName:"reference/sqrl/functions",slug:"/reference/sqrl/functions/custom-functions",permalink:"/docs/reference/sqrl/functions/custom-functions",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/functions/custom-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Time Functions",permalink:"/docs/reference/sqrl/functions/time"},next:{title:"SQL Primer",permalink:"/docs/reference/sqrl/sql-primer"}},s={},u=[{value:"Functions in Java",id:"functions-in-java",level:2},{value:"Functions in JavaScript",id:"functions-in-javascript",level:2},{value:"Functions in Python",id:"functions-in-python",level:2}],p={toc:u},l="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"implement-custom-functions"},"Implement Custom Functions"),(0,o.kt)("p",null,"A custom function package contains function definitions and implementations that the DataSQRL compiler can import into a script."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before implementing a custom function package, check if the function you need is part of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/functions"},"system function library")," or can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://dev.datasqrl.com"},"repository"),".")),(0,o.kt)("p",null,"To create a new function package, first create a sub-folder ",(0,o.kt)("inlineCode",{parentName:"p"},"myFunctionPackage")," in the directory of the script where you want to import the functions. "),(0,o.kt)("p",null,"Then follow the instructions below for implementing a function package in the language of your choice."),(0,o.kt)("p",null,"Note, that function packages can be ",(0,o.kt)("a",{parentName:"p",href:"../../../operations/repository#publish"},"published to the repository"),", so you can reuse your functions across scripts."),(0,o.kt)("h2",{id:"functions-in-java"},"Functions in Java"),(0,o.kt)("p",null,"work in progress - check back soon"),(0,o.kt)("h2",{id:"functions-in-javascript"},"Functions in JavaScript"),(0,o.kt)("p",null,"coming soon"),(0,o.kt)("h2",{id:"functions-in-python"},"Functions in Python"),(0,o.kt)("p",null,"coming soon"))}f.isMDXComponent=!0}}]);