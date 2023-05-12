"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="DataSQRL Engines",s={unversionedId:"reference/operations/engines/overview",id:"reference/operations/engines/overview",title:"DataSQRL Engines",description:"An engine is a system or technology that executes part of the data layer compiled by DataSQRL.",source:"@site/docs/reference/operations/engines/overview.md",sourceDirName:"reference/operations/engines",slug:"/reference/operations/engines/overview",permalink:"/docs/reference/operations/engines/overview",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/operations/engines/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Docker",permalink:"/docs/reference/operations/deploy/docker"},next:{title:"Flink",permalink:"/docs/reference/operations/engines/flink"}},l={},c=[{value:"Stream Engine",id:"stream-engine",level:2},{value:"Database Engine",id:"database-engine",level:2},{value:"Server Engine",id:"server-engine",level:2},{value:"Cache Engine",id:"cache-engine",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datasqrl-engines"},"DataSQRL Engines"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"engine")," is a system or technology that executes part of the data layer compiled by DataSQRL. "),(0,a.kt)("p",null,"Which engines DataSQRL compiles to is configured in the ",(0,a.kt)("a",{parentName:"p",href:"../../package-config"},"package configuration")," which also defines the data layer architecture. See the ",(0,a.kt)("a",{parentName:"p",href:"../../build"},"build documentation")," for more details."),(0,a.kt)("p",null,"DataSQRL supports 3 types of engines that play distinct roles in a data layer: stream engines, database engines, and server engines."),(0,a.kt)("h2",{id:"stream-engine"},"Stream Engine"),(0,a.kt)("p",null,"A stream engine is a stream processing system that can ingest data from external data sources, process the data, and pass the results to external data sinks."),(0,a.kt)("p",null,"DataSQRL currently supports the following stream engines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../flink"},"Apache Flink"),": Apache Flink is a fault-tolerant and scalable open-source stream processing engine. ")),(0,a.kt)("h2",{id:"database-engine"},"Database Engine"),(0,a.kt)("p",null,"A database engine reliably persists data for concurrent query access."),(0,a.kt)("p",null,"DataSQRL currently supports the following database engines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../postgres"},"Postgres"),": Postgres is an open-source relational database management system.")),(0,a.kt)("h2",{id:"server-engine"},"Server Engine"),(0,a.kt)("p",null,"A server engine efficiently processes data API requests, fetches the result set, and returns it."),(0,a.kt)("p",null,"DataSQRL currently supports the following server engines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../vertx"},"Vertx"),": Vertx is concurrent and asynchronous server engine for Java.")),(0,a.kt)("h2",{id:"cache-engine"},"Cache Engine"),(0,a.kt)("p",null,"Future development"))}g.isMDXComponent=!0}}]);