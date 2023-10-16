"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||n;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=a(7462),i=(a(7294),a(3905));const n={title:"Why Use DataSQRL?"},r="Why Use DataSQRL?",s={unversionedId:"getting-started/concepts/why-datasqrl",id:"getting-started/concepts/why-datasqrl",title:"Why Use DataSQRL?",description:"When you build data products, you end up wasting most of your time and effort on data plumbing. In fact, 80% (source) of data products fail to deliver value because of data plumbing issues.",source:"@site/docs/getting-started/concepts/why-datasqrl.md",sourceDirName:"getting-started/concepts",slug:"/getting-started/concepts/why-datasqrl",permalink:"/docs/getting-started/concepts/why-datasqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/concepts/why-datasqrl.md",tags:[],version:"current",frontMatter:{title:"Why Use DataSQRL?"},sidebar:"docs",previous:{title:"What is DataSQRL?",permalink:"/docs/getting-started/concepts/datasqrl"},next:{title:"When to use DataSQRL",permalink:"/docs/getting-started/concepts/when-datasqrl"}},l={},d=[{value:"What is Data Plumbing?",id:"dataplumbing",level:2},{value:"Code Fragmentation",id:"code-fragmentation",level:3},{value:"Data Flow Orchestration",id:"data-flow-orchestration",level:3},{value:"Data Mapping",id:"data-mapping",level:3},{value:"System Optimization",id:"system-optimization",level:3},{value:"Benefits of DataSQLR",id:"benefits-of-datasqlr",level:2},{value:"DataSQRL Saves You Time",id:"save-time",level:3},{value:"DataSQRL is Easy to Use",id:"easy-to-use",level:3},{value:"DataSQRL Compiles Fast &amp; Efficient Pipelines",id:"performance",level:3},{value:"Learn more",id:"learn-more",level:2},{value:"Footnotes",id:"footnotes",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"why-use-datasqrl"},"Why Use DataSQRL?"),(0,i.kt)("p",null,"When you build data products, you end up wasting most of your time and effort on data plumbing. In fact, 80% (",(0,i.kt)("a",{parentName:"p",href:"#footnotes"},"source"),") of data products fail to deliver value because of data plumbing issues.\nWe developed the open-source DataSQRL compiler to eliminate data plumbing so you can build efficient data products in days instead of months."),(0,i.kt)("img",{src:"/img/index/undraw_questions_sqrl.svg",alt:"DataSQRL allows you to build with data >",width:"40%"}),(0,i.kt)("p",null,"Isn't it curious that a single developer can build a production-grade web service in a few days, but it takes a team of technology experts months to build a mediocre data product that looks like Frankenstein on a bad hair day? Data plumbing is to blame for that."),(0,i.kt)("p",null,"Have you noticed that even the data products that do actually make it to production don't deliver a lot of value? Yep, it's because of data plumbing."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../datasqrl"},"DataSQRL")," allows you to build efficient data products that deliver real value to customers without getting bogged down by data plumbing concerns."),(0,i.kt)("h2",{id:"dataplumbing"},"What is Data Plumbing?"),(0,i.kt)("p",null,"What's data plumbing? It's all that extra engineering you need to turn a data transformation into a deployable data pipeline. Specifically, there are 4 types of data plumbing that waste the most time, money, and effort."),(0,i.kt)("h3",{id:"code-fragmentation"},"Code Fragmentation"),(0,i.kt)("img",{src:"/img/reference/dpTypes3.svg",alt:"Data Pipeline Architecture",width:"100%"}),(0,i.kt)("p",null,"A data pipeline consists of multiple technologies that work in concert to transform the raw input data into a valuable result. Data stream like Apache Kafka, stream processors like Apache Flink, databases like Postgres, and API servers like GraphQL."),(0,i.kt)("p",null,"To implement a coherent data pipeline, you need to split the logic of your data product across the various technologies that make up your data pipeline which leads to code fragmentation. And each technology uses a different language, dialect, and conceptual model which means you need to become an expert in each of the technologies or assemble a team of experts to implement a single data pipeline."),(0,i.kt)("p",null,"That introduces a lot of coordination overhead, makes it hard to implement all the pipeline stages coherently, and very expensive to refactor a data product."),(0,i.kt)("h3",{id:"data-flow-orchestration"},"Data Flow Orchestration"),(0,i.kt)("p",null,'To make the data flow smoothly through the data pipeline, you have to implement the integration points between the various technologies in your data pipeline. That requires a lot of "glue code" that is hard to debug and maintain. In addition, you have to be very careful that data flows are synchronized in time to avoid inconsistencies.'),(0,i.kt)("p",null,"Furthermore, you end up writing a lot of configuration code to define how data is ingested and moved through the system. All of this code is specific to a particular data pipeline and needs to be maintained over time."),(0,i.kt)("h3",{id:"data-mapping"},"Data Mapping"),(0,i.kt)("p",null,"Each technology in the data pipeline has its own data and schema representation which means you have to write a lot of custom code to map data between systems and make sure schemas are aligned. This may require additional data transformations and careful consideration to avoid introducing inefficiencies."),(0,i.kt)("h3",{id:"system-optimization"},"System Optimization"),(0,i.kt)("p",null,"Each technology in the data pipeline has a different physical model and operational characteristics which makes it difficult to optimize data pipelines for efficient operation. To optimize a data pipeline you need deep expertise in each of the technologies and understand how their divergent operational behaviors play off each other to introduce inefficiencies."),(0,i.kt)("h2",{id:"benefits-of-datasqlr"},"Benefits of DataSQLR"),(0,i.kt)("p",null,"If you are building a data product, DataSQRL can save you a lot of time, make your life easier, and produce better implementations by eliminating data plumbing."),(0,i.kt)("p",null,"Let's break that down:"),(0,i.kt)("h3",{id:"save-time"},"DataSQRL Saves You Time"),(0,i.kt)("img",{src:"/img/index/undraw_time_management_sqrl.svg",alt:"DataSQRL saves you time >",width:"40%"}),(0,i.kt)("p",null,"DataSQRL's intelligent compiler eliminates data plumbing and saves you the time and effort required to tackle the four types of data plumbing outlined above. DataSQRL handles all the time-consuming details of data pipeline implementation for you. You implement the logic of your data product in SQL, and DataSQRL compiles that logic into an optimized data pipeline."),(0,i.kt)("p",null,"DataSQRL gives you a higher level of abstraction, so you don't get bogged down implementing, integrating, and optimizing low level data abstractions. ",(0,i.kt)("br",null),"\nYou don't write your software in low-level languages like ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Assembly_language"},"Assembly"),". You use a higher level language like Javascript, Python, Java, etc that compile into machine code to make you more productive. DataSQRL is a compiler for your data pipeline to make you more productive."),(0,i.kt)("h3",{id:"easy-to-use"},"DataSQRL is Easy to Use"),(0,i.kt)("p",null,"DataSQRL gives you a higher-level of abstraction for implementing data products. That makes things easier in two ways:"),(0,i.kt)("p",null,"First, DataSQRL handles a lot of things for you that you don't have to worry about at all like all the data plumbing issues outlined above. When you implement a data product in DataSQRL you have to learn fewer concepts to be successful. DataSQRL doesn't hide any of these elements from you. You get full visibility and can control those elements if you like. But you don't have to and in most cases you never have to worry about it."),(0,i.kt)("p",null,"You can focus entirely on the logic of your data product by defining data transformations and analytics. DataSQRL uses those definitions to figure out what the schema should look like, how the data should flow, and how to retrieve it for API requests. This simplifies implementing a data product and saves you a ton of data plumbing code that holds a data pipeline together."),(0,i.kt)("img",{src:"/img/index/undraw_programming_sqrl.svg",alt:"DataSQRL is easy to use >",width:"40%"}),(0,i.kt)("p",null,"Second, the DataSQRL compiler not only determines how to implement data operations but also ",(0,i.kt)("em",{parentName:"p"},"when"),". A common tradeoff data pipeline implementations face is processing data at ingest time (i.e. when a new data record is ingested) versus at query time (i.e. when a user of the API issues a request). For example, suppose we are providing an API that shows customers the total amount of money they have spent at our e-commerce store. We can compute this value by summing over all the orders at query time or incrementally updating a sum at ingest time when a new order is placed. The result is the same but has different operational characteristics and can make the difference between things humming along and your database being brought to its knees. ",(0,i.kt)("br",null),"\nIf you are thinking \"why are you boring me with these data pipeline implementation trivia\", that's exactly the point: With DataSQRL you don't have to think about this. It abstracts those tradeoffs away. If you are going the low-level route and assemble a data pipeline architecture yourself, you'll have to worry about these and other tradeoffs as you design the system. And that makes it very expensive to evolve your pipeline over time."),(0,i.kt)("h3",{id:"performance"},"DataSQRL Compiles Fast & Efficient Pipelines"),(0,i.kt)("p",null,"Building a data product prototype is one thing, but getting a data product to production successfully is a whole different ballgame. With DataSQRL you can rest assured that the data product you are building is robust, fast, efficient, and scalable."),(0,i.kt)("img",{src:"/img/index/undraw_fast_loading_sqrl.svg",alt:"DataSQRL is fast & efficient >",width:"40%"}),(0,i.kt)("p",null,"If you are dealing with a substantial amount of data, you need to handle the data efficiently. Otherwise, your data product is going to be costly, slow, and unstable. Even a trivial omission like a missing index structure can bring down an otherwise soundly engineered data pipeline once you reach a few gigabytes of data with a handful of concurrent users. To make matters worse, you often don't find out about these issues until late in the game, or after you've shipped to production, which ruins game night with tacos."),(0,i.kt)("p",null,"DataSQRL has an ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/operations/optimizer"},"optimizer")," that picks optimal data structures, chooses the least expensive execution path, installs index structures, pushes down predicates, batches requests, and pools resources. All those things you really don't want to think about when you are building data pipelines on a timeline but can potentially come back to bite you. DataSQRL takes care of them for you."),(0,i.kt)("p",null,"DataSQRL compiles to proven streaming technologies like ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka")," for ingest and ",(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," for processing realtime data flows as well as mature databases like ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," to serve API requests. This means your data pipelines runs on a robust, fast, and efficient architecture that is optimized by DataSQRL. The resulting data product runs on technologies that have been battle-tested for decades, so you can sleep peacefully at night."),(0,i.kt)("p",null,"If your data product becomes successful (fingers crossed \ud83e\udd1e) or the amount of data keeps growing, you'll need to scale. Building scale into a system after the fact is very expensive. With DataSQRL you are building on a scalable foundation and when it comes time to scale you know that you can add resources and the system will be able to manage more data and more traffic. Each component of the compiled data product can be scaled independently, or you can rely on managed offerings that auto-scale.\nHowever, DataSQRL doesn't slow you down initially with scalability concerns, and you can run the entire pipeline on a single instance or your laptop."),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To get a feel for DataSQRL and how easy it is to build data products, check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/quickstart"},"quickstart tutorial"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are trying to figure out if DataSQLR is the right choice for you, take a look at the ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/concepts/when-datasqrl"},"comparison to other data systems")," to find out how DataSQRL compares."),(0,i.kt)("li",{parentName:"ul"},"To dive deeper into DataSQRL, explore how the ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer"},"optimizer")," compiles SQL scripts into efficient data architectures, or read the ",(0,i.kt)("a",{parentName:"li",href:"/docs/intro"},"documentation")," for all the things.")),(0,i.kt)("h2",{id:"footnotes"},"Footnotes"),(0,i.kt)("p",null,"[1]"," Estimates for data product failures rates due to data plumbing issues vary, but are generally 80% or higher. See this ",(0,i.kt)("a",{parentName:"p",href:"https://designingforanalytics.com/resources/failure-rates-for-analytics-bi-iot-and-big-data-projects-85-yikes/"},"aggregate analysis"),", ",(0,i.kt)("a",{parentName:"p",href:"https://venturebeat.com/ai/why-do-87-of-data-science-projects-never-make-it-into-production/"},"article by VentureBeat"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20200819210339/https://blogs.gartner.com/andrew_white/2019/01/03/our-top-data-and-analytics-predicts-for-2019/"},"Gartner analysis"),"."))}p.isMDXComponent=!0}}]);