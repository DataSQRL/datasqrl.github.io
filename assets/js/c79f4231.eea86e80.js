"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2782],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9018:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"DataSQRL"},c="What is DataSQRL?",l={unversionedId:"getting-started/concepts/datasqrl",id:"getting-started/concepts/datasqrl",title:"DataSQRL",description:"DataSQRL is a data system that makes it easy and productive to build data services from streaming data sources.",source:"@site/docs/getting-started/concepts/datasqrl.md",sourceDirName:"getting-started/concepts",slug:"/getting-started/concepts/datasqrl",permalink:"/docs/getting-started/concepts/datasqrl",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/concepts/datasqrl.md",tags:[],version:"current",frontMatter:{title:"DataSQRL"},sidebar:"docs",previous:{title:"Key Concepts",permalink:"/docs/category/key-concepts"},next:{title:"SQRL",permalink:"/docs/getting-started/concepts/sqrl"}},u={},d=[{value:"Learn More",id:"learn-more",level:2}],p={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-datasqrl"},"What is DataSQRL?"),(0,o.kt)("p",null,"DataSQRL is a data system that makes it easy and productive to build ",(0,o.kt)("a",{parentName:"p",href:"data-service"},"data services")," from streaming data sources."),(0,o.kt)("p",null,"Implementing a data service with DataSQRL takes only 3 steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You connect your streaming data sources to DataSQRL. DataSQRL has connectors for files, database, queues, and logs."),(0,o.kt)("li",{parentName:"ol"},"You combine, transform, and analyze the input data by implementing SQRL scripts. ",(0,o.kt)("a",{parentName:"li",href:"sqrl"},"SQRL")," is a language based on SQL with some added constructs that make it easy to express the logic and structure of your data service."),(0,o.kt)("li",{parentName:"ol"},"DataSQRL compiles your SQRL script to a fully functioning data service that integrates a data pipeline, database, and API server. You can call the API from your applications or other backend services to implement data-driven features or other data-intensive functionality.")),(0,o.kt)("p",null,"DataSQRL compiles SQRL into data services that ingest input data from connected sources, processes it according to the logic expressed in SQRL, and serves the result through an API. DataSQRL does all the laborious work of pipeline orchestration, data synchronization, schema management, and process optimization."),(0,o.kt)("p",null,"Developers use DataSQRL to implement streaming data services, i.e. data services that respond to new input data in realtime and serve the result through low latency, high throughput APIs to many concurrent users. ",(0,o.kt)("br",null),"\nDataSQRL accomplishes this combination of high responsiveness to incoming data and high responsiveness to many concurrent API requests by partially pre-computing results in the data pipeline so that API queries can be computed quickly and with little data movement in the database. ",(0,o.kt)("br",null),"\nSince SQRL is a declarative language, the DataSQRL compiler determines how to implement the defined data transformations most effectively and which ones get pre-computed. This saves you a lot of work and the headache associated with sorting out low-level optimizations and data structures."),(0,o.kt)("p",null,"DataSQRL is an implementation of a ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/view-store"},"view store")," that fills the gap between database systems and data warehouses for data services that need a bit of both: the analytic capabilities of a data warehouse and the high responsiveness and concurrency of a database."),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read the ",(0,o.kt)("a",{parentName:"li",href:"../nutshop-tutorial"},"introductory tutorial")," to get a feel for DataSQRL and the SQRL language while building an entire data service in 10 minutes."),(0,o.kt)("li",{parentName:"ul"},"Find out ",(0,o.kt)("a",{parentName:"li",href:"../why-datasqrl"},"Why DataSQRL Exists")," and what benefits it provides."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../comparison/overview"},"Compare DataSQRL")," to other data technologies and see when to use it.")))}m.isMDXComponent=!0}}]);