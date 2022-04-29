"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1630],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Advanced Concepts"},l="Advanced Concepts in DataSQRL",u={unversionedId:"getting-started/intro/advanced",id:"getting-started/intro/advanced",title:"Advanced Concepts",description:"You have made it through the entire extended tutorial and want to keep learning about DataSQLR? Kudos to you! This page highlights some advanced aspects of DataSQRL with pointers to more information so you can continue your journey to ninja SQRL status \ud83e\udd47.",source:"@site/docs/getting-started/intro/advanced.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/advanced",permalink:"/docs/getting-started/intro/advanced",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/intro/advanced.md",tags:[],version:"current",frontMatter:{title:"Advanced Concepts"},sidebar:"docs",previous:{title:"Operating DataSQRL",permalink:"/docs/getting-started/intro/server"},next:{title:"Why DataSQRL?",permalink:"/docs/getting-started/why-datasqrl"}},d={},p=[{value:"SQRL Functions",id:"sqrl-functions",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Hidden Fields and Utility Functions",id:"hidden-fields-and-utility-functions",level:2},{value:"Script Evolution",id:"script-evolution",level:2},{value:"Hints and Optimization",id:"hints",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-concepts-in-datasqrl"},"Advanced Concepts in DataSQRL"),(0,r.kt)("p",null,"You have made it through the entire extended tutorial and want to keep learning about DataSQLR? Kudos to you! This page highlights some advanced aspects of DataSQRL with pointers to more information so you can continue your journey to ninja SQRL status \ud83e\udd47."),(0,r.kt)("h2",{id:"sqrl-functions"},"SQRL Functions"),(0,r.kt)("p",null,"we are going to start with good-ol' boring functions. Functions are incredibly useful, can make your script more concise, and your life a lot easier."),(0,r.kt)("p",null,"We used the function ",(0,r.kt)("inlineCode",{parentName:"p"},"function.time.fromEpochMillis")," in the ",(0,r.kt)("a",{parentName:"p",href:"../nutshop-tutorial"},"nut shop tutorial")," and referenced the function by its fully qualified name. If you use a function repeatedly, you can import it to save you from typing the full name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT nutshop-data.Products;\nIMPORT nutshop-data.Orders;\n\nIMPORT function.time.fromEpochMillis;\n\nOrders.date := fromEpochMillis(time);\n")),(0,r.kt)("p",null,"You can also import all functions in a particular package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT function.time.*;\n")),(0,r.kt)("p",null,"Note, that the imported functions are placed in the same namespace as the imported tables and datasets, so you have to be careful that those names do not overlap. If they do, you can rename functions or tables on import."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT function.time.fromEpochMillis AS epoch2Millis;\n\nOrders.date := epoch2Millis(time);\n")),(0,r.kt)("p",null,"As a side note, ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," is a reserved keyword in SQRL and you cannot name your datasets or tables ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," to avoid confusion."),(0,r.kt)("p",null,"SQRL includes a lot of useful functions. You can view the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/functions"},"complete listing of function packages"),". Here are some highlights:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iff")," is an inline if-then-else function that evaluates the boolean expression given as the first argument and returns the second argument if it is true, otherwise it returns the third argument. Great for small conditionals where ",(0,r.kt)("em",{parentName:"li"},"case-when")," statements are overkill."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"coalesce")," returns the second argument if the first argument is null. Great for normalizing messy data."),(0,r.kt)("li",{parentName:"ul"},"If you are doing string transformations, take a look at the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sqrl/functions/string-fct"},"string function package"),"."),(0,r.kt)("li",{parentName:"ul"},"Working with timestamps, dates, and all matters of time gets a lot easier with the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sqrl/functions/time-fct"},"time function package"),"."),(0,r.kt)("li",{parentName:"ul"},"geo, statistics")),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"By default, SQRL supports ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"offset"),' arguments to paginate through large result sets. While simple, this approach has the downside that you may see duplicate records or miss records when navigating between pages as the underlying data - and hence offsets - change. Another downside is that you won\'t know if there is a "next page" until you run out of results.'),(0,r.kt)("p",null,"To remedy these downsides, SQRL also supports cursor style navigation. When you configure cursor style navigation (WHERE EXACTLY??), results are returned in pages with extra page information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    products(pageSize: 20, pageState: "") {\n        items {\n            name\n        }\n        pageInfo {\n            hasNextPage\n            nextPageState\n        }\n    } \n}\n')),(0,r.kt)("p",null,"We added the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize")," argument to tell the API that we wish to page through the data with 20 rows per page. The empty ",(0,r.kt)("inlineCode",{parentName:"p"},"pageState")," argument tells the API to return the first page. You can also omit that argument to retrieve the first page. \\\nHowever, to access subsequent pages, we pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"nextPageState")," value that was returned on the previous request. The ",(0,r.kt)("inlineCode",{parentName:"p"},"hasNextPage")," field is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if there is a subsequent page."),(0,r.kt)("h2",{id:"hidden-fields-and-utility-functions"},"Hidden Fields and Utility Functions"),(0,r.kt)("p",null,"DataSQRL automatically adds a few hidden columns to all records from imported data source tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"_uuid"),": A unique identifier for the record assigned by the DataSQRL server on ingest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"_ingest_time"),": A timestamp that marks the time when the record was ingested by DataSQRL server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"_source_time"),": The timestamp attached to the record by the data source. This timestamp is only available if the data source supports it and null otherwise.")),(0,r.kt)("p",null,"The unique identifier is useful to distinguish records and track data lineage."),(0,r.kt)("p",null,"The timestamps are often used when we transform a change-record event table into an entity table as discussed in ",(0,r.kt)("a",{parentName:"p",href:"sqrl#event-entity%7D"},"the previous section")," on entity and event tables. For example, we used ",(0,r.kt)("inlineCode",{parentName:"p"},"_ingest_time")," in the entity table definition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products := DISTINCT Products ON id ORDER BY _ingest_time DESC;\n")),(0,r.kt)("p",null,"This statement defines ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," entity records as the last change event for each product id ordered by the time the events were ingested. We can also define ",(0,r.kt)("em",{parentName:"p"},"last")," in terms of the source time of an event record:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products := DISTINCT Products ON id ORDER BY _source_time DESC;\n")),(0,r.kt)("p",null,"In practice, the definitions lead to the same result unless records from the data source may arrive out of order when they are ingested by DataSQRL. In that case, it is better to use ",(0,r.kt)("inlineCode",{parentName:"p"},"_source_time")," if the data source supports it."),(0,r.kt)("p",null,"To assign unique ids and timestamps to the event tables we define via subscriptions, we can use the utility functions ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"now()")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," clause of the subscription:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"NewCustomerPromotion := SUBSCRIPTION ON ADD AS\nSELECT uuid() AS event_id, now() AS event_time, customerid, total_orders\nFROM Customers WHERE total_orders >= 100;\n")),(0,r.kt)("h2",{id:"script-evolution"},"Script Evolution"),(0,r.kt)("p",null,"You've successfully submitted your SQRL script to production and the data service is running nicely. The PM is super excited by the Customer 360 functionality and after talking to some customers wants to break customer spending down by week instead of by month."),(0,r.kt)("p",null,"Easy enough for us. We replace ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers.spending_by_month")," with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.spending_by_week :=\n         SELECT function.time.truncateToWeek(date) AS week,\n                sum(total) AS total_spend,\n                sum(discount) AS total_savings\n         FROM _.purchases\n         GROUP BY week ORDER BY week DESC;\n")),(0,r.kt)("p",null,"We also update the queries, integrate it with the Customer 360 application, and run all our tests. We are ready to go to production. But if we submit this updated script, it would replace the existing data service API with an incompatible change which would break the currently running Customer 360 application that depends on the old API. Changing the data service and application at the same time is too cumbersome and could potentially result in some downtime."),(0,r.kt)("p",null,"Instead, we are going to submit our updated script as a new version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl submit customer360.sqrl -v v2 -q ./queries -s pre-schema.yml -r config.json\n")),(0,r.kt)("p",null,"This is the same ",(0,r.kt)("inlineCode",{parentName:"p"},"submit")," command we used before with an additional argument ",(0,r.kt)("inlineCode",{parentName:"p"},"-v v2")," which instructs DataSQRL to deploy the newly generated API as version ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," and keep the old script running under API version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1"),". Note, that DataSQRL uses the version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," by default when you don't specify a version."),(0,r.kt)("p",null,"Now, we can carefully migrate the Customer 360 React application to the new API version ",(0,r.kt)("inlineCode",{parentName:"p"},"v2"),". Once that migration is complete and everything is running smoothly, we can remove the old version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl remove customer360.sqrl -v v1\n")),(0,r.kt)("p",null,"Versioning is your friend as you evolve your data service and change things up. At some point, you may find that your SQRL script is getting too long and your API to overloaded. For instance, we may eventually split the Customer 360 API from the recommendation engine so we can develop those two components as separate services. \\\nYou can trim down the ",(0,r.kt)("inlineCode",{parentName:"p"},"customer360.sqrl")," script and move the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers.past_purchases")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers.products_by_protein")," to a new ",(0,r.kt)("inlineCode",{parentName:"p"},"recommendation.sqrl")," script. Make sure you also copy or move all the column, table, and import statements those tables depend on. \\\nNow, you can submit a new version of the customer 360 script and also deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"recommendation.sqrl")," script as a separate data service."),(0,r.kt)("h2",{id:"hints"},"Hints and Optimization"),(0,r.kt)("p",null,"You can control how DataSQRL executes your scripts by providing annotation hints."),(0,r.kt)("p",null,"Before we talk about those hints, let's take a short detour to discuss how DataSQRL executes SQRL scripts. DataSQRL is a combination of a stream processing engine and a database. The stream processing engine ingests data from the connected sources, validates it, and updates the tables defined in the SQRL script that are affected by the new data record. Table records are eventually written to the database where they can be queried by the API to answer API requests."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(insert schematic diagram visualizing it)")),(0,r.kt)("p",null,"When DataSQRL converts an SQRL script to an execution plan, the optimizer determines which tables and columns should be incrementally computed by the stream processing engine when new data arrives or computed upon request inside the database for each API query. This decision has important implications for the performance and cost of the data service."),(0,r.kt)("p",null,"For example, the column ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers._recent_avg_protein")," from our ",(0,r.kt)("inlineCode",{parentName:"p"},"customer360.sqrl")," script would be very expensive to compute at query time when we request product recommendations from the API because it requires a multi-way ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," starting from all orders that a customer placed in the last 6 month. If we computed this at query time, the database would have to fetch a lot of data which takes time and is costly. It is much cheaper to incrementally update this column value whenever the customer places a new order and store the result in the database so it is instantly available at query time. \\\nOn the other hand, incrementally computing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers.products_by_protein")," table when data changes would be very expensive since the ordering changes anytime the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers._recent_avg_protein")," changes with a new order for that customer. Since we only have a couple hundred product records that don't change very often, it is much more efficient to compute ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers.products_by_protein")," at query time."),(0,r.kt)("p",null,"DataSQRL collects statistics on the source data and analyzes your script to make the optimal decision on whether to incrementally compute a particular table and column or compute it at query time. However, sometimes the optimizer gets it wrong. When that happens, you can provide a hint to DataSQRL to dictate that decision to the optimizer."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please send us example SQRL scripts where the optimizer makes the wrong decision and produces suboptimal results. We are actively working on improving the optimizer and your input is super valuable to us."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"-- @optimizer(materialize=true)\nCustomers._recent_avg_protein :=\n        SELECT SUM(e.quantity * p.weight_in_gram * n.protein)/SUM(e.quantity * p.weight_in_gram)\n        FROM _.purchases.items e JOIN e.product p JOIN p.nutrition n\n        WHERE e.parent.date > now() - INTERVAL 6 MONTH;\n\n-- @api(paginate=true)\n-- @optimizer(materialize=false)\nCustomers.products_by_protein :=\n        SELECT p.id AS productid, ABS(p.nutrition.protein-_._recent_avg_protein) AS protein_difference FROM Products p\n        ORDER BY protein_difference ASC LIMIT 20;\nCustomers.products_by_protein.product := JOIN Products ON Products.id = _productid LIMIT 1;\n")),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"@optimizer")," annotation we can pass hints to the optimizer. The boolean flag ",(0,r.kt)("inlineCode",{parentName:"p"},"materialize")," tells the optimizer whether to incrementally update a table with changing data - i.e. to materialize a table as database folks would say - or to compute the table results at query time with each API request."),(0,r.kt)("p",null,"Learn more about the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operations/optimizer"},"DataSQRL optimizer")," and how to provide hints to control the execution plan that it generates for your SQRL script. You can also learn more about the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/architecture/overview"},"architecture of DataSQRL")," to dive deep into the internals of the system."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Congratulations, you not only finished the extended tutorial but also completed the extra credit. What a champ! You are definitely ready to get started with DataSQRL."),(0,r.kt)("p",null,"For additional information, you can consult the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/overview"},"reference documentation")," which covers all the details and then some. \\\nIf you are running into a problem or wonder how to solve a particular issue in DataSQRL, take a look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/overview"},"the how-to guides")," which provide solutions for common questions. \\\nIf neither of those resources address your problem, reach out to the community for help. We'd love to hear about your problem and support you as best we can."),(0,r.kt)("p",null,"Want to learn more about the internals of DataSQRL or contribute to the codebase? The ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/overview"},"developer documentation")," provides a detailed breakdown of the DataSQRL architecture and everything you need to know to extend DataSQRL yourself."))}m.isMDXComponent=!0}}]);