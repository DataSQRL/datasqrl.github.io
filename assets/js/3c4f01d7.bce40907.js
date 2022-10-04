"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"Configuration"},a="DataSQRL Server Configuration",c={unversionedId:"reference/operations/configuration",id:"reference/operations/configuration",title:"Configuration",description:"List all of the configuration options and how they can be set in the config file and changed at runtime via the server API (this only applies to a subset of options - make it clear which ones)",source:"@site/docs/reference/operations/configuration.md",sourceDirName:"reference/operations",slug:"/reference/operations/configuration",permalink:"/docs/reference/operations/configuration",draft:!1,editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/reference/operations/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration"},sidebar:"docs",previous:{title:"DataSQRL Server Operations",permalink:"/docs/reference/operations/overview"},next:{title:"Monitoring",permalink:"/docs/reference/operations/monitoring"}},s={},l=[{value:"JVM Configuration",id:"jvm-configuration",level:2}],u={toc:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datasqrl-server-configuration"},"DataSQRL Server Configuration"),(0,o.kt)("p",null,"List all of the configuration options and how they can be set in the config file and changed at runtime via the server API (this only applies to a subset of options - make it clear which ones)"),(0,o.kt)("p",null,"Do we need to wrap Flink and Postgres in here?"),(0,o.kt)("h2",{id:"jvm-configuration"},"JVM Configuration"),(0,o.kt)("p",null,"Talk about JVM configuration and tuning"))}f.isMDXComponent=!0}}]);