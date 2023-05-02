"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2318],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={title:"What is SQRL?"},i="What is SQRL?",o={unversionedId:"getting-started/concepts/sqrl",id:"getting-started/concepts/sqrl",title:"What is SQRL?",description:"SQRL is a declarative language to express the logic and structure of a data service. You implement a data service in SQRL scripts by defining how to combine, transform, and analyze the input data through a sequence of SQL(ish) statements. DataSQRL compiles SQRL scripts into fully-integrated data pipelines and an API layer that serves the result.",source:"@site/docs/getting-started/concepts/sqrl.md",sourceDirName:"getting-started/concepts",slug:"/getting-started/concepts/sqrl",permalink:"/docs/getting-started/concepts/sqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/getting-started/concepts/sqrl.md",tags:[],version:"current",frontMatter:{title:"What is SQRL?"},sidebar:"docs",previous:{title:"What is DataSQRL?",permalink:"/docs/getting-started/concepts/datasqrl"},next:{title:"Why Use DataSQRL?",permalink:"/docs/getting-started/concepts/why-datasqrl"}},l={},d=[{value:"SQRL Features",id:"sqrl-features",level:2},{value:"Import Management",id:"import-management",level:3},{value:"Nested Tables",id:"nested-tables",level:3},{value:"Incremental Table Definition",id:"incremental-table-definition",level:3},{value:"Relationships",id:"relationships",level:3},{value:"Data Streams",id:"data-streams",level:3},{value:"Learn More",id:"learn-more",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-sqrl"},"What is SQRL?"),(0,r.kt)("p",null,"SQRL is a declarative language to express the logic and structure of a data service. You implement a data service in SQRL scripts by defining how to combine, transform, and analyze the input data through a sequence of SQL(ish) statements. DataSQRL compiles SQRL scripts into fully-integrated data pipelines and an API layer that serves the result."),(0,r.kt)("p",null,"SQRL is based on SQL. If you know how to read a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM ... WHERE")," query in SQL then you'll be able to read SQRL scripts with a few additional pointers. If you are unfamiliar with SQL, it's a good time to brush up on some SQL basics with our ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/sql-primer"},"SQL primer"),"."),(0,r.kt)("p",null,'SQRL stands for "Structured Query and Reaction Language" and is designed specifically for developers who are building streaming data services. It has a low learning curve because it is essentially "just" SQL but adds important features that SQL lacks and provides a convenient syntax to make it feel like a productive programming language and address the needs of streaming data services.'),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"../../quickstart"},"quickstart tutorial")," to get a feel for SQRL and how it enables building data services."),(0,r.kt)("h2",{id:"sqrl-features"},"SQRL Features"),(0,r.kt)("p",null,"SQRL is a loosely-typed language which infers data types from the input data. You can explicitly define data types and schemas if you want to, but in most cases you let DataSQRL handle all the type and schema management for you and save a lot of time."),(0,r.kt)("p",null,"SQRL adds a few features to SQL to make building data services a lot easier, like explicit support for nested data, streaming data, and relationships. The tables and relationships defined in the SQRL script map directly to the schema of the exposed data API which can be customized in the API specification. "),(0,r.kt)("p",null,"SQRL provides some syntactic sugar on top of SQL to make it feel more like a development language and less like a game of Russian dolls with sub-queries."),(0,r.kt)("p",null,"Here is a brief overview of the features SQRL provides:"),(0,r.kt)("h3",{id:"import-management"},"Import Management"),(0,r.kt)("p",null,"SQRL supports ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPORT")," statements to declare the data dependencies of your SQRL script like you would software dependencies in a programming language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Orders;`\n")),(0,r.kt)("p",null,"This statement imports the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table from the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl.seedshop")," and makes it available in the script."),(0,r.kt)("p",null,"Explicit imports allow us to treat external datasets as dependencies and manage them like we would other software dependencies that evolve over time."),(0,r.kt)("h3",{id:"nested-tables"},"Nested Tables"),(0,r.kt)("p",null,"A lot of data these days has a nested data structure. JSON is a prime example. SQRL supports nested data natively by mapping it onto nested tables with parent-child relationships between them. This allows you to treat nested data just like normal tables."),(0,r.kt)("p",null,"For example, our imported ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table comes from a connected stream of JSON order records that contain a nested array of ",(0,r.kt)("inlineCode",{parentName:"p"},"items"),". Those items are mapped to the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," table and link from an ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," record through the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," relationship."),(0,r.kt)("p",null,"Representing nested data as tables means that we don't need special data types or special access methods for nested data in SQRL. The DataSQRL compiler can figure out how to most efficiently represent such data."),(0,r.kt)("p",null,"We can also create nested tables in SQRL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.totals := SELECT sum(total) as price, sum(discount) as savings FROM @.items;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"totals")," is defined as a nested table under ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," to aggregate the price and discount of all the items in each order. The special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," refers to each row in the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table and is used to define ",(0,r.kt)("em",{parentName:"p"},"locally scoped queries"),". That means, ",(0,r.kt)("inlineCode",{parentName:"p"},"totals")," aggregates the price and discount of all the items of a ",(0,r.kt)("em",{parentName:"p"},"single")," parent ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," record. We can think of the query definition as being applied to ",(0,r.kt)("em",{parentName:"p"},"each row")," of the parent table. In contrast, ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM Orders.items")," would have aggregated over all items for ",(0,r.kt)("em",{parentName:"p"},"all")," orders."),(0,r.kt)("p",null,"Using nested tables and locally scoped queries makes it easy to define aggregations over subsets or partitions of data."),(0,r.kt)("h3",{id:"incremental-table-definition"},"Incremental Table Definition"),(0,r.kt)("p",null,"SQRL scripts are essentially a sequence of table and column definitions that allow you to incrementally build up the logic of your data service."),(0,r.kt)("p",null,"You can add columns to existing tables, like this ",(0,r.kt)("inlineCode",{parentName:"p"},"total")," column on our previously imported ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," table which computes the total price for each item in the order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.items.total := quantity * unit_price - discount?0.0;\n")),(0,r.kt)("p",null,"Or we can define a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table based on the rows in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers := SELECT DISTINCT customerid AS id FROM Orders;\n")),(0,r.kt)("p",null,"SQRL uses the shorthand assignment operator ",(0,r.kt)("inlineCode",{parentName:"p"},":=")," to define the tables and column on the left-hand side of the assignment by the SQL statement on the right. This saves you from typing the more verbose ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE xyz AS ..."),". SQRL contains a few of those syntactic sugars to make development just a little bit more enjoyable. "),(0,r.kt)("p",null,"By defining tables and columns incrementally, you can write shorter, more comprehensible SQL statements that build on each other. This makes development with SQRL more like programming and SQRL scripts easy to read."),(0,r.kt)("h3",{id:"relationships"},"Relationships"),(0,r.kt)("p",null,"SQRL adds relationships to SQL, so you can link tables to each other and explicitly label their relationship.\nRelationships are pre-defined ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," clauses that you can reuse across your script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time DESC;\n")),(0,r.kt)("p",null,"We define the column ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," on the table ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," to be a relationship to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table as defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," clause on the right. The ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," relationship column links a record in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table to all the records in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table that have a matching ",(0,r.kt)("inlineCode",{parentName:"p"},"customerid"),". Note, the use of the special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," to refer to the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table on the left-hand side."),(0,r.kt)("p",null,"Defining relationships makes SQRL scripts easier to read because the structure of the data is explicitly labeled. We can reference previously defined relationships in ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," clauses as well as expressions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.spending :=\n         SELECT round_to_month(p.timestamp) AS month,\n                sum(t.price) AS spend, sum(t.savings) AS saved\n         FROM @.purchases p JOIN p.totals t\n         GROUP BY month ORDER BY month DESC\n")),(0,r.kt)("p",null,"Here, we define a nested table ",(0,r.kt)("inlineCode",{parentName:"p"},"spending")," to aggregate the spending for each customer by month. We use ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM @.purchases p")," to select all the orders for each customer based on the previously defined ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," relationship and then join with the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"totals")," table in ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders"),". SQRL automatically expands relationship references to their full ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," definition."),(0,r.kt)("p",null,"Relationships get exposed in the API as well which allows users of the API to flexibly access the result data of your data service."),(0,r.kt)("h3",{id:"data-streams"},"Data Streams"),(0,r.kt)("p",null,"SQRL natively supports data streams and reacting to changes in data. That's what makes SQRL ",(0,r.kt)("em",{parentName:"p"},"reactive"),". SQRL distinguishes between ",(0,r.kt)("em",{parentName:"p"},"streaming")," and ",(0,r.kt)("em",{parentName:"p"},"state")," tables. State tables are the classic relational tables where records are identified by key and update over time. Streaming tables are an append-only log of records that are ordered in time."),(0,r.kt)("p",null,"SQRL provides features to convert between streaming and state tables as well as react to changes in state tables."),(0,r.kt)("p",null,"For example, to convert a change-log of product updates to a products table that contains the most recent version of each product, we define:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Products AS ProductsChangeLog;\n\nProducts := DISTINCT ProductsChangeLog ON productid ORDER BY updated DESC;\n")),(0,r.kt)("p",null,"This defines a ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," state table keyed by ",(0,r.kt)("inlineCode",{parentName:"p"},"productid")," which contains the most recent update."),(0,r.kt)("p",null,"Sometimes, the conversion from stream to state is implicit such as for certain aggregates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.order_stats := SELECT sum(p.total.price) as total_spend, count(1) as num_orders FROM @.purchases p;\n")),(0,r.kt)("p",null,"We are aggregating the orders stream for each customer to compute a total of the number of orders and total amount of money spent by customer. That aggregate is a state since it changes over time. SQRL is reactive in that it updates such aggregates immediately with each incoming order and the updated results are available through the API."),(0,r.kt)("p",null,"To convert from state to stream table, SQRL provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"STREAM")," constructor which allows us to react to changes in the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"NewCustomerPromotion := STREAM ON ADD AS\nSELECT c.customerid, o.total_spend, o.num_orders FROM Customer c JOIN c.order_stats o\nWHERE o.total_spend >= 100 OR o.num_orders >=3;\n")),(0,r.kt)("p",null,"This creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"NewCustomerPromotion")," data stream to which SQRL appends a record whenever the ",(0,r.kt)("inlineCode",{parentName:"p"},"order_stats")," aggregated state we just defined exceeds $100 spent or more than 3 orders placed by a given customer. "),(0,r.kt)("p",null,"Data streams can be exported to other downstream systems or to trigger external actions. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"EXPORT NewCustomerPromotion TO email.NewCustomerPromotion;\n")),(0,r.kt)("p",null,"This connects the data stream to an external data sink that sends an email to the customer offering a promotion coupon. Data sinks, like data sources, are treated as external dependencies by SQRL."),(0,r.kt)("p",null,"Timestamps on data streams are important to synchronize records in time across systems and process them efficiently. SQRL provides automatic timestamp discovery, or you can define the timestamp column explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Orders TIMESTAMP time;`\n")),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Take a look at the ",(0,r.kt)("a",{parentName:"li",href:"../../quickstart"},"quickstart tutorial")," to build a data service with SQRL in a few minutes."),(0,r.kt)("li",{parentName:"ul"},"For a comprehensive and in-depth description of SQRL, check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sqrl/overview"},"reference documentation"),".")))}m.isMDXComponent=!0}}]);