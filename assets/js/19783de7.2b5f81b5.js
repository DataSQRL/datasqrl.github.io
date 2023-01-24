"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2806],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||s;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:n,i[1]=r;for(var d=2;d<s;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const s={title:"Why DataSQRL?"},i="Why does DataSQRL exist?",r={unversionedId:"getting-started/why-datasqrl",id:"getting-started/why-datasqrl",title:"Why DataSQRL?",description:"We love building with data, but we got frustrated by how complicated it is to build data-driven features. That's why we built DataSQRL.",source:"@site/docs/getting-started/why-datasqrl.md",sourceDirName:"getting-started",slug:"/getting-started/why-datasqrl",permalink:"/docs/getting-started/why-datasqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/getting-started/why-datasqrl.md",tags:[],version:"current",frontMatter:{title:"Why DataSQRL?"},sidebar:"docs",previous:{title:"Advanced Concepts",permalink:"/docs/getting-started/intro/advanced"},next:{title:"Key Concepts",permalink:"/docs/category/key-concepts"}},l={},d=[{value:"Why Should You Use DataSQLR?",id:"why-should-you-use-datasqlr",level:2},{value:"Saves You Time",id:"save-time",level:3},{value:"Easy to Use",id:"easy-to-use",level:3},{value:"Fast &amp; Efficient",id:"performance",level:3},{value:"Learn more",id:"learn-more",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"why-does-datasqrl-exist"},"Why does DataSQRL exist?"),(0,n.kt)("p",null,"We love building with data, but we got frustrated by how complicated it is to build data-driven features. That's why we built DataSQRL."),(0,n.kt)("p",null,"There are a gazillion CRUD frameworks and ORM libraries for mapping database rows onto objects, but if you want to do anything more interesting with your data, you are on your own. Want to do complex data transformations? Say hello to obscure stored procedures, brittle data pipelines, and a scattershot of python scripts. Want to do data analytics? Good luck wading through the jungle of data warehouse fiefdoms, big data overkill, and mountains of SQL."),(0,n.kt)("img",{src:"/img/index/undraw_questions_sqrl.svg",alt:"DataSQRL allows you to build with data >",width:"300"}),(0,n.kt)("p",null,"Why can you build a production-grade web service in a few days, but it takes months to build a mediocre data service that looks like Frankenstein after a colonoscopy? We believe that a lack of developer tools for building with data has a lot to do with it"),(0,n.kt)("p",null,"Playing with data used to be the realm of business intelligence and data analysts. When folks discovered that data-driven features in software are extremely valuable, they took their tools, methods, and approaches for compiling reports and dashboards and bolted software engineering on top. The result is like putting cheesecake into a Ramen soup - both make sense individually but thrown together it's a gross mess. "),(0,n.kt)("p",null,"We are developing DataSQRL as a tool for developers to build data services. You connect your data sources to DataSQRL, implement the logic and structure of your data service in a scripting language that looks and feels like SQL, and DataSQRL generates a scalable and cost-efficient API that exposes your data service. It's as easy as 1-2-3. We cut out all the stuff developers don't need and focused on building a tool that integrates with your workflow."),(0,n.kt)("h2",{id:"why-should-you-use-datasqlr"},"Why Should You Use DataSQLR?"),(0,n.kt)("p",null,"If you are building a data service or a data-driven feature for an application, DataSQRL can save you a lot of time, make your life easier, and produce better implementations."),(0,n.kt)("p",null,"DataSQRL provides these benefits because it's a tightly integrated package purpose built for data services which uses a simple, declarative language based on SQL and has smart optimizer that compiles your data service logic to high performance data service implementations. Sounds a little ",(0,n.kt)("em",{parentName:"p"},"pie-in-the-sky"),"? Let's break it down:"),(0,n.kt)("h3",{id:"save-time"},"Saves You Time"),(0,n.kt)("p",null,"To build a data service, you need an API layer that exposes and services the data service API, a database to serve the data returned by the API, and an ingest layer that collects all the data for your data service from various sources and stores it in the database. ",(0,n.kt)("br",null),"\nAnd that's just the price of admission. If you want to do anything of value with your data beyond just compiling and serving it, you also need an analytics layer to transform and enrich the data as well as a data pipeline to glue all these pieces together. If you want to respond to data in realtime, you need a streaming architecture and low latency updates. And we haven't addressed scalability or robustness yet."),(0,n.kt)("img",{src:"/img/index/undraw_time_management_sqrl.svg",alt:"DataSQRL saves you time >",width:"300"}),(0,n.kt)("p",null,"The point is: There are a lot of pieces to a data service architecture and assembling all these moving pieces yourself takes a ton of time and effort."),(0,n.kt)("p",null,"DataSQRL is a tightly-knit package that integrates best-of-breed components to give you a data service architecture out of the box. DataSQRL uses ",(0,n.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," as the streaming data pipeline that weaves all the components together and builds the ingest and analytics layer on top. DataSQRL uses the popular ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," or ",(0,n.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MySQL")," database systems to store and serve the data. The API layer is build on the fast ",(0,n.kt)("a",{parentName:"p",href:"https://vertx.io/"},"Vertx")," framework. "),(0,n.kt)("p",null,"DataSQRL not only stitches these components into a high-performance data service architecture but also ensures that the data moves seamlessly between components by synchronizing data types, orchestrating data flows, managing failures, and providing visibility into and across components."),(0,n.kt)("p",null,"In other words: DataSQRL handles all the time-consuming details for you. You implement the logic of your data service in ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/sqrl"},"SQRL"),", a simple language based on SQL to define data transformations and analytics, and DataSQRL compiles that logic into a fully orchestrated data pipeline for data ingest, transformation, analytics, and database storage as well as an API and API serving layer."),(0,n.kt)("p",null,"Think of DataSQRL as a compiler for data services: DataSQRL saves you the time of implementing, integrating, and optimizing low level data abstractions. ",(0,n.kt)("br",null),"\nYou don't implement software in ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Machine_code"},"machine code"),". You use a higher level language like Javascript, Python, Java, etc that compiles into machine code to save you that hassle. SQRL is a higher-level language for data services and DataSQRL the execution engine."),(0,n.kt)("p",null,"Because DataSQRL abstracts much complexity of implementing data services it saves you a lot of time and allows you to ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/nutshop-tutorial"},"implement data services in 10 minutes"),"."),(0,n.kt)("h3",{id:"easy-to-use"},"Easy to Use"),(0,n.kt)("img",{src:"/img/index/undraw_programming_sqrl.svg",alt:"DataSQRL is easy to use >",width:"300"}),(0,n.kt)("p",null,"DataSQRL provides a higher-level of abstraction for implementing data services. That makes things easier in two ways:"),(0,n.kt)("p",null,"First, DataSQRL handles a lot of things for you that you don't have to worry about at all. Schema management, data flows, data type conversions, stream orchestration, data synchronization - all of those things are managed directly by DataSQRL. When you implement a data service in DataSQRL you have to learn fewer concepts to be successful. DataSQRL doesn't hide any of these elements from you. You get full visibility and can control those elements if you like. But you don't have to and in most cases you never have to worry about it."),(0,n.kt)("p",null,'You can focus entirely on the logic of your data service by defining data transformations and analytics. DataSQRL uses those definitions to figure out what the schema should look like, how the data should flow, and what the exposed API looks like. This simplifies implementing a data service and saves you a ton of "glue code" that holds a data service architecture together.'),(0,n.kt)("p",null,"Secondly, DataSQRL consolidates all elements of building a data service in one higher-level language called SQRL. That means you only have to learn one thing: ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/sqrl"},"SQRL"),". SQRL is based on SQL, so if you know how to read a ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM ... WHERE")," clause you will pick up SQRL very quickly. SQRL extends SQL with a few constructs that make it easier to develop complex sequences of data transformations and define data structures. Take a look at our ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/nutshop-tutorial"},"introductory tutorial")," to get a feel for the language."),(0,n.kt)("p",null,"You implement your entire data service in SQRL and you only need to learn SQRL to build complex data services. Because data service architectures are usually comprised of many different components, that saves you from learning the ins-and-outs of all of those components and their respective languages."),(0,n.kt)("p",null,"Like SQL, SQRL is a declarative language. Implementing a data service in SQRL means defining data transformations and analytics to apply to your input data to produce the desired result. You don't have to implement ",(0,n.kt)("em",{parentName:"p"},"how")," to execute those transformations or when. You focus entirely on the ",(0,n.kt)("em",{parentName:"p"},"what")," and DataSQRL figures out the ",(0,n.kt)("em",{parentName:"p"},"how"),". This saves you time from implementing data operations manually."),(0,n.kt)("p",null,"The DataSQRL compiler not only determines how to implement data operations but also ",(0,n.kt)("em",{parentName:"p"},"when"),". A common tradeoff data service implementations face is executing data operations at ingest time (i.e. when a new data record is ingested) versus at query time (i.e. when a user of the API issues a request). For example, suppose we are providing an API that shows customers the total amount of money they have spent at our e-commerce store. We can compute this value by summing over all the orders at query time or incrementally updating a sum at ingest time when a new order is placed. The result is the same but has different operational characteristics and can make the difference between things humming along and your database being brought to its knees. ",(0,n.kt)("br",null),"\nIf you are thinking \"why are you boring me with these data service implementation trivia\", that's exactly the point: With DataSQRL you don't have to think about this. It abstracts those tradeoffs away. If you are going the low-level route and assemble a data service architecture yourself, you'll have to worry about these and other tradeoffs as you design the system."),(0,n.kt)("h3",{id:"performance"},"Fast & Efficient"),(0,n.kt)("p",null,"Building a data service prototype is one thing, but getting a data service to production successfully is a whole different ballgame. With DataSQRL you can rest assured that the data service you are building is robust, fast, low-cost, and scalable."),(0,n.kt)("img",{src:"/img/index/undraw_fast_loading_sqrl.svg",alt:"DataSQRL is fast & efficient >",width:"300"}),(0,n.kt)("p",null,"If you are dealing with a substantial amount of data, you need to handle the data efficiently. Otherwise, your data service is going to be costly, slow, and unstable. Even a trivial omission like a missing index structure can bring down an otherwise soundly engineered data service once you reach a few gigabytes of data with a handful of concurrent users. To make matters worse, you often don't find out about these issues until late in the game or after you've shipped to production, which ruins game night with tacos."),(0,n.kt)("p",null,"DataSQRL has an ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/operations/optimizer"},"optimizer")," that picks optimal data structures, chooses the least expensive execution path, installs index structures, pushes down predicates, batches requests, and pools resources. All those things you really don't want to think about when you are building a data service on a timeline but can potentially come back to bite you. DataSQRL takes care of them for you."),(0,n.kt)("p",null,"DataSQRL uses ",(0,n.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," to execute realtime streaming data flows and transformations and stores the resulting data in ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," or ",(0,n.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MySQL")," databases to serve API requests. This means your data service runs on a robust, fast, and efficient architecture that is optimized by DataSQRL."),(0,n.kt)("p",null,"If your data service becomes successful (fingers crossed \ud83e\udd1e) or the amount of data keeps growing, you'll need to scale. Building scale into a system after the fact is very expensive. With DataSQRL you are building on a scalable foundation and when it comes time to scale you know that you can add resources and the system will be able to manage more data and more traffic. However, DataSQRL doesn't slow you down initially with scalability concerns."),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To get a feel for DataSQRL and how easy it is to build data services, check out the ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/nutshop-tutorial"},"introductory tutorial"),"."),(0,n.kt)("li",{parentName:"ul"},"If you are trying to figure out if DataSQLR is the right choice for you, take a look at the ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/comparison/overview"},"comparison to other data systems")," to find out how DataSQRL compares."),(0,n.kt)("li",{parentName:"ul"},"To dive deeper into DataSQRL, explore the ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/concepts/sqrl"},"SQRL language"),", how the ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer"},"optimizer")," compiles SQRL scripts into efficient data architectures, or read the ",(0,n.kt)("a",{parentName:"li",href:"/docs/intro"},"documentation")," for all the things.")))}c.isMDXComponent=!0}}]);