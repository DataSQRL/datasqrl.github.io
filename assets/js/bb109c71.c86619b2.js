"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5762],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||n;return a?o.createElement(g,i(i({ref:t},c),{},{components:a})):o.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=a(7462),r=(a(7294),a(3905));const n={title:"DataSQRL Comparison"},i="How does DataSQRL compare to other Data Technologies?",s={unversionedId:"getting-started/comparison/overview",id:"getting-started/comparison/overview",title:"DataSQRL Comparison",description:'" width="300"/>',source:"@site/docs/getting-started/comparison/overview.md",sourceDirName:"getting-started/comparison",slug:"/getting-started/comparison/overview",permalink:"/docs/getting-started/comparison/overview",draft:!1,editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/comparison/overview.md",tags:[],version:"current",frontMatter:{title:"DataSQRL Comparison"},sidebar:"docs",previous:{title:"View Store",permalink:"/docs/getting-started/concepts/view-store"},next:{title:"How-to Guides for DataSQRL",permalink:"/docs/guides/overview"}},l={},d=[],c={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-does-datasqrl-compare-to-other-data-technologies"},"How does DataSQRL compare to other Data Technologies?"),(0,r.kt)("img",{src:"/img/index/undraw_decide_sqrl.svg",alt:"When to use DataSQRL >",width:"300"}),(0,r.kt)("p",null,"You get that ",(0,r.kt)("a",{parentName:"p",href:"../concepts/datasqrl"},"DataSQRL")," is a tool for building ",(0,r.kt)("a",{parentName:"p",href:"../concepts/data-service"},"data services")," from streaming data sources, but you are wondering if it's the right tool for your project. And how does it compare to other data technologies you are considering to get the work done?"),(0,r.kt)("p",null,"While it depends a lot on the specifics of your project, the following heuristics are generally useful:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If your data needs are mostly met by mapping database records onto objects, then use a database with an ORM."),(0,r.kt)("li",{parentName:"ol"},"If all the data you need is in a single database, try to build a data service directly on top of that database and evaluate if the performance is good enough."),(0,r.kt)("li",{parentName:"ol"},"If all the data is already prepared for you in a data warehouse and you don't need to be responsive to data changes, then regularly export the data from the warehouse to a database and use an ORM."),(0,r.kt)("li",{parentName:"ol"},"For anything else, try DataSQRL.")),(0,r.kt)("p",null,"Now, those are pretty conservative heuristics for projects where your career is on the line. If you are working on an exploratory project, you should definitely play around with DataSQRL. If you need to build a data service on a tight timeline with little margin for error, you should follow those heuristics."),(0,r.kt)("p",null,"Here is the deal: For simple data services, a database is often good enough. Databases have been around for decades, are very robust, and widely available. If your data is already in a database (or it's trivial to get it there), then the database should be your first choice."),(0,r.kt)("p",null,"If your data needs are complex enough that a database will be taxed significantly or using a database becomes too unproductive (e.g. you are implementing stored procedures, hand tuning queries, denormalizing data, etc), then give DataSQRL a try. DataSQRL is specifically designed to build efficient data services with little effort and can save you a lot of time and headache."),(0,r.kt)("p",null,"You also want to start with DataSQRL if you need to integrate data from multiple sources. Doing so in a database is a lot of pain. DataSQRL's data connectors, import manager, automatic data type discovery, and schema management will save you a lot of time and a lot of manual effort."),(0,r.kt)("p",null,"But before you chose DataSQRL, check whether your data warehouse (or data lake or analytics engine) already has all the data you need integrated and processed. Many organizations have a central data warehouse/lake. If your data service does not need to be responsive to data changes (i.e. serving stale data is ok), then you can avoid the complexity of streaming data and do a regularly scheduled export from the data warehouse into a database and put an ORM on top to serve the API. Such batch processing into a serving layer is a common choice for data services that don't need to respond to data changes in realtime. If you already have all that infrastructure and data integration inside your organization, that might be the quickest way to a data service implementation."),(0,r.kt)("p",null,"Unlike a data warehouse, DataSQRL immediately processes incoming data streams so that the results are directly available through the API. And DataSQRL removes the need for a serving layer that provides the low-latency and high-throughput access to data that you need for serving concurrent API requests. That makes DataSQRL a better choice for responsive data services or situations where going through the data warehouse takes too much time (in terms of data latency, implementation effort, or political wrangling)."),(0,r.kt)("p",null,"On the other end of the spectrum, your data needs may be so complex that they require a team of data scientists, data engineers, ML specialist, MLOps to be satisfied. In that case, you likely need a custom data pipeline that glues together multiple data systems and are looking at a pretty big project. ",(0,r.kt)("br",null),"\nHowever, give DataSQRL a quick try and see if it can get the job done. That can save you a lot of trouble. We frequently see organizations that think they need to bring in the whole caboodle of data scientists, data engineers, MLOps, etc to build some simple data analytics into their product. Don't call the Navy to shoot a sparrow."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"DataSQRL is still young and may be missing a feature that you need for your data service. If that's the case, ",(0,r.kt)("a",{parentName:"p",href:"/"},"place a feature request")," and we'll get on it.")),(0,r.kt)("p",null,"The TL;DR of all this: If you need more than a CRUD app, don't have a database or data warehouse that's ready to go, and are not trying to compete with Google's algorithms, then DataSQRL is a pragmatic choice that gets you good results quickly with little effort."))}u.isMDXComponent=!0}}]);