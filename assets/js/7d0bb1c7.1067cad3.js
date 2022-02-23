"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6613],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8432:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],o={title:"View Store"},c="What is a View Store?",l={unversionedId:"reference/concepts/view-store",id:"reference/concepts/view-store",title:"View Store",description:"A view store is a data system that provides fast, concurrent access to partially maintained views over sources of input data.",source:"@site/docs/reference/concepts/view-store.md",sourceDirName:"reference/concepts",slug:"/reference/concepts/view-store",permalink:"/docs/reference/concepts/view-store",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/reference/concepts/view-store.md",tags:[],version:"current",frontMatter:{title:"View Store"},sidebar:"docs",previous:{title:"Data Service",permalink:"/docs/reference/concepts/data-service"},next:{title:"DataSQRL",permalink:"/docs/reference/concepts/datasqrl"}},u=[],p={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-a-view-store"},"What is a View Store?"),(0,i.kt)("p",null,"A view store is a data system that provides fast, concurrent access to partially maintained views over sources of input data."),(0,i.kt)("p",null,"That's a lot in one sentence, let's unpack it starting at the end."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sources of input data:")," A view store processes data produced by other systems which are the sources of input data. A view store is not a transactional database or authoritative data store. It combines input data from multiple sources and processes it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View:"),' "Processing data" means computing views over the input data. A ',(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/View_(SQL)"},"view")," is a database term for the result set of a pre-defined query. By composing views, a view store can derive arbitrary transformations or analytics on the input data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Maintained View:")," A view is called ",(0,i.kt)("em",{parentName:"li"},"maintained")," if the result set of the view is incrementally maintained as the input data changes. Maintaining a view makes it faster to query for its results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Partially maintained views:")," A view store is capable of maintaining views or computing views at query time depending on the needs of the user. A view store can flexibly adjust the way it computes views to trade-off the computational cost needed to maintain views when input data changes versus computing the views at query time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fast, concurrent access:")," A view store is a responsive, operational data system which means new input data is immediately available for querying and the system can support a large number of concurrent users while providing low latency (<100ms) response times.")),(0,i.kt)("p",null,"A view store is a data system that can support realtime data services and data-driven features in user facing applications."),(0,i.kt)("p",null,"The motivation for breaking out view stores as a distinct category of data systems is similar to that for data warehouses. ",(0,i.kt)("br",null),"\nA data warehouse is a data system that combines, transforms, and consolidates input data from multiple transactional databases and other data sources to provide an environment where analysts can run business intelligence queries. ",(0,i.kt)("br",null),"\nA view store does the same but provides an environment where software developers can implement data services and data-driven features."),(0,i.kt)("p",null,"Data warehouses and view stores share many similarities: they both consume data from multiple external sources, they consolidate, integrate, and transform this data, and they execute complex queries and analytics over the data.\nWhere they differ is in their use and operational characteristics. Data warehouses serve business intelligence and data science workloads which are sporadic, one-off queries that can take a substantial amount of time (seconds to hours) to complete.\nView stores serve application workloads which have pre-defined query that are executed thousands of times per second with low latency expectations on the order of milliseconds. "),(0,i.kt)("p",null,'In the context of machine learning workloads, view stores are often called "feature stores" because the computed views are features used by a machine learning algorithm.'))}d.isMDXComponent=!0}}]);