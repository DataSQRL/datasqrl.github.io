"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Roadmap"},o="DataSQRL Roadmap",s={unversionedId:"dev/roadmap",id:"dev/roadmap",title:"Roadmap",description:"DataSQRL is currently in developer preview. That means, there is enough",source:"@site/docs/dev/roadmap.md",sourceDirName:"dev",slug:"/dev/roadmap",permalink:"/docs/dev/roadmap",draft:!1,editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/dev/roadmap.md",tags:[],version:"current",frontMatter:{title:"Roadmap"}},l={},u=[{value:"Data Sources",id:"data-sources",level:2},{value:"SQRL",id:"sqrl",level:2},{value:"SQL Parity",id:"sql-parity",level:3},{value:"Importing Scripts",id:"importing-scripts",level:3},{value:"Recursive Definitions",id:"recursive-definitions",level:3},{value:"Clustering",id:"clustering",level:3},{value:"Functions",id:"functions",level:3},{value:"API",id:"api",level:2},{value:"REST",id:"rest",level:3},{value:"GraphQL Subscriptions",id:"graphqlsubs",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datasqrl-roadmap"},"DataSQRL Roadmap"),(0,a.kt)("p",null,"DataSQRL is currently in developer preview. That means, there is enough\nmeat on the bone for you to play with DataSQRL and give us feedback\nbut more work needs to be\ndone before it is ready for prime-time and production use."),(0,a.kt)("p",null,"This page is an overview of what lays ahead for DataSQRL and what\nfeatures and functionality we are currently missing."),(0,a.kt)("p",null,"DataSQRL is open source. If you need one of the roadmap items below,\nyou can always get your hands dirty and ",(0,a.kt)("a",{parentName:"p",href:"contribute"},"implement it yourself"),".\nNot only is your brain going to grow by 3.57% as a result of efforts, but you\nwill also earn our eternal gratitude."),(0,a.kt)("h2",{id:"data-sources"},"Data Sources"),(0,a.kt)("h2",{id:"sqrl"},"SQRL"),(0,a.kt)("h3",{id:"sql-parity"},"SQL Parity"),(0,a.kt)("p",null,"SQRL does not yet support all of SQL for defining tables via ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," queries.\nSpecifically, SQRL is currently missing support for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sub-queries"),": SQL allows sub-queries within WHERE or SELECT clauses\nwhich SQRL does not yet support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"INTERSECT, EXCEPT"),": SQRL currently only supports UNION."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OUTER JOINS"),": SQRL currently only supports inner joins.")),(0,a.kt)("p",null,"We are going to work towards features parity based on user needs, so\nlet us know what SQL features you are missing in SQRL."),(0,a.kt)("p",null,"Note, that there are some features of SQL we won't be implementing 1-to-1 in\nSQRL because there are other - and more suitable - ways of representing\nthose in SQRL:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PARTITION OVER"),": Use nested tables instead where the parent table\ndefines the partition and the nested table defines the query over the\npartition scope."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WINDOWS"),": In the context of partitions, this is better handled\nthrough nested tables as explained above. For time windows, you can\nuse the special function ",(0,a.kt)("inlineCode",{parentName:"li"},"now()")," in SQRL to define a sliding time window\nand then add hints to explicitly control the windowing strategy used to\nexecute the query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OFFSET"),": DataSQRL generates an API that provides pagination so you\ncan page through the results in a sane and efficient way.\nBTW: ",(0,a.kt)("a",{parentName:"li",href:"https://use-the-index-luke.com/no-offset"},"OFFSET is evil"),".")),(0,a.kt)("h3",{id:"importing-scripts"},"Importing Scripts"),(0,a.kt)("p",null,"To facilitate reuse of table definitions, we want to be able to import\nother scripts like we are importing datasets from data sources."),(0,a.kt)("p",null,"Each script defines its own dataset. We want to allow dependencies\nbetween scripts for more complex data services."),(0,a.kt)("h3",{id:"recursive-definitions"},"Recursive Definitions"),(0,a.kt)("p",null,"SQRL does not yet support recursive queries which are useful to express\ncomplex computations on data like value propagations."),(0,a.kt)("h3",{id:"clustering"},"Clustering"),(0,a.kt)("p",null,"There are a number of use cases where we want to define a table that\nrepresents clusters of rows in another table."),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"rest"},"REST"),(0,a.kt)("p",null,"DataSQRL should generate REST APIs similarly to how we currently\ngenerate GraphQL APIs."),(0,a.kt)("h3",{id:"graphqlsubs"},"GraphQL Subscriptions"),(0,a.kt)("p",null,"Expose defined subscriptions tables as subscriptions in the generated\nGraphQL API."))}d.isMDXComponent=!0}}]);