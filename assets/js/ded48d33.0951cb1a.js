"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8665],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=s,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),s=(a(7294),a(3905));const r={slug:"sqrl-high-level-data-language-sql",title:"SQRL: Enhancing SQL to a High-Level Data Language",authors:["matthias"],tags:["SQRL","community"]},i="SQRL: Enhancing SQL to a High-Level Data Language",o={permalink:"/blog/sqrl-high-level-data-language-sql",editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/2023-05-22-sqrl-high-level-data-language-sql.md",source:"@site/blog/2023-05-22-sqrl-high-level-data-language-sql.md",title:"SQRL: Enhancing SQL to a High-Level Data Language",description:"When creating data-intensive applications or services, your data logic (i.e. the code that defines how to process the data) gets fragmented across multiple data systems, languages, and mental models. This makes data-driven applications difficult to implement and hard to maintain.",date:"2023-05-22T00:00:00.000Z",formattedDate:"May 22, 2023",tags:[{label:"SQRL",permalink:"/blog/tags/sqrl"},{label:"community",permalink:"/blog/tags/community"}],readingTime:7.505,hasTruncateMarker:!0,authors:[{name:"Matthias Broecheler",title:"Founder of DataSQRL",url:"https://github.com/mbroecheler",imageURL:"/img/headshots/matthias1.png",key:"matthias"}],frontMatter:{slug:"sqrl-high-level-data-language-sql",title:"SQRL: Enhancing SQL to a High-Level Data Language",authors:["matthias"],tags:["SQRL","community"]},prevItem:{title:"Simplifying Apache Flink Application Development with DataSQRL",permalink:"/blog/simplifying-flink-app-development"},nextItem:{title:"Let's Uplevel Our Database Game: Meet DataSQRL",permalink:"/blog/lets-uplevel-database-datasqrl"}},l={authorsImageUrls:[void 0]},d=[{value:"Why Do We Need SQRL?",id:"why-do-we-need-sqrl",level:2},{value:"Introducing SQRL",id:"introducing-sqrl",level:2},{value:"SQRL Features Overview",id:"sqrl-features-overview",level:2},{value:"Simple Syntax",id:"simple-syntax",level:3},{value:"Nested Data",id:"nested-data",level:3},{value:"Relationships",id:"relationships",level:3},{value:"Stream Processing",id:"stream-processing",level:3},{value:"Help Us Design SQRL",id:"help-us-design-sqrl",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When creating data-intensive applications or services, your data logic (i.e. the code that defines how to process the data) gets fragmented across multiple data systems, languages, and mental models. This makes data-driven applications difficult to implement and hard to maintain."),(0,s.kt)("p",null,"SQRL is a high-level data programming language that compiles into executables for all your data systems, so you can implement your data logic in one place. SQRL adds support for data streams and relationships to SQL while maintaining its familiar syntax and semantics."),(0,s.kt)("h2",{id:"why-do-we-need-sqrl"},"Why Do We Need SQRL?"),(0,s.kt)("img",{src:"/img/reference/reactive_data_layer.svg",alt:"Data Layer of data-driven application >",width:"30%"}),(0,s.kt)("p",null,"The data layer of a data-driven application comprises multiple components: There\u2019s the good ol\u2019 database for data storage and queries, a server for handling incoming data and translating API requests into database queries, a queue/log for asynchronous data processing, and a stream processor for pre-processing and writing new data to the database. Consequently, your data processing code becomes fragmented across various systems, technologies, and languages."),(0,s.kt)("p",null,'For example, consider a project I was once working on. We were building a data service integrating customer data from various silos into a data API for a mobile app. The objective was to provide customers with an integrated view of their service and billing history, support requests, profile information, etc. This is a typical "Customer 360\xb0" challenge many large organizations face when customer data is spread across numerous operational systems.'),(0,s.kt)("p",null,"The data layer of that service consisted of a bunch of scripts ingesting customer data from CDC (change-data-capture) streams, a SQL database for data persistence, and a Java-based API server."),(0,s.kt)("p",null,"The data logic of this application was trivial: some translation of billing codes and aggregation of service items, but mostly it was straight-forward mapping of data. Yet, it took the team multiple months to build a prototype because of all the code fragmentation and glue code we had to write to stitch the components together. Integration testing was a big pain. And a simple sprint ticket to add a customer field took a week to implement and test."),(0,s.kt)("img",{src:"/img/blog/tower-of-babel.jpg",alt:"The Tower of Babel >|",width:"35%"}),(0,s.kt)("p",null,"The worst part was all the miscommunication. See, each component of the data layer has a different mental model.\nFor the data ingestion and pre-processing, the developers thought in terms of events and streams. For the database modeling and querying, the developers thought in terms of rows and tables. And for the API implementation, the developers thought in terms of objects and classes."),(0,s.kt)("p",null,"It felt like we were building the Tower of Babel. Everybody was speaking a different language and we couldn\u2019t understand each other. But with a twist: We thought we understood each other until it was time to integrate the components and we discovered a mismatch in how we represented the data. That\u2019s a type of punishment not even a jealous God will dish out."),(0,s.kt)("p",null,"To save ourselves from this tedious work and mental gymnastics, we built SQRL as a high-level data programming language for implementing the data logic of your application in one place."),(0,s.kt)("h2",{id:"introducing-sqrl"},"Introducing SQRL"),(0,s.kt)("p",null,"SQRL enhances SQL. If you\u2019ve used SQL before, we hope that you find it easy to pick up SQRL. And if not, there is always ChatGPT \ud83d\ude1c."),(0,s.kt)("p",null,"Let\u2019s take a look at a SQRL script implementing a Customer 360\xb0 API that integrates and aggregates customer and order data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT datasqrl.seedshop.Orders;\nIMPORT datasqrl.seedshop.Customers;\nIMPORT time.*;\n\n/* Clean orders data and compute subtotals */\nOrders.items.discount := discount?0.0;\nOrders.items.total    := quantity * unit_price - discount;\nOrders.totals         := SELECT sum(total) as price,\n                         sum(discount) as saving FROM @.items;\n/* Deduplicate customer CDC stream */\nCustomers := DISTINCT Customers ON id ORDER BY timestamp DESC;\n/* Create relationship between Customers and Orders */\nCustomers.purchases := JOIN Orders ON Orders.customerid = @.id;\n/* Aggregate customer spending by state */\nCustomers.spending := SELECT state, sum(t.price) AS spend,\n                             sum(t.saving) AS saved\n                      FROM @.purchases.totals t GROUP BY state;\n")),(0,s.kt)("p",null,"This script imports customer data and order streams. It processes data in multiple steps, culminating in an aggregated spending analysis by state."),(0,s.kt)("p",null,"And that\u2019s all you have to implement to get a functioning customer 360\xb0 API. DataSQRL compiles this script into executables for all your data systems and handles data mapping and schema synchronization between them."),(0,s.kt)("h2",{id:"sqrl-features-overview"},"SQRL Features Overview"),(0,s.kt)("h3",{id:"simple-syntax"},"Simple Syntax"),(0,s.kt)("p",null,"The first thing you notice is the syntactic sugar that SQRL adds to SQL."),(0,s.kt)("p",null,"It allows you to define the data sources that you are importing into your script so that a package manager can handle data access configuration and schema management."),(0,s.kt)("p",null,"It uses the ",(0,s.kt)("inlineCode",{parentName:"p"},":=")," assignment operator to define new tables and allows incremental column definitions."),(0,s.kt)("p",null,"The goal is to make SQRL feel a little more like a development language where you build your data logic as a sequence of small, incremental steps instead of writing one massive query."),(0,s.kt)("h3",{id:"nested-data"},"Nested Data"),(0,s.kt)("p",null,"Nested data, like JSON documents, is ubiquitous in data-driven applications. It\u2019s how we exchange data. It\u2019s how we expose data in APIs."),(0,s.kt)("p",null,'SQRL provides native support for nested data by representing it as child tables, accessed through the familiar "." dot notation.'),(0,s.kt)("p",null,"In the example, we sum up the price and saving for all items in an order:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"Orders.totals := SELECT sum(total) as price, sum(discount) as saving FROM @.items;\n")),(0,s.kt)("p",null,"There are a couple of things happening here:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"We define a new nested table in ",(0,s.kt)("inlineCode",{parentName:"li"},"Orders")," called ",(0,s.kt)("inlineCode",{parentName:"li"},"totals")," that contains the aggregates"),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"FROM")," clause ",(0,s.kt)("inlineCode",{parentName:"li"},"@.items")," selects the items from ",(0,s.kt)("strong",{parentName:"li"},"each")," order. The special table handle ",(0,s.kt)("inlineCode",{parentName:"li"},"@")," refers to the parent table in the local context, i.e. ",(0,s.kt)("inlineCode",{parentName:"li"},"Orders")," in this example.")),(0,s.kt)("p",null,"Being able to write queries within a nested context makes it possible to process tree-structured data within SQL."),(0,s.kt)("p",null,"For example, when we define the ",(0,s.kt)("inlineCode",{parentName:"p"},"totals")," column for each item in an order, we can refer to the other columns of ",(0,s.kt)("inlineCode",{parentName:"p"},"items")," within the local context:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"Orders.items.total := quantity * unit_price - discount;\n")),(0,s.kt)("p",null,"Nested data support simplifies data consumption from external sources and result data mapping to API calls, eliminating a significant amount of mapping and data transformation code."),(0,s.kt)("h3",{id:"relationships"},"Relationships"),(0,s.kt)("p",null,"SQRL adds relationships to SQL. You can define relationship columns on tables that relate to rows in other tables using the familiar JOIN syntax."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"Customers.purchases := JOIN Orders ON Orders.customerid = @.id;\n")),(0,s.kt)("p",null,"Making relationships explicit in SQL simplifies joins and adds structure to the data that is exposed in the API without separate mapping logic."),(0,s.kt)("p",null,"For example, the ",(0,s.kt)("inlineCode",{parentName:"p"},"FROM")," clause of the spending analysis query uses the relationship expression ",(0,s.kt)("inlineCode",{parentName:"p"},"@.purchases.totals")," to select from the nested ",(0,s.kt)("inlineCode",{parentName:"p"},"totals")," table of the purchase orders for each customer. It eliminates a double-join and makes the query easier to read."),(0,s.kt)("p",null,"Support for relationships and nested data makes it convenient to handle inter-related data and bridges the gap between the relational data model and the tree or object-relationship structure we use in our APIs and applications."),(0,s.kt)("h3",{id:"stream-processing"},"Stream Processing"),(0,s.kt)("img",{src:"/img/blog/data_stream.jpg",alt:"Matrix Data Stream >|",width:"40%"}),(0,s.kt)("p",null,"SQRL introduces support for stream tables to ingest external data streams and react to data changes. Data streams are an important part of data-driven applications. It\u2019s how we consume data from other systems or applications and communicate changes in data to subscribers."),(0,s.kt)("p",null,"Unlike normal SQL tables where records can change over time, a stream table has immutable records that are fixed in time. As we saw with the orders stream in our example, SQRL makes it easy to process stream data in steps."),(0,s.kt)("p",null,"SQRL has operators to convert between stream tables and state tables. Our customer 360\xb0 script uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"DISTINCT")," operator to convert a CDC stream into a state table. The ",(0,s.kt)("inlineCode",{parentName:"p"},"STREAM")," operator creates a change stream from a state table, so you can react to changes in state."),(0,s.kt)("p",null,"In addition, SQRL overloads the ",(0,s.kt)("inlineCode",{parentName:"p"},"JOIN")," operator to support time-consistent joins between state and stream tables. For example, consider the join between the ",(0,s.kt)("inlineCode",{parentName:"p"},"Customers")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Orders")," tables in the spending analysis query. We want to join the ",(0,s.kt)("inlineCode",{parentName:"p"},"Orders")," stream with the state of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Customers")," table ",(0,s.kt)("strong",{parentName:"p"},"at the time")," of a particular order, so that we aggregate by the state that the customer lived in when the order was placed. If we had used an ",(0,s.kt)("inlineCode",{parentName:"p"},"INNER JOIN"),", the state would update every time the customer moved and the query would aggregate all orders under the state the customer currently lives in."),(0,s.kt)("p",null,"Making stream tables a first-class citizen in SQL allows us to process stream data, react to changes in data, and bridge the mental model between the set semantics of the relational world and the event orientation of streams."),(0,s.kt)("p",null,"Take a look at the ",(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started/intro/sqrl"},"documentation")," for a more detailed rundown of all the features SQRL adds to SQL."),(0,s.kt)("h2",{id:"help-us-design-sqrl"},"Help Us Design SQRL"),(0,s.kt)("p",null,"To take SQRL for a spin and learn how to build data-driven applications, we recommend you start with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started/quickstart"},"Quickstart tutorial"),". If you have questions, we are happy to answer them on ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/49AnhVY2w9"},"our Discord"),"."),(0,s.kt)("p",null,"SQRL is still young, and we would love to hear ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/49AnhVY2w9"},"your feedback")," on the language to shape its future."))}m.isMDXComponent=!0}}]);