"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||s;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={title:"Stream Table"},o="Stream Table",i={unversionedId:"reference/sqrl/stream",id:"reference/sqrl/stream",title:"Stream Table",description:"Stream tables contain immutable rows of data that have a timestamp. All tables imported from data sources are stream tables and stream tables can be exported to data sinks.",source:"@site/docs/reference/sqrl/stream.md",sourceDirName:"reference/sqrl",slug:"/reference/sqrl/stream",permalink:"/docs/reference/sqrl/stream",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/sqrl/stream.md",tags:[],version:"current",frontMatter:{title:"Stream Table"},sidebar:"docs",previous:{title:"Relationship",permalink:"/docs/reference/sqrl/relationship"},next:{title:"Time",permalink:"/docs/reference/sqrl/time"}},l={},d=[{value:"Convert Stream to State",id:"convert-stream-to-state",level:2},{value:"Deduplication",id:"deduplication",level:3},{value:"Aggregation",id:"aggregation",level:3},{value:"Convert State to Stream",id:"convert-state-to-stream",level:2},{value:"Queries",id:"queries",level:2},{value:"Time Window Aggregation",id:"aggregation",level:3},{value:"Recency Filters",id:"recency",level:3},{value:"Temporal Join",id:"temporal-join",level:3},{value:"Interval Join",id:"interval-join",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stream-table"},"Stream Table"),(0,n.kt)("p",null,"Stream tables contain immutable rows of data that have a timestamp. All tables ",(0,n.kt)("a",{parentName:"p",href:"import"},"imported")," from ",(0,n.kt)("a",{parentName:"p",href:"../sources/overview"},"data sources")," are stream tables and stream tables can be ",(0,n.kt)("a",{parentName:"p",href:"export"},"exported")," to ","[data sinks]","((../sources/overview)."),(0,n.kt)("p",null,"This documentation covers how to convert between stream and ",(0,n.kt)("a",{parentName:"p",href:"table#stateVsStream"},"state tables")," and documents the differences in query semantics for certain queries over stream tables."),(0,n.kt)("h2",{id:"convert-stream-to-state"},"Convert Stream to State"),(0,n.kt)("p",null,"Stream tables can be converted to state tables by deduplication or aggregation."),(0,n.kt)("h3",{id:"deduplication"},"Deduplication"),(0,n.kt)("p",null,"If a stream table represents a change stream of a state table, the state table can be defined with the ",(0,n.kt)("inlineCode",{parentName:"p"},"DISTINCT")," query."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"Products := DISTINCT Products ON id ORDER BY updated DESC;\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"DISTINCT")," query picks the most recent version - as defined by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause - from the stream for each unique key - as defined by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON")," clause.\nIn this example, we are defining the ",(0,n.kt)("inlineCode",{parentName:"p"},"Products")," state table based on the imported ",(0,n.kt)("inlineCode",{parentName:"p"},"Products")," change stream by selecting the most recent stream record based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"updated")," timestamp for each product ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,n.kt)("p",null,"Another way to deduplicate a stream table is to select a list of distinct columns."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"Users := SELECT DISTINCT customerid AS id FROM Orders;\n")),(0,n.kt)("p",null,"This statement defines the ",(0,n.kt)("inlineCode",{parentName:"p"},"Users")," state table as the set of all unique customer ids from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Orders")," stream table."),(0,n.kt)("h3",{id:"aggregation"},"Aggregation"),(0,n.kt)("p",null,"Aggregating over a stream table produces a state table."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"Users.total_spend := SELECT sum(i.total) AS spend,\n            sum(i.discount) AS saved\n      FROM @ JOIN Orders o ON o.customerid = @.id JOIN o.items i;\n")),(0,n.kt)("p",null,"This statement defines the nested ",(0,n.kt)("inlineCode",{parentName:"p"},"total_spend")," state table that aggregates the total spending and saving for each user across all their orders from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Orders")," state table."),(0,n.kt)("p",null,"An exception to this are ",(0,n.kt)("a",{parentName:"p",href:"#aggregation"},"time-window aggregations")," which preserve time and produce a stream table. "),(0,n.kt)("h2",{id:"convert-state-to-stream"},"Convert State to Stream"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"STREAM")," statements convert state tables to stream tables."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"UserPromotion := STREAM ON ADD AS\n  SELECT u.id, u.first_name, u.last_name, u.email, s.first_order, s.spend\n  FROM Users u JOIN u.order_stats s WHERE s.spend >= 100;\n")),(0,n.kt)("p",null,"This statement defines a new ",(0,n.kt)("inlineCode",{parentName:"p"},"UserPromotion")," stream table that contain a stream record for every record that gets added to state table defined by the ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT")," query. The query asks for all users who have spent more than $100 in aggregate. Whenever a user meets this threshold and gets added to the table, a stream record is produced in the ",(0,n.kt)("inlineCode",{parentName:"p"},"UserPromotion")," stream table."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"STREAM ON ADD"),": produces a stream record for every record that gets added to the state table defined by the ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT")," query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"STREAM ON UPDATE"),": produces a stream record every time a record in the state table defined by the ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT")," query is updated. This produces a change stream of the state table."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"STREAM ON DELETE"),": produces a stream record for every record that gets deleted from the state table defined by the ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT")," query.")),(0,n.kt)("h2",{id:"queries"},"Queries"),(0,n.kt)("p",null,"Queries over stream tables differ in semantics from standard SQL queries over state tables in the following cases:"),(0,n.kt)("h3",{id:"aggregation"},"Time Window Aggregation"),(0,n.kt)("p",null,"SQRL provides a number of time-preserving functions which aggregate timestamps into time windows. Time windows are a means to divide the ",(0,n.kt)("a",{parentName:"p",href:"time"},"timeline")," into discrete buckets and aggregate all stream records within each bucket to produce a new stream table that contains one row for each aggregate."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"Users.spending := SELECT endOfWeek(p.time) AS week,\n         sum(t.price) AS spend, sum(t.saving) AS saved\n      FROM @.purchases p JOIN p.totals t\n      GROUP BY week ORDER BY week DESC;\n")),(0,n.kt)("p",null,"This statement defines the nested ",(0,n.kt)("inlineCode",{parentName:"p"},"spending")," table that aggregates money spent and saved for all the orders that a user placed per week. ",(0,n.kt)("inlineCode",{parentName:"p"},"endOfWeek")," is a time window function that groups timestamps by week and returns the end of the week. The time window functions are contained in the ",(0,n.kt)("a",{parentName:"p",href:"functions/time"},"time package"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Users.spending")," is a stream table that contains one record per user per week for their spending totals."),(0,n.kt)("p",null,"Time window aggregations can be used to compute arbitrary roll-ups of stream data."),(0,n.kt)("p",null,"Learn more about how SQRL executes time windows on the ",(0,n.kt)("a",{parentName:"p",href:"time"},"timeline"),". "),(0,n.kt)("h3",{id:"recency"},"Recency Filters"),(0,n.kt)("p",null,"Stream tables can be filtered on recency which is useful when aggregating over a recent period of time."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"RecentTotal := SELECT sum(i.total) AS total, sum(i.quantity) AS quantity\n      FROM Orders o JOIN o.items i\n      WHERE o.time > now() - INTERVAL 7 DAY;\n")),(0,n.kt)("p",null,"This statement defines the ",(0,n.kt)("inlineCode",{parentName:"p"},"RecentTotal")," state table an aggregation over all orders that were placed in the last 7 days. Recency filters use the special function ",(0,n.kt)("inlineCode",{parentName:"p"},"now()")," to restrict the timestamp of stream records to a period specified by an interval."),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("inlineCode",{parentName:"p"},"now()")," and how SQRL processes ",(0,n.kt)("a",{parentName:"p",href:"time"},"time"),"."),(0,n.kt)("h3",{id:"temporal-join"},"Temporal Join"),(0,n.kt)("p",null,'SQRL supports temporal joins between stream and state tables when joining on the state table\'s key.\nA temporal join joins rows from the stream table with the version of the row in the state table at the time of the stream row. Temporal joins use the row from the state table at the timestamp of the stream row. This allows to join stream data with state data at the time when the stream record "happened". A temporal join produces a stream table.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"OrderCountry := SELECT o.time, u.country\n    FROM Orders o TEMPORAL JOIN Users u ON o.customerid = u.id;\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"OrderCountry")," stream is defined as a temporal join between the ",(0,n.kt)("inlineCode",{parentName:"p"},"Orders")," stream and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Users")," state table. It joins each order with the user who placed the record at the ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," of the order to retrieve the ",(0,n.kt)("inlineCode",{parentName:"p"},"country")," that the user was in at the time that the order was placed."),(0,n.kt)("p",null,"This is different from an inner join which joins each order record with the most current user record."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"OrderCountryInner := SELECT o.time, u.country\n     FROM Orders o INNER JOIN Users u ON o.customerid = u.id;\n")),(0,n.kt)("p",null,"This statement produces a state table that changes whenever users change country because each order is joined with the current version of its user row."),(0,n.kt)("p",null,"In most cases you want to use a temporal join when joining stream and state tables. SQRL uses temporal joins for all default joins between a stream and a state table on the state table's key."),(0,n.kt)("h3",{id:"interval-join"},"Interval Join"),(0,n.kt)("p",null,"SQRL supports interval joins when joining two stream tables and restricting the stream tables' timestamps with upper and lower bounds. Interval joins are joins that happen during an interval of time."))}c.isMDXComponent=!0}}]);