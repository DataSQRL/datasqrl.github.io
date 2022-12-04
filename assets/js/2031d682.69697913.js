"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Data Sources and Sinks"},c="What are Data Sources and Sinks?",i={unversionedId:"reference/sources/overview",id:"reference/sources/overview",title:"Data Sources and Sinks",description:"To be written",source:"@site/docs/reference/sources/overview.md",sourceDirName:"reference/sources",slug:"/reference/sources/overview",permalink:"/docs/reference/sources/overview",draft:!1,editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/reference/sources/overview.md",tags:[],version:"current",frontMatter:{title:"Data Sources and Sinks"},sidebar:"docs",previous:{title:"Reference Documentation",permalink:"/docs/reference/overview"},next:{title:"Data Source API",permalink:"/docs/reference/sources/api"}},s={},u=[{value:"How to Connect Data Sources",id:"how-to-connect-data-sources",level:2},{value:"Source Data Schema",id:"source-data-schema",level:2},{value:"Adding a Data Source Type",id:"adding-a-data-source-type",level:2},{value:"How to Connect Data Sinks",id:"how-to-connect-data-sinks",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-data-sources-and-sinks"},"What are Data Sources and Sinks?"),(0,a.kt)("p",null,"To be written"),(0,a.kt)("h2",{id:"how-to-connect-data-sources"},"How to Connect Data Sources"),(0,a.kt)("p",null,"You can connect data sources to a DataSQRL server instance either through the\n",(0,a.kt)("a",{parentName:"p",href:"api"},"data sources API")," exposed by the server or using the\n",(0,a.kt)("a",{parentName:"p",href:"../cmd#sources"},"DataSQLR command line utility"),"."),(0,a.kt)("p",null,"The command line utility is a wrapper around the ",(0,a.kt)("a",{parentName:"p",href:"api"},"data sources API")," which makes it\nconvenient and easy to use.\nHowever, the utility may not support a particular type of data source or all of the\nconfiguration options available in the API. For all the options, we recommend that you\ncheck out the reference documentation for the ",(0,a.kt)("a",{parentName:"p",href:"api"},"data sources API"),"."),(0,a.kt)("p",null,"If you are trying to connect a particular type of data source to DataSQRL, take a look at\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/sources/overview"},"full list of supported data sources"),"\nwhich detailed guides on how to connect them."),(0,a.kt)("h2",{id:"source-data-schema"},"Source Data Schema"),(0,a.kt)("p",null,"link to schema-management"),(0,a.kt)("h2",{id:"adding-a-data-source-type"},"Adding a Data Source Type"),(0,a.kt)("p",null,"link to dev docs"),(0,a.kt)("h2",{id:"how-to-connect-data-sinks"},"How to Connect Data Sinks"))}p.isMDXComponent=!0}}]);