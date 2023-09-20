"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1630],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={title:"Advanced Topics"},i="Advanced Topics in DataSQRL",s={unversionedId:"getting-started/intro/advanced",id:"getting-started/intro/advanced",title:"Advanced Topics",description:"You have made it through the entire introduction tutorial and want to keep learning about DataSQLR? Kudos to you! This page highlights some additional aspects of DataSQRL with pointers to more information, so you can continue your journey to ninja squirrel status \ud83d\udc3f\ud83e\udd47.",source:"@site/docs/getting-started/intro/advanced.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/advanced",permalink:"/docs/getting-started/intro/advanced",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/intro/advanced.md",tags:[],version:"current",frontMatter:{title:"Advanced Topics"},sidebar:"docs",previous:{title:"Design the API",permalink:"/docs/getting-started/intro/api"},next:{title:"Deployment",permalink:"/docs/getting-started/intro/deploy"}},l={},d=[{value:"Advanced Relationships",id:"advanced-relationships",level:2},{value:"Creating Stream Tables",id:"creating-stream-tables",level:2},{value:"Export Streams to Data Sinks",id:"export-streams-to-data-sinks",level:3},{value:"SQRL Functions",id:"sqrl-functions",level:2},{value:"Table Schema",id:"table-schema",level:2},{value:"Hidden Fields and Utility Functions",id:"hidden-fields-and-utility-functions",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-topics-in-datasqrl"},"Advanced Topics in DataSQRL"),(0,r.kt)("p",null,"You have made it through the entire introduction tutorial and want to keep learning about DataSQLR? Kudos to you! This page highlights some additional aspects of DataSQRL with pointers to more information, so you can continue your journey to ninja squirrel status \ud83d\udc3f\ud83e\udd47. "),(0,r.kt)("h2",{id:"advanced-relationships"},"Advanced Relationships"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"../sqrl"},"chapter on SQRL")," we introduced relationship columns and showed how they make relationships explicit, add structure to your data, and simplify joins. "),(0,r.kt)("p",null,"In addition, we are going to show how relationships allow us to structure our tables and data intuitively, which improves\nreadability."),(0,r.kt)("p",null,"First, we are going to create a nested table that aggregates order statistics for each user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users.order_stats := SELECT min(o.time) sum(t.price) as spend, sum(t.saving) as saved, \n                            count(1) as num_orders\n      FROM @.purchases o JOIN o.totals t;\n")),(0,r.kt)("p",null,"We have seen such nested table aggregations before. We are aggregating over all orders for each user and are joining in the order totals via the ",(0,r.kt)("inlineCode",{parentName:"p"},"totals")," relationship. We are adding this example to showcase how reusing the relationships ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"totals")," makes this query concise and easy to read. Plus, we can readily refer to nested tables in filters and other types of queries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"HighSpendingUsers := SELECT id, email FROM Users u JOIN u.order_stats s WHERE s.spend > 1000;\n")),(0,r.kt)("p",null,"Here, we are defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"HighSpendingUsers")," table to keep track of our most valuable customers. Note, how we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"order_stats")," relationship to the previously defined nested table to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"spend")," aggregate in the filter of our ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause."),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/relationship"},"relationship documentation")," to learn more."),(0,r.kt)("h2",{id:"creating-stream-tables"},"Creating Stream Tables"),(0,r.kt)("p",null,"Recall that SQRL distinguishes between ",(0,r.kt)("a",{parentName:"p",href:"../sqrl#stream-state"},"stream and state tables")," to represent event and entity data, respectively. In our example, we showed how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT ... ")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT ... ON")," queries to convert stream to state tables through deduplication. Likewise, we create state tables when we aggregate streams without time window."),(0,r.kt)("p",null,"To go the other way and create a stream from a state table, we use define a ",(0,r.kt)("inlineCode",{parentName:"p"},"STREAM")," query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"UserPromotion := STREAM ON ADD AS\n  SELECT u.id, u.first_name, u.last_name, u.email, s.spend\n  FROM Users u JOIN u.order_stats s WHERE s.spend >= 100;\n")),(0,r.kt)("p",null,"This statement defines a new stream table ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPromotion")," as a stream of rows every time a row is added to the underlying state table defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query following ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ADD AS"),". In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPromotion")," stream contains a row with user id, name, email, first order date, and total spending whenever a user has spent more than $100 in our seed shop."),(0,r.kt)("p",null,"Defining stream allows us to react to changes in the data, implement triggers, and derive change-streams. Read more about stream tables in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/stream"},"stream table documentation"),"."),(0,r.kt)("h3",{id:"export-streams-to-data-sinks"},"Export Streams to Data Sinks"),(0,r.kt)("p",null,"One of the great things about stream tables is that we can synchronize stream tables with data sinks and external data systems."),(0,r.kt)("p",null,"A data sink is the opposite of a data source: we import data from a source and export data to a sink."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"EXPORT UserPromotion TO print.promotion;\n")),(0,r.kt)("p",null,"This statement exports our ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPromotion")," stream table to a print data sink called ",(0,r.kt)("inlineCode",{parentName:"p"},"promotion"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," data sink is a system library sink that prints all records to the command line. It's a great sink to use for debugging or analyzing your script."),(0,r.kt)("p",null,"In our example we want to trigger an external action, so we can send the users who have spent more than $100 dollars a promotional offer. To do so, we are going to define our own data sink."),(0,r.kt)("p",null,"Data sinks are defined like data sources as packages. To create a local package, we are going to create a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"mySinkPackage"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir mySinkPackage"),". Inside that folder, create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"system.discovery.table.json")," with the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "sink",\n  "format": {\n    "name": "json"\n  },\n  "datadiscovery": {\n    "directoryURI": "./mysink-output/",\n    "filenamePattern": "^([^\\\\.]+?)(?:_part.*)?$",\n    "name": "file"\n  }\n}\n')),(0,r.kt)("p",null,"This configuration defines a file system sink that writes all records to the folder specified by the directoryURI in Json format. Next, we need to make sure that the folder that we want our sink to write to actually exists. Go back to the folder containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.sqrl")," script and create the sink folder ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir mysink-output"),"."),(0,r.kt)("p",null,"Finally, add the following statement to export to our file system sink."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"EXPORT UserPromotion TO mySinkPackage.promotion;\n")),(0,r.kt)("p",null,"When you ",(0,r.kt)("a",{parentName:"p",href:"../overview#run"},"run")," the script, a folder with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"promotion")," (the name of our sink table we defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPORT")," statement) will appear inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"mysink-output")," folder that contains partitioned files with the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPromotion")," records in them in Json format."),(0,r.kt)("p",null,"Streams are a powerful feature to ",(0,r.kt)("em",{parentName:"p"},"react")," to changes in the data and notify downstream systems immediately. DataSQRL supports various types of data sinks including logs. Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sources/overview"},"data sources and sinks documentation")," for more information."),(0,r.kt)("h2",{id:"sqrl-functions"},"SQRL Functions"),(0,r.kt)("p",null,"Let's talk about good-ol' boring functions. Functions are incredibly useful, can make your script more concise, and your life a lot easier."),(0,r.kt)("p",null,"We used functions from the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," function package in this introductory tutorial.\nSQRL includes a lot of useful functions. You can view the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/functions"},"complete listing of function packages"),". "),(0,r.kt)("p",null,"If a function you need is missing, you can implement a ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/functions/custom-functions"},"custom function package"),"."),(0,r.kt)("h2",{id:"table-schema"},"Table Schema"),(0,r.kt)("p",null,"If you peak into the ",(0,r.kt)("inlineCode",{parentName:"p"},"mysourcepackage")," folder you'll see two files in there for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table: ",(0,r.kt)("inlineCode",{parentName:"p"},"customers.table.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"customers.schema.yml"),". The former file is the data source configuration DataSQRL uses to connect to the data. The latter specifies the schema of the data."),(0,r.kt)("p",null,"Luckily, DataSQRL's ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," command generates both files for us by inferring the data source configuration and schema from the data. You may not ever have to care about those files or what they contain."),(0,r.kt)("p",null,"If you are dealing with very messy input data or data discovery isn't working for you, it may be worth checking out how to define data source and sink packages manually. Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sources/discovery"},"data discovery documentation"),". To learn more about DataSQRL's flexible schema and how it represents semi-structured and messy data, we have ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sources/schema"},"another documentation page")," for you."),(0,r.kt)("h2",{id:"hidden-fields-and-utility-functions"},"Hidden Fields and Utility Functions"),(0,r.kt)("p",null,"DataSQRL automatically adds a few hidden columns to all stream table rows from imported data sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"_uuid"),": A unique identifier for the record assigned by the DataSQRL server on ingest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"_ingest_time"),": A timestamp that marks the time when the record was ingested by DataSQRL server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"_source_time"),": The timestamp attached to the record by the data source. This timestamp is only available if the data source supports it and null otherwise.")),(0,r.kt)("p",null,"The unique identifier is useful to distinguish records and track data lineage."),(0,r.kt)("p",null,"The timestamps that DataSQRL adds can be used as the stream timestamps when the data doesn't have a natural timestamp. However, be careful with ",(0,r.kt)("inlineCode",{parentName:"p"},"_ingest_time")," since it changes every time you run the system and can therefore be unpredictable."),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/import#timestamp"},"import timestamps"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/stream"},"stream tables"),", and how DataSQRL treats ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/time"},"time"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Congratulations, you not only finished the introduction tutorial but also completed the extra credit. What a champ! You are definitely ready to get started with DataSQRL. Now go off and build data APIs."),(0,r.kt)("p",null,"If you wanna keep reading, we have ",(0,r.kt)("a",{parentName:"p",href:"../deploy"},"one more chapter")," for you on deployment and taking your data API to production."),(0,r.kt)("p",null,"For any topics we haven't covered thus far, you can consult the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/overview"},"reference documentation")," which covers all the details and then some."),(0,r.kt)("p",null,"Want to learn more about the internals of DataSQRL or contribute to the codebase? The ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/overview"},"developer documentation")," provides a detailed breakdown of the DataSQRL architecture and everything you need to know to extend DataSQRL yourself."))}c.isMDXComponent=!0}}]);