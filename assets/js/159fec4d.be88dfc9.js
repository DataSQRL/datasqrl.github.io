"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"Optimizer"},o="DataSQRL Optimizer",l={unversionedId:"reference/operations/optimizer",id:"reference/operations/optimizer",title:"Optimizer",description:"The optimizer is part of the DataSQRL compiler and determines the optimal data layer to execute a SQRL script and serve a given API specification.",source:"@site/docs/reference/operations/optimizer.md",sourceDirName:"reference/operations",slug:"/reference/operations/optimizer",permalink:"/docs/reference/operations/optimizer",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/operations/optimizer.md",tags:[],version:"current",frontMatter:{title:"Optimizer"},sidebar:"docs",previous:{title:"Repository",permalink:"/docs/reference/operations/repository"},next:{title:"Package Configuration",permalink:"/docs/reference/operations/package-config"}},p={},s=[{value:"Global Optimization",id:"global-optimization",level:2},{value:"Local Optimization",id:"local-optimization",level:2},{value:"Optimizer Hints",id:"hints",level:2},{value:"Execution Engine Hint",id:"execution-engine-hint",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasqrl-optimizer"},"DataSQRL Optimizer"),(0,r.kt)("p",null,"The optimizer is part of the DataSQRL compiler and determines the optimal data layer to execute a SQRL script and serve a given API specification."),(0,r.kt)("p",null,"The DataSQRL optimizer runs a global optimization for the entire data layer and local optimizations for each individual engine that is part of the data layer architecture."),(0,r.kt)("h2",{id:"global-optimization"},"Global Optimization"),(0,r.kt)("p",null,"The DataSQRL compiler produces a computation DAG (directed, acyclic graph) of all the tables defined in the SQRL script and the result sets computed from those tables that are accessible via the data API according to the API specification."),(0,r.kt)("p",null,"The global optimizer determines which engine executes the computation of which table in the DAG."),(0,r.kt)("img",{src:"/img/dev/simple-pipeline.svg",alt:"Simple DataSQRL data layer architecture",width:"500"}),(0,r.kt)("p",null,"For example, suppose we are compiling a SQRL script against the data layer architecture shown above, which consist of a stream, database, and server engine in sequence. ",(0,r.kt)("br",null),"\nIf we precompute a table in the stream engine, those results are readily available at request time which leads to fast response times and good API performance compared to having to compute the results in the database. However, pre-computing all possible results for the API can be very wasteful or outright impossible due to the number of possible query combinations."),(0,r.kt)("p",null,"The global compiler strives to find the right balance between pre-computing tables for high performance and computing results at request time to reduce waste in order to build efficient data layers."),(0,r.kt)("p",null,"In addition, the global optimizer picks the engine most suitable to compute each table of the global DAG and prunes the DAG to eliminate redundant computations."),(0,r.kt)("h2",{id:"local-optimization"},"Local Optimization"),(0,r.kt)("p",null,"The local optimizer takes the physical execution plans for each engine and runs them through an engine specific optimizer."),(0,r.kt)("p",null,"Local optimizers that are executed by DataSQRL include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DAG Optimization:")," Consolidates repeated computations in the stream processing DAG."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index Selection:")," Chooses an optimal set of indices for database engines to speed up queries executed for individual API calls.")),(0,r.kt)("h2",{id:"hints"},"Optimizer Hints"),(0,r.kt)("p",null,"Sometimes the optimizer makes the wrong decision and produces sub-optimal data layers. You can provide hints in the SQRL script to correct those errors by overwriting the optimizer."),(0,r.kt)("h3",{id:"execution-engine-hint"},"Execution Engine Hint"),(0,r.kt)("p",null,"You annotate a table definition in SQRL with the name of an execution engine as a hint to tell the optimizer which engine should compute the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/*+ EXEC(stream) */\nOrdersByMonth := SELECT endOfmonth(p.time) AS month,\n              count(1) as num_orders\n         FROM Orders GROUP BY month;\n")),(0,r.kt)("p",null,"The annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"EXEC(stream)")," instructs the optimizer to compute the ",(0,r.kt)("inlineCode",{parentName:"p"},"OrdersByMonth")," table in the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," engine. An engine with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," must be configured in the engines section of the ",(0,r.kt)("a",{parentName:"p",href:"../package-config"},"package configuration"),"."),(0,r.kt)("p",null,"Similarly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXEC(database)")," annotation instructs the optimizer to choose the engine with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"database"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/*+ EXEC_DB */\nOrdersByMonth := SELECT endOfmonth(p.time) AS month,\n              count(1) as num_orders\n         FROM Orders GROUP BY month;\n")))}u.isMDXComponent=!0}}]);