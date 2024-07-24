[//]: # (import Tabs from '@theme/Tabs';)

[//]: # (import TabItem from '@theme/TabItem';)

[//]: # ()
[//]: # (# SQRL Specification)

[//]: # (** SQRL is just a specification format for defining interative, decomposed sql**)

[//]: # ()
[//]: # (** Includes: create tables, imports, exports, relationships, queries, and distinct statements **)

[//]: # ()
[//]: # (** Does not include: datasqrl optimizations for streaming engines, or engines in general**)

[//]: # ()
[//]: # (** Datasqrl adds well-integrated engines incrementally, each engine has different features and can make use of SQRL in different ways. **)

[//]: # ()
[//]: # (** SQRL is agnostic to the underlying engine. It is up to the implemented optimizer to move computation around **)

[//]: # ()
[//]: # (**  **)

[//]: # ()
[//]: # (SQRL is an extension of SQL that adds support for data streaming to the standard database query language. SQRL stands for *"**S**tructured **Q**uery and **R**eaction **L**anguage"* because it extends SQL with support for streaming data and the ability to react to data in realtime. In addition, SQRL adds a number of convenience features that make it development-friendly.)

[//]: # ()
[//]: # (This documentation explains the features of SQRL and everything you need to know to build data products with SQRL.)

[//]: # ()
[//]: # (## SQRL Overview)

[//]: # ()
[//]: # (A full-featured SQRL script might look something like this:)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT data.SalesRecords;)

[//]: # (IMPORT data.StockAdjustments;)

[//]: # (IMPORT utils.ReorderLogic;)

[//]: # ()
[//]: # (// Consolidate sales and stock adjustments into a single stream)

[//]: # (InventoryStream := )

[//]: # (  SELECT * FROM SalesRecords )

[//]: # (  UNION ALL )

[//]: # (  SELECT * FROM StockAdjustments;)

[//]: # ()
[//]: # (// Group data by ProductID and automatically aggregate at the end of each minute)

[//]: # (MinuteInventory := )

[//]: # (  SELECT endOfMinute&#40;ts&#41; as min, ProductID, SUM&#40;Quantity&#41; as QTY)

[//]: # (  FROM InventoryStream)

[//]: # (  GROUP BY ProductID;)

[//]: # ()
[//]: # (// Calculate current stock and trigger restocking logic)

[//]: # (StockAnalysis := )

[//]: # (  SELECT ProductID, MinuteEnd, CurrentQuantity - QTY as CurrentStock,)

[//]: # (     ReorderLogic&#40;CurrentStock&#41; as RestockNeeded)

[//]: # (  FROM CurrentStock s)

[//]: # (  JOIN MinuteInventory i ON s.ProductID = i.ProductID;)

[//]: # ()
[//]: # (UniqueInventory := DISTINCT SalesRecords ON &#40;ProductID&#41;;)

[//]: # ()
[//]: # (// A function to query stock by product and time)

[//]: # (QueryProduct&#40;@ProductID: String&#41; := )

[//]: # (  SELECT * FROM UniqueInventory )

[//]: # (  WHERE ProductID = @ProductID;)

[//]: # ()
[//]: # (// Export processed data to an inventory management system)

[//]: # (EXPORT StockAnalysis TO externalSystem.inventoryManagementSystem;)

[//]: # (```)

[//]: # ()
[//]: # (We'll go through this step by step and explain each part.)

[//]: # ()
[//]: # (## Imports)

[//]: # (DataSQRL features a package loading system, similar to what you'd find in a conventional programming language. Dependencies can be redefined, upgraded, and resolved from a remote repository. )

[//]: # ()
[//]: # (Import statements allow **tables**, **functions**, or other **sqrl scripts** to be imported. Imports can be defined or created by file preprocessors, json configuration in local folders, or from our [remote repository]&#40;https://dev.datasqrl.com/&#41;. DataSQRL also defines a powerful dependency system so they can be swapped out for operating environments or to run DataSQRL test cases. Let's go through each type of import:)

[//]: # ()
[//]: # (# Import)

[//]: # ()
[//]: # (The `IMPORT` statements imports tables and functions into an SQRL script. Tables can either be imported from an external data source or another SQRL script.)

[//]: # ()
[//]: # (Tables and functions are imported from [packages]&#40;../../concepts/package&#41;. The import path is the name of the package followed by the name of a specific table or function to import or the asterisk character `*` to import all tables and functions from the package. Import paths use the dot character `.` to separate path components.)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT datasqrl.seedshop.Orders;)

[//]: # (IMPORT time.*;)

[//]: # (```)

[//]: # ()
[//]: # (The first statement imports a table named `Orders` from the package `datasqrl.seedshop`. The second imports all functions from the `time` package.)

[//]: # ()
[//]: # (## Package Resolution)

[//]: # ()
[//]: # (Packages are either part of the standard SQRL library, declared as a dependency, or stored in a local directory.)

[//]: # ()
[//]: # (### Locally)

[//]: # ()
[//]: # (Packages are looked up locally first. The package name path is converted to a directory path relative to the directory in which the DataSQRL [command]&#40;../../operations/command&#41; is invoked.)

[//]: # ()
[//]: # (A package with the name `my.data` is translated to the relative directory path `my/data` &#40;on Unix based systems&#41; or `my\data` &#40;on Windows&#41;.)

[//]: # ()
[//]: # (If this directory exists, imported tables and functions are located inside that directory.)

[//]: # ()
[//]: # (### Dependency)

[//]: # ()
[//]: # (Dependencies are declared in the [package configuration]&#40;/docs/reference/sqrl/datasqrl-spec/#packagejson#dependency&#41;. Dependencies can point to local package folders or be downloaded from a [repository]&#40;../../operations/repository&#41; at compile time.)

[//]: # ()
[//]: # (By default, DataSQRL looks up any missing packages in the [repository]&#40;https://dev.datasqrl.com&#41;. A package is missing if it is not declared as dependencies and cannot be resolved locally. If the missing package can be located in the repository, a dependency on the most recent version of that package is added to the package configuration.)

[//]: # ()
[//]: # (Take a look at the DataSQRL [repository]&#40;https://dev.datasqrl.com&#41; to find public packages you can import into your script. &#40;coming soon&#41;)

[//]: # ()
[//]: # (You can [publish]&#40;../../operations/repository&#41; your own packages to the repository, so they can be used as dependencies in your SQRL scripts.)

[//]: # ()
[//]: # (### Standard Library)

[//]: # ()
[//]: # (The SQRL standard library contains function packages that can be imported without any configuration. For example, `time` is a standard library function package that contains functions for manipulating timestamps. See the [list of function packages]&#40;/docs/category/functions&#41; for more information.)

[//]: # ()
[//]: # (## Changing Names)

[//]: # ()
[//]: # (To import a table or function under a different name, use `AS` directly after the import path:)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT datasqrl.seedshop.Orders AS MyOrders;)

[//]: # (IMPORT time.epochMilliToTimestamp AS epoch2TS; )

[//]: # (```)

[//]: # ()
[//]: # (This statement imports the same `Orders` table from the `datasqrl.seedshop` but makes it available under the name `MyOrders` in the script. Likewise, the `epochMilliToTimestamp` is imported under the name `epoch2TS`.)

[//]: # ()
[//]: # (You can change the name of imported tables and functions to resolve naming conflicts or choose names that are a better fit for your script.)

[//]: # ()
[//]: # (## Creating A Package)

[//]: # ()
[//]: # (To create a new package to import your own tables or functions into a SQRL script, read the following documentation:)

[//]: # ()
[//]: # (* [**Data Source Package**]&#40;../../sources/overview&#41;: to create a package that contains tables from an external data source)

[//]: # (* [**Function Package**]&#40;../functions/custom-functions&#41;: to create a package that contains custom function implementations)

[//]: # (* **SQRL Script** &#40;coming soon&#41;: to import tables defined in another SQRL script)

[//]: # ()
[//]: # (### Table Imports)

[//]: # (```sql)

[//]: # (IMPORT data.SalesRecords;)

[//]: # (```)

[//]: # (A table could be defined in a lot of different ways depending on you're starting out from. SQRL provides to categories of sources, either 'external' or 'engine' source. )

[//]: # (- External sources are sources you provide of systems that already exist &#40;or will soon to&#41;.)

[//]: # (- Engine sources are sources that DataSQRL can manage to automatically wire and configure. For example, creating kafka topics or postgres tables.)

[//]: # ()
[//]: # (**External Sources:**)

[//]: # (- **SQRL Configuration**: As a backdoor to SQRL, our own internal configuration is exposed. SQRL configuration require two files, a configuration json and a schema file. A '.table.json' file to define where the data is coming from, native engine configuration pass-through, and timestamp information. A schema file could be our flexible schema definition or other formats such as Avro.)

[//]: # (- **Flink SQL**: &#40;in development&#41; DataSQRL ships with a flink pre-processor that will convert a flink sql script into tables that SQRL can understand and use. This lets you bring existing Flink scripts, or take advantage of advanced functionality. )

[//]: # ()
[//]: # (**Engine Sources:**)

[//]: # (- **.jsonl file**: Json-line format files are supported as a quick path to working with SQRL. SQRL will automatically derive a schema and orchestrate jsonl files in docker environments. Just drop a jsonl file in a folder and import it like you would import any other table, without the jsonl extension, e.g. `IMPORT data.myjsonlfile;`.)

[//]: # (- **.graphqls file**: If using SQRL with the API layer enabled &#40;enabled by default&#41;, then GraphQL Mutations are converted into tables. This is all automatically wired with the log engine to provide the full data flow out of the box.)

[//]: # (- **CREATE TABLE statements**: &#40;in development&#41; SQRL also allows in-line create table statements. If working without the API layer, or wiring up a data source from an external system, SQRL supports defining a table directly in the sqrl script. A log engine must be enabled.)

[//]: # ()
[//]: # (Example CREATE TABLE statement &#40;in development&#41;:)

[//]: # (```sql)

[//]: # (CREATE TABLE SensorReading&#40;)

[//]: # (  sensorid bigint not null primary key, )

[//]: # (  temperature double not null)

[//]: # (&#41;;)

[//]: # (``` )

[//]: # ()
[//]: # (### Function Imports)

[//]: # (```sql)

[//]: # (IMPORT utils.ReorderLogic;)

[//]: # (```)

[//]: # ()
[//]: # (Custom functions can be defined in SQRL, you can make use of our repository, or use our built-in system functions. Functions in sqrl are more powerful than standard sql functions, they not only allow defining how a stream engine should execute the function, but they can also be mapped to different native functions in database engines, or executed server-side at query time. This allows SQRL to optimize queries to operate performantly on a wide range of use cases, and even allows more exotic use cases such as integrating vector search, ai chat bots, and more.)

[//]: # ()
[//]: # (Functions in SQRL can come from either Java or Python. If using the Flink stream engine, native flink functions can be used without modification. Check out our [UDF guide]&#40;../udf&#41; for more information on how to define UDFs.)

[//]: # ()
[//]: # (### Script imports)

[//]: # (```sql)

[//]: # (IMPORT myScript.*;)

[//]: # (```)

[//]: # (&#40;in development&#41; SQRL supports importing other SQRL scripts. This lets you decompose your data-pipeline in any way that feels natural to you. Importing a sqrl script is like importing other packages. Script imports will also isolate functions definitions to prevent conflict with new import statements.)

[//]: # ()
[//]: # (## Unions)

[//]: # (```sql)

[//]: # (InventoryStream := )

[//]: # (  SELECT * FROM SalesRecords )

[//]: # (  UNION ALL )

[//]: # (  SELECT * FROM StockAdjustments;)

[//]: # (```)

[//]: # ()
[//]: # (SQRL supports union statements on two streams or two state tables. The column names must match. SQRL does not support UNION DISTINCT or unions between a stream and a state table.)

[//]: # ()
[//]: # (## Stream Table)

[//]: # (```sql)

[//]: # (MinuteInventory := )

[//]: # (  SELECT endOfMinute&#40;ts&#41; as min, ProductID, SUM&#40;Quantity&#41; as QTY)

[//]: # (  FROM InventoryStream)

[//]: # (  GROUP BY ProductID;)

[//]: # (```)

[//]: # (:::important IMPORTANT)

[//]: # (One of SQRLs key innovations is providing first class support between **stream** and **state** tables. Understanding how SQRL queries produce these types of tables is important to writing correct and scalable SQRL scripts. SQRL has many guardrails, but we don't stop you from expressing what you need to do your usecase.)

[//]: # (:::)

[//]: # ()
[//]: # (Most tables that you import will start off as 'stream' tables. A stream table is simply a stream of events that have a timestamp column that is incremental or nearly incremental in a small time-window. It is most efficient to try to keep tables as Streams.)

[//]: # ()
[//]: # (A small example that highlights different types of aggregations you may encounter in a stream environment, consider briefly a nutrition tracking app. Let's say people can incrementally put in their food consumption in a chat-bot and we use an LLM to estimate their totals. We will want to know:)

[//]: # (1. Calories for the entire day: Use a **tumble window** so when the day 'closes' then it can be written out to a database and we can create a history of consumption.)

[//]: # (2. Calories that have been added for a meal: Use a **session window** to determine how many calories for that meal. The results would get written when the session closes.)

[//]: # (3. How many calories they've consumed so far: Use a **cumulative window** to incrementally total each new addition.)

[//]: # ()
[//]: # (### Non-aggregating tables)

[//]: # ()
[//]: # (Tables that select from a stream table that do not have a group by or aggregate function will remain a stream table.)

[//]: # (```sql)

[//]: # (InventoryStream := SELECT *, myFnc&#40;&#41; AS fnc FROM InventoryStream;)

[//]: # (```)

[//]: # ()
[//]: # (### Tumble Windows)

[//]: # (SQRL provides some convenience features for working with time-windows on streams. Tumble windows are currently the most supported window function.)

[//]: # ()
[//]: # (Let's take a look at some SQRL statements and how they translate to Flink. Read more about Tumble Windows in the [Flink Tumble Window documentation]&#40;https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/queries/window-tvf/#tumble&#41;)

[//]: # ()
[//]: # (<Tabs>)

[//]: # (<TabItem value="SQRL" default>)

[//]: # ()
[//]: # (```sql)

[//]: # (MinuteInventory := )

[//]: # (  SELECT endOfMinute&#40;ts&#41; as min, ProductID, SUM&#40;Quantity&#41; as QTY)

[//]: # (  FROM InventoryStream)

[//]: # (  GROUP BY ProductID;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (<TabItem value="=> Flink">)

[//]: # ()
[//]: # (```sql)

[//]: # (CREATE VIEW MinuteInventory AS)

[//]: # (SELECT)

[//]: # (    ProductID,)

[//]: # (    SUM&#40;Quantity&#41; AS QTY,)

[//]: # (    window_time AS min)

[//]: # (FROM TABLE&#40;TUMBLE&#40;TABLE InventoryStream, DESCRIPTOR&#40;ts&#41;, INTERVAL '1' MINUTE&#41;&#41;)

[//]: # (GROUP BY)

[//]: # (    ProductID,)

[//]: # (    window_start,)

[//]: # (    window_end,)

[//]: # (    window_time;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (</Tabs>)

[//]: # ()
[//]: # (Tumble windows are also created when aggregating a nested table:)

[//]: # ()
[//]: # (<Tabs>)

[//]: # (<TabItem value="SQRL" default>)

[//]: # ()
[//]: # (```sql)

[//]: # (Orders.total := )

[//]: # (  SELECT )

[//]: # (    SUM&#40;e.quantity * e.unit_price - e.discount&#41; as price, )

[//]: # (    COUNT&#40;e.quantity&#41; as num, )

[//]: # (    SUM&#40;e.discount&#41; as discount )

[//]: # (  FROM @.entries e;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (<TabItem value="=> Flink">)

[//]: # ()
[//]: # (```sql)

[//]: # (CREATE VIEW `Orders.total` AS)

[//]: # (SELECT )

[//]: # (  _uuid AS _uuid, )

[//]: # (  SUM&#40;quantity * unit_price - discount&#41; AS price, )

[//]: # (  COUNT&#40;*&#41; AS num, )

[//]: # (  SUM&#40;discount&#41; AS discount, )

[//]: # (  window_time AS _ingest_time)

[//]: # (FROM TABLE&#40;)

[//]: # (  TUMBLE&#40;&#40;TABLE `Orders.entries`&#41;, &#40;DESCRIPTOR&#40;_ingest_time&#41;&#41;, INTERVAL '0.001' SECOND&#40;1&#41;&#41;&#41; AS t2)

[//]: # (GROUP BY _uuid, window_start, window_end, window_time;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (</Tabs>)

[//]: # ()
[//]: # ()
[//]: # (### HOP Windows)

[//]: # (Hop windows are created when aggregating on a now filter. Read more about How Windows in the [Flink Tumble Hop documentation]&#40;https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/queries/window-tvf/#hop&#41;)

[//]: # ()
[//]: # (<Tabs>)

[//]: # (<TabItem value="SQRL" default>)

[//]: # ()
[//]: # (```sql)

[//]: # (RecentOrders := )

[//]: # (  SELECT o.customerid as customer, COUNT&#40;o.id&#41; as order_count )

[//]: # (  FROM Orders o)

[//]: # (  WHERE &#40;o.time > NOW&#40;&#41; - INTERVAL 8 DAY&#41;)

[//]: # (  GROUP BY customer;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (<TabItem value="=> Flink">)

[//]: # ()
[//]: # (```sql)

[//]: # (CREATE VIEW RecentOrders AS)

[//]: # (SELECT )

[//]: # (  customer,)

[//]: # (  COUNT&#40;*&#41; AS order_count, )

[//]: # (  window_time AS _time)

[//]: # (FROM TABLE&#40;)

[//]: # (  HOP&#40;&#40;TABLE Orders&#41;, &#40;DESCRIPTOR&#40;time&#41;&#41;, INTERVAL '13824' SECOND&#40;8&#41;, INTERVAL '8' DAY&#41;&#41;)

[//]: # (GROUP BY customer, window_start, window_end, window_time;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (</Tabs>)

[//]: # ()
[//]: # (### Cumulative Window)

[//]: # (&#40;in development&#41; Read more about Tumble Windows in the [Flink Cumulative Window documentation]&#40;https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/queries/window-tvf/#cumulate&#41;)

[//]: # ()
[//]: # (<Tabs>)

[//]: # (<TabItem value="SQRL" default>)

[//]: # ()
[//]: # (```sql)

[//]: # (MinuteInventory := )

[//]: # (  SELECT endOfDay&#40;ts&#41; as day, ProductID, SUM&#40;Quantity&#41; as QTY)

[//]: # (  FROM InventoryStream)

[//]: # (  GROUP BY ProductID)

[//]: # (  WHERE endOfDay&#40;ts&#41; = endOfDay&#40;now&#40;&#41;&#41;;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (<TabItem value="=> Flink">)

[//]: # ()
[//]: # (```sql)

[//]: # (CREATE VIEW MinuteInventory AS)

[//]: # (SELECT)

[//]: # (    ProductID,)

[//]: # (    SUM&#40;Quantity&#41; AS QTY,)

[//]: # (    window_time AS day)

[//]: # (FROM TABLE&#40;CUMULATE&#40;TABLE InventoryStream, DESCRIPTOR&#40;ts&#41;, INTERVAL '1' DAY, INTERVAL '0.001' SECOND&#41;&#41;)

[//]: # (GROUP BY)

[//]: # (    ProductID,)

[//]: # (    window_start,)

[//]: # (    window_end,)

[//]: # (    window_time;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (</Tabs>)

[//]: # ()
[//]: # (### Session Windows)

[//]: # (&#40;in development&#41; Read more about Session Windows in the [Flink Tumble Session documentation]&#40;https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/queries/window-tvf/#session&#41;)

[//]: # ()
[//]: # (<Tabs>)

[//]: # (<TabItem value="SQRL" default>)

[//]: # ()
[//]: # (```sql)

[//]: # (MinuteInventory := )

[//]: # (  SELECT endOfSession&#40;ts, 300&#41; as sec, ProductID, SUM&#40;Quantity&#41; as QTY)

[//]: # (  FROM InventoryStream)

[//]: # (  GROUP BY ProductID;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (<TabItem value="=> Flink">)

[//]: # ()
[//]: # (```sql)

[//]: # (CREATE VIEW MinuteInventory AS)

[//]: # (SELECT)

[//]: # (    ProductID,)

[//]: # (    SUM&#40;Quantity&#41; AS QTY,)

[//]: # (    window_time AS sec)

[//]: # (FROM TABLE&#40;SESSION&#40;TABLE InventoryStream, DESCRIPTOR&#40;ts&#41;, INTERVAL '300' SECOND&#41;&#41;)

[//]: # (GROUP BY)

[//]: # (    ProductID,)

[//]: # (    window_start,)

[//]: # (    window_end,)

[//]: # (    window_time;)

[//]: # (```)

[//]: # (</TabItem>)

[//]: # (</Tabs>)

[//]: # ()
[//]: # (## State Tables)

[//]: # (State tables are all other aggregating tables. State tables are most efficient when pushed into the database engine, but can also very useful in the stream engine, for example when needing to join a stream table on a state table. State tables in the stream engine must be handled with care as their state in some stream engines can grow without bounds. In cases like Flink, time-to-live hints can be added so state can be dropped over time &#40;in development&#41;. )

[//]: # ()
[//]: # (For example, the following will create a )

[//]: # ()
[//]: # (# SQRL Table)

[//]: # ()
[//]: # (The "table" is the central concept of SQRL. A table defines a set or stream of data. Every data record in SQRL is a row in a table. A table is defined by a list of columns which have unique column names.)

[//]: # ()
[//]: # (A SQRL script defines a sequence of tables.)

[//]: # ()
[//]: # (---)

[//]: # (title: "Stream Table")

[//]: # (---)

[//]: # ()
[//]: # (# Stream Table)

[//]: # ()
[//]: # (Stream tables contain immutable rows of data that have a timestamp. They are append-only tables to represent logs and streams of data.)

[//]: # ()
[//]: # (This documentation covers how to convert between stream and [state tables]&#40;../table#stateVsStream&#41; and documents the differences in query semantics for certain queries over stream tables.)

[//]: # ()
[//]: # (## Convert Stream to State)

[//]: # ()
[//]: # (Stream tables can be converted to state tables by deduplication or aggregation.)

[//]: # ()
[//]: # (### Deduplication)

[//]: # ()
[//]: # (If a stream table represents a change stream of a state table, the state table can be defined with the `DISTINCT` query.)

[//]: # ()
[//]: # (```sql)

[//]: # (Products := DISTINCT Products ON id ORDER BY updated DESC;)

[//]: # (```)

[//]: # (The `DISTINCT` query picks the most recent version - as defined by the `ORDER BY` clause - from the stream for each unique key - as defined by the `ON` clause.)

[//]: # (In this example, we are defining the `Products` state table based on the imported `Products` change stream by selecting the most recent stream record based on the `updated` timestamp for each product `id`.)

[//]: # ()
[//]: # (Another way to deduplicate a stream table is to select a list of distinct columns.)

[//]: # (```sql)

[//]: # (Users := SELECT DISTINCT customerid AS id FROM Orders;)

[//]: # (```)

[//]: # (This statement defines the `Users` state table as the set of all unique customer ids from the `Orders` stream table.)

[//]: # ()
[//]: # (### Aggregation)

[//]: # ()
[//]: # (Aggregating over a stream table produces a state table.)

[//]: # ()
[//]: # (```sql)

[//]: # (Users.total_spend := SELECT sum&#40;i.total&#41; AS spend,)

[//]: # (            sum&#40;i.discount&#41; AS saved)

[//]: # (      FROM @ JOIN Orders o ON o.customerid = @.id JOIN o.items i;)

[//]: # (```)

[//]: # (This statement defines the nested `total_spend` state table that aggregates the total spending and saving for each user across all their orders from the `Orders` state table.)

[//]: # ()
[//]: # (An exception to this are [time-window aggregations]&#40;#aggregation&#41; which preserve time and produce a stream table.)

[//]: # ()
[//]: # (<!--)

[//]: # (## Convert State to Stream)

[//]: # ()
[//]: # (`STREAM` statements convert state tables to stream tables.)

[//]: # ()
[//]: # (```sql)

[//]: # (UserPromotion := STREAM ON ADD AS)

[//]: # (  SELECT u.id, u.first_name, u.last_name, u.email, s.spend)

[//]: # (  FROM Users u JOIN u.order_stats s WHERE s.spend >= 100;)

[//]: # (```)

[//]: # (This statement defines a new `UserPromotion` stream table that contain a stream record for every record that gets added to state table defined by the `SELECT` query. The query asks for all users who have spent more than $100 in aggregate. Whenever a user meets this threshold and gets added to the table, a stream record is produced in the `UserPromotion` stream table.)

[//]: # ()
[//]: # (* `STREAM ON ADD`: produces a stream record for every record that gets added to the state table defined by the `SELECT` query.)

[//]: # (* `STREAM ON UPDATE`: produces a stream record every time a record in the state table defined by the `SELECT` query is updated. This produces a change stream of the state table.)

[//]: # (* `STREAM ON DELETE`: produces a stream record for every record that gets deleted from the state table defined by the `SELECT` query.)

[//]: # ()
[//]: # (-->)

[//]: # ()
[//]: # (## Queries)

[//]: # ()
[//]: # (Queries over stream tables differ in semantics from standard SQL queries over state tables in the following cases:)

[//]: # ()
[//]: # (### Time Window Aggregation {#aggregation})

[//]: # ()
[//]: # (SQRL provides a number of time-preserving functions which aggregate timestamps into time windows. Time windows are a means to divide the [timeline]&#40;../time&#41; into discrete buckets and aggregate all stream records within each bucket to produce a new stream table that contains one row for each aggregate.)

[//]: # ()
[//]: # (```sql)

[//]: # (Users.spending := SELECT endOfWeek&#40;p.time&#41; AS week,)

[//]: # (         sum&#40;t.price&#41; AS spend, sum&#40;t.saving&#41; AS saved)

[//]: # (      FROM @.purchases p JOIN p.totals t)

[//]: # (      GROUP BY week ORDER BY week DESC;)

[//]: # (```)

[//]: # (This statement defines the nested `spending` table that aggregates money spent and saved for all the orders that a user placed per week. `endOfWeek` is a time window function that groups timestamps by week and returns the end of the week. The time window functions are contained in the [time package]&#40;../functions/time&#41;.)

[//]: # ()
[//]: # (`Users.spending` is a stream table that contains one record per user per week for their spending totals.)

[//]: # ()
[//]: # (Time window aggregations can be used to compute arbitrary roll-ups of stream data.)

[//]: # ()
[//]: # (Learn more about how SQRL executes time windows on the [timeline]&#40;../time&#41;.)

[//]: # ()
[//]: # (### Recency Filters {#recency})

[//]: # ()
[//]: # (Stream tables can be filtered on recency which is useful when aggregating over a recent period of time.)

[//]: # ()
[//]: # (```sql)

[//]: # (RecentTotal := SELECT sum&#40;i.total&#41; AS total, sum&#40;i.quantity&#41; AS quantity)

[//]: # (      FROM Orders o JOIN o.items i)

[//]: # (      WHERE o.time > now&#40;&#41; - INTERVAL 7 DAY;)

[//]: # (```)

[//]: # (This statement defines the `RecentTotal` state table an aggregation over all orders that were placed in the last 7 days. Recency filters use the special function `now&#40;&#41;` to restrict the timestamp of stream records to a period specified by an interval.)

[//]: # ()
[//]: # (Learn more about `now&#40;&#41;` and how SQRL processes [time]&#40;../time&#41;.)

[//]: # ()
[//]: # (### Temporal Join)

[//]: # ()
[//]: # (SQRL supports temporal joins between stream and state tables when joining on the state table's key.)

[//]: # (A temporal join joins rows from the stream table with the version of the row in the state table at the time of the stream row. Temporal joins use the row from the state table at the timestamp of the stream row. This allows to join stream data with state data at the time when the stream record "happened". A temporal join produces a stream table.)

[//]: # ()
[//]: # (```sql)

[//]: # (OrderCountry := SELECT o.time, u.country)

[//]: # (    FROM Orders o TEMPORAL JOIN Users u ON o.customerid = u.id;)

[//]: # (```)

[//]: # (The `OrderCountry` stream is defined as a temporal join between the `Orders` stream and the `Users` state table. It joins each order with the user who placed the record at the `time` of the order to retrieve the `country` that the user was in at the time that the order was placed.)

[//]: # ()
[//]: # (This is different from an inner join which joins each order record with the most current user record.)

[//]: # (```sql)

[//]: # (OrderCountryInner := SELECT o.time, u.country)

[//]: # (     FROM Orders o INNER JOIN Users u ON o.customerid = u.id;)

[//]: # (```)

[//]: # (This statement produces a state table that changes whenever users change country because each order is joined with the current version of its user row.)

[//]: # ()
[//]: # (In most cases you want to use a temporal join when joining stream and state tables. SQRL uses temporal joins for all default joins between a stream and a state table on the state table's key.)

[//]: # ()
[//]: # (### Interval Join)

[//]: # (Interval joins are another technique for joining two stream tables. These joins are defined by specifying upper and lower time bounds, making them ideal for situations where the relationship between data points is time-sensitive. This type of join is essential for analyses that depend on the temporal correlation between events in different streams.)

[//]: # ()
[//]: # (For example, this statement defines the CustomerActivity stream table that joins Logins and Transactions streams based on the account id. The INTERVAL JOIN condition specifies that a transaction must occur within 1 hour after a login to be included in the join. This effectively correlates logins with transactions that happen shortly after, capturing a critical timeframe for activity analysis.)

[//]: # ()
[//]: # (```sql)

[//]: # (CustomerActivity := SELECT l.login_time, t.transaction_time, t.amount)

[//]: # (    FROM Logins l INTERVAL JOIN Transactions t )

[//]: # (    ON l.account_id = t.account_id )

[//]: # (    AND t.transaction_time BETWEEN l.login_time AND l.login_time + INTERVAL '1' HOUR;)

[//]: # (```)

[//]: # ()
[//]: # (## Table Definitions {#definition})

[//]: # ()
[//]: # (A table is defined via [import]&#40;../import&#41; statement at the beginning of a SQRL script or via a SQL query.)

[//]: # ()
[//]: # (:::info)

[//]: # (This documentation assumes that you are familiar with SQL and know how to write a `SELECT .. FROM .. WHERE .. GROUP BY` query. If you want to refresh your SQL knowledge, take a look at the [SQL primer]&#40;../sql-primer&#41;.)

[//]: # (:::)

[//]: # ()
[//]: # (Use the assignment operator `:=` to define the table on the left-hand of the assignment by the SQL query on the right-hand side.)

[//]: # ()
[//]: # (```sql)

[//]: # (Users := SELECT DISTINCT customerid AS id FROM Orders;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines the table `Users` by the SQL query that selects all distinct `customerid` from the `Orders` table.)

[//]: # (SQRL tables are usually defined by SQL queries over previously defined tables as in this example. You can use standard SQL syntax for the table queries.)

[//]: # ()
[//]: # (For the SQL nerds: SQRL tables are view definitions with a more developer-friendly syntax.)

[//]: # ()
[//]: # (Tables can also be defined incrementally by adding column definitions to existing tables:)

[//]: # (```sql)

[//]: # (Products.weight_in_oz := weight_in_gram / 28.35;)

[//]: # (```)

[//]: # (This statement adds a new column `weight_in_oz` to the existing `Products` table which converts the product weight to ounces.)

[//]: # ()
[//]: # (## Nested Tables {#nested})

[//]: # ()
[//]: # (SQRL supports nested tables through table paths to represent nested or hierarchical data. The `Orders` data stream from the [Customer 360 tutorial]&#40;../../../getting-started/tutorials/customer360/intro&#41; has nested `items` for each item in an order. Such nested data maps onto nested tables in SQRL. `Orders.items` is the table path that accesses the nested `items` data for the `Orders` example.)

[//]: # ()
[//]: # (Nested tables are useful to structure your data according to your domain model. They represent parent-child relationships and simplify aggregations by parent rows.)

[//]: # ()
[//]: # (### Localized Queries {#localized})

[//]: # ()
[//]: # (When querying nested tables we need to be mindful to query the nested table at the right scope. We can query a nested table globally, i.e. over all rows in the table, or locally, i.e. only the rows associated with a given parent row.)

[//]: # ()
[//]: # (```sql)

[//]: # (Order_totals := SELECT sum&#40;total&#41; as price, )

[//]: # (    sum&#40;coalesce&#40;discount,0.0&#41;&#41; as saving FROM Orders.items;)

[//]: # (```)

[//]: # (The `Orders_totals` table contains a single aggregate that sums up the total and discount over **all** items in **all** orders. The result is one global aggregation over all order items.)

[//]: # ()
[//]: # (```sql)

[//]: # (Orders.totals := SELECT sum&#40;total&#41; as price, )

[//]: # (    sum&#40;coalesce&#40;discount,0.0&#41;&#41; as saving FROM @.items;)

[//]: # (```)

[//]: # (This statement, on the other hand, aggregates **all** items **for each** order. The result is one local aggregate for each row in the `Orders` table.)

[//]: # ()
[//]: # (The difference between the two statements is in the `FROM` clause. The first statement references the `Orders.items` table globally. The second statement references the `Orders.items` table locally by accessing the `items` relationship column on `Orders`.)

[//]: # ()
[//]: # (The second statement is a **localized query** because it defines a new nested table `totals` under the `Orders` table on the left-hand side of the statement. That means the query on the right-hand side of the statement is interpreted in the context of *each* row in the parent table. The at-sign `@` is used to refer to the parent row in a localized query. Hence, `@.items` means "all items that are associated with the current order record through the `items` relationship".)

[//]: # ()
[//]: # (Nested table definitions can query arbitrary tables. The only difference to non-nested tables is that the query is interpreted in the local context of the parent table.)

[//]: # (```sql)

[//]: # (Users.order_stats := SELECT max&#40;o.time&#41; as most_recent, count&#40;1&#41; as num)

[//]: # (      FROM @ JOIN Orders o ON o.customerid = @.id;)

[//]: # (```)

[//]: # (This statement defines the nested table `order_stats` underneath `Users` as an aggregation for a users most recent and total number of orders. In this example, we are explicitly selecting from `@` to reference the parent row in this localized query. `FROM @ JOIN Orders o ON o.customerid = @.id` means "select the current parent row and join with all orders where the `customerid` is equal to the `id` of the parent row".)

[//]: # ()
[//]: # (For the SQL nerds: Nested table definitions are a convenient way to express `GROUP BY` and `WINDOW` queries by grouping on the rows in the parent table.)

[//]: # ()
[//]: # (## State vs Stream Tables {#stateVsStream})

[//]: # ()
[//]: # (SQRL distinguishes between *state* and *stream* tables. State tables hold records that change over time as records are modified. Stream tables hold immutable records that have a timestamp and are naturally ordered in time.)

[//]: # ()
[//]: # (State tables have the standard set semantics of SQL. A row in a state table is uniquely identified by a key &#40;i.e. one or multiple key columns&#41; and the column values of that row can change over time as the record is modified. Rows in state tables represent entities, objects, or anything that can be identified independent of time. You define and treat state tables as "normal" SQL tables.)

[//]: # ()
[//]: # (Stream tables contain immutable rows of data that map onto a timeline. Rows in stream tables represent events or things that occur at a point in time. A row in a stream table has an explicit or implicit timestamp that anchors the record at a certain point in time. The notion of time, how timestamps are attached to stream records, and how time is handled is important to stream tables. SQRL uses slightly different semantics when querying stream tables to account for time. You can read more about [stream tables]&#40;../stream&#41; and how SQRL handles [time]&#40;../time&#41;.)

[//]: # ()
[//]: # (State and stream tables are like two sides of the same coin by giving you different views of your data. A state table represents the data as it currently is whereas a stream table represents data over time. Each state table has an underlying change stream and stream tables can be transformed to state through aggregation or deduplication. Those transformations are covered in the [stream tables]&#40;../stream&#41; documentation.)

[//]: # ()
[//]: # (## SQL Compatibility)

[//]: # ()
[//]: # (SQRL tables are defined as SQL queries over previously defined or imported tables.)

[//]: # ()
[//]: # (SQRL supports the standardized syntax and semantics of SQL and adds some convenience features like [relationships]&#40;../relationship&#41; and [nested tables]&#40;#nested&#41;.)

[//]: # ()
[//]: # (SQRL differs from SQL in the following ways:)

[//]: # (* Aggregations, default joins, and unions have a different semantics for [stream tables]&#40;../stream&#41;.)

[//]: # (* SQRL does not use WINDOWs. Use [nested tables]&#40;#nested&#41; instead.)

[//]: # (* UNION between state tables require that the tables have the same key columns. UNION between different types of tables is not supported.)

[//]: # (* SQRL has restricted support for sub-queries and encourages developers to use [relationship expressions]&#40;../relationship#expressions&#41; or break sub-queries out into separate intermediate tables instead.)

[//]: # (* SQRL does not support OUTER, ANTI, or SEMI joins.)

[//]: # ()
[//]: # (Most of the differences to SQL serve the purpose to make SQRL easier to use and understand. In addition, there are some temporary limitations of SQL syntax that SQRL does not yet support. See the [roadmap]&#40;../../../dev/roadmap&#41; to learn more.)

[//]: # ()
[//]: # (## Visibility)

[//]: # ()
[//]: # (### Overwriting)

[//]: # ()
[//]: # (You can overwrite existing tables and columns in SQRL with newer definitions.)

[//]: # ()
[//]: # (```sql)

[//]: # (Products := DISTINCT Products ON id ORDER BY updated DESC;)

[//]: # (```)

[//]: # ()
[//]: # (This statement redefines the `Products` table by de-duplicating the imported `Products` changelog stream on the `id` column. The original `Products` stream table still exists but is no longer referencable in the SQRL script. All references to `Products` are now resolved to the de-duplicated state table.)

[//]: # ()
[//]: # (### Hiding)

[//]: # ()
[//]: # (When the name of a table or column starts with the underscore character  `_` the table or column is hidden. Hidden tables and columns are not exposed in the API or imported by other scripts.)

[//]: # ()
[//]: # (```sql)

[//]: # (_MyHiddenTable := SELECT * FROM MyTable WHERE ...;)

[//]: # (```)

[//]: # ()
[//]: # (Hidden tables and columns are used to define intermediate state that is local to the current script and not accessible from outside of that script.)

[//]: # ()
[//]: # (## Distinct)

[//]: # ()
[//]: # (Distinct statements are ways to deduplicate a stream of records.)

[//]: # (```sql)

[//]: # (UniqueInventory := DISTINCT SalesRecords ON &#40;ProductID&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (## Parameters Queries)

[//]: # ()
[//]: # (Table parameters allow for query-time parameterized queries. )

[//]: # ()
[//]: # (Arguments may be provided in any syntactic order and maintain identical semantic meaning.)

[//]: # ()
[//]: # (These two operations are semantically identical:)

[//]: # ()
[//]: # (Questions to answer:)

[//]: # (1. are they ordered?)

[//]: # (2. named?)

[//]: # ()
[//]: # (```sql)

[//]: # (QueryProduct&#40;@ProductID: String&#41; := )

[//]: # (  SELECT * FROM UniqueInventory )

[//]: # (  WHERE ProductID = @ProductID;)

[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (# Export)

[//]: # (```sql)

[//]: # (EXPORT StockAnalysis TO externalSystem.inventoryManagementSystem;)

[//]: # (```)

[//]: # ()
[//]: # (The `EXPORT` statement feeds records from a table to an external data system in realtime.)

[//]: # ()
[//]: # (Export statements are used to publish the results computed by a SQRL script to another system, like a Kafka topic or database table.)

[//]: # ()
[//]: # (An export statement connects a table to a table sink configuration which is identified by the export path.)

[//]: # ()
[//]: # (```sql)

[//]: # (EXPORT UserPromotion TO mysink.promotion;)

[//]: # (```)

[//]: # (This statement exports the stream table `UserPromotion` to the sink table configuration `promotion` inside the `mysink` package via the export path `mysink.promotion`.)

[//]: # ()
[//]: # (Import and export paths are resolved identically. Refer to the [import documentation]&#40;../import&#41; to see how DataSQRL resolves packages.)

[//]: # ()
[//]: # (### Export to Engine)

[//]: # ()
[//]: # (`print` is a data sink that is part of the SQRL standard library &#40;i.e. it does not require a data sink package&#41; and prints all records in the stream table.)

[//]: # (```sql)

[//]: # (EXPORT UserPromotion TO log.promotion;)

[//]: # (```)

[//]: # (### Export to Console)

[//]: # (`print` is a data sink that is part of the SQRL standard library &#40;i.e. it does not require a data sink package&#41; and prints all records in the stream table.)

[//]: # (```sql)

[//]: # (EXPORT UserPromotion TO print.promotion;)

[//]: # (```)

[//]: # ()
[//]: # (## Relationships)

[//]: # ()
[//]: # (SQRL supports relationship columns which relate a row in one table to rows in another table.)

[//]: # ()
[//]: # (```sql)

[//]: # (Users.purchases := JOIN Orders ON Orders.customerid = @.id;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines a relationship column `purchases` on the `Users` table that relates each user record to rows in the `Orders` table where the `customerid` is equal to the user `id`. In other words, `purchases` relates users to their orders.)

[//]: # ()
[//]: # (A relationship is defined via a `JOIN` expression in standard SQL syntax. Relationships are defined as [localized queries]&#40;../table#localized&#41; which means the `JOIN` expression on the right-hand side of the statement is interpreted for each row of the table on which the relationship is defined and the at-sign `@` is used to refer to each row.)

[//]: # ()
[//]: # (Relationship columns are a convenient way to make relationships in the data explicit, simplify joins, and allow consumers of the data API to navigate through the data.)

[//]: # ()
[//]: # (## JOINs)

[//]: # ()
[//]: # (Relationships can be used in `FROM` and `JOIN` clauses of queries which makes complex join-queries easier to read.)

[//]: # ()
[//]: # (```sql)

[//]: # (Users.spending := SELECT endOfWeek&#40;p.time&#41; AS week,)

[//]: # (         sum&#40;t.price&#41; AS spend, sum&#40;t.saving&#41; AS saved)

[//]: # (      FROM @.purchases p JOIN p.totals t)

[//]: # (      GROUP BY week ORDER BY week DESC;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines a nested table `spending` underneath `Users` which aggregates over the nested order `totals` for all purchases of each user. Relationships used in `FROM` and `JOIN` are expanded to their original definition. That means, `FROM @.purchases` gets expanded to `FROM @ JOIN Orders p ON p.customerid = @.id`.)

[//]: # ()
[//]: # (Relationships are particularly useful in the context of nested tables because they make it easy to navigate between parent and child. In the [Customer 360 tutorial]&#40;../../../getting-started/tutorials/customer360/intro&#41; we define the nested `Orders.totals` table as an aggregation over all items.)

[//]: # ()
[//]: # (When defining a nested table, each child row has a relationship column `parent` to relates the child row to its parent row. Likewise, the parent table has a relationship column with the name of the nested table that provides access to all child rows of the parent.)

[//]: # ()
[//]: # (Hence, we are able to use `JOIN p.totals` to join the totals for each order by following the `totals` relationship on the order row.)

[//]: # ()
[//]: # (## API Access)

[//]: # ()
[//]: # (The relationships defined in a SQRL script can be exposed in the resulting data API to give consumers of the API the ability to navigate through the data and retrieve related records. Relationships make it possible to represent complex data efficiently through the API.)

[//]: # ()
[//]: # (To learn more about how to expose and navigate relationships in the data API, refer to the [API documentation]&#40;../../api/overview&#41;.)

[//]: # ()
[//]: # ()
[//]: # (SQRL allows users to define [relationships]&#40;../relationship&#41; between tables to relate records from one table to associated records from another table. Relationships allow SQRL to support [nested tables]&#40;../table#nested&#41; which are a convenient way to represent nested or hierarchical data.)

[//]: # ()
[//]: # (<!--)

[//]: # (## Multiplicity)

[//]: # ()
[//]: # (Relationships are defined as SQL `JOIN` clauses with the at-sign `@` used to refer to the table on which the relationship is defined.)

[//]: # ()
[//]: # (In addition, we can add an `ORDER BY` and `LIMIT` clause to the relationship.)

[//]: # ()
[//]: # (```sql)

[//]: # (Users.recent_purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time LIMIT 10;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines the relationship column `recent_purchases` similar to the `purchases` relationship above but orders the related `Orders` row by `time` and restricts the number of related rows to 10.)

[//]: # ()
[//]: # (The `ORDER BY` clause is used to make the order in which the related rows are returned in the API explicit.)

[//]: # ()
[//]: # (The `LIMIT` clause is used to restrict the multiplicity of the relationship.)

[//]: # (```sql)

[//]: # (Users.last_purchase := JOIN Orders ON Orders.customerid = @.id LIMIT 1;)

[//]: # (```)

[//]: # (This statement defines a relationship with `0..1` multiplicity.)

[//]: # (-->)

[//]: # (<!--)

[//]: # ()
[//]: # (IMPORTANT)

[//]: # ()
[//]: # ()
[//]: # (## SQRL Functions)

[//]: # ()
[//]: # (Functions are used in queries and expressions to manipulate or aggregate data. SQRL supports most of the standard SQL functions out-of-the box.)

[//]: # ()
[//]: # (You can [import]&#40;../import#function&#41; additional functions from the SQRL [standard function library]&#40;docs/category/functions/&#41; or implement and import your own functions as a [custom function package]&#40;../functions/custom-functions&#41;.)

[//]: # ()
[//]: # (## SQL Compatibility)

[//]: # ()
[//]: # (mention FlinkSQL)

[//]: # (similar to https://beam.apache.org/documentation/dsls/sql/calcite/overview/)

[//]: # ()
[//]: # (## SQRL Features)

[//]: # ()
[//]: # (briefly list additional features that SQRL provides on top of SQL)

[//]: # ()
[//]: # ()
[//]: # ([Stream tables]&#40;../stream&#41; represent streams of data like events, IoT metrics, web logs, or change streams. SQRL provides native support for stream tables and methods for converting between stream and state tables. [Time]&#40;../time&#41; plays an important role in stream tables because they are naturally ordered in time and SQRL provides a few features to make timestamp handling easy. <br />)

[//]: # (Stream tables can be [exported]&#40;../export&#41; to react to certain conditions or changes in the data.)

[//]: # ()
[//]: # (State tables represent entities which can change or evolve over time. State tables are *normal* tables and have the same semantics and treatment as they do in [SQL]&#40;../sql-primer&#41;.)

[//]: # ()
[//]: # ()
[//]: # (Tables)

[//]: # ()
[//]: # (SQRL tables are [defined]&#40;../table&#41; as [imports]&#40;../import&#41; or as `SELECT` queries from previously defined tables. Tables can also be [defined incrementally]&#40;../table&#41; by adding a column or relationship to an existing table. [Learn more]&#40;../table&#41; about defining tables in SQRL.)

[//]: # ()
[//]: # ()
[//]: # (All stream tables have a timestamp column. This will be important to know when writing certain types of queries.)

[//]: # ()
[//]: # (New tables can be defined incrementally in SQRL.)

[//]: # ()
[//]: # (A table in SQRL is similar to a table you'd find in a conventional database with some minor differences. SQRL has many types of tables such as *state* and *stream* tables.)

[//]: # (- A state table hold records that change over time as records are modified, much like a conventional database.)

[//]: # (- A stream table hold immutable records that have a timestamp and are naturally ordered in time.)

[//]: # ()
[//]: # ()
[//]: # (Most of the time you will be importing *stream* tables and then creating *state* tables as you incrementally define your sql. We'll come back to this later.)

[//]: # ()
[//]: # (-->)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (## Import from Data Source)

[//]: # ()
[//]: # (Data sources are imported into a SQRL script.)

[//]: # ()
[//]: # (When [importing a table]&#40;../../sqrl/import&#41;, the last element of the import path specifies the name of the source &#40;or `*` for all sources&#41; and the prior path identifies the package which defines contains the source configuration.)

[//]: # ()
[//]: # (```sqrl)

[//]: # (IMPORT datasqrl.tutorials.seedshop.Orders;)

[//]: # (```)

[//]: # (* `datasqrl.tutorials.seedshop` identifies the package which contains the source configuration.)

[//]: # (* `Orders` is the name of the source we are importing from in that package. The name which identifies the source configuration file.)

[//]: # ()
[//]: # (By default, the name of the source is also the name of the table in the SQRL script which contains the source data. To give it a different name, you can use the `AS` keyword:)

[//]: # ()
[//]: # (```sql)

[//]: # (IMPORT datasqrl.tutorials.seedshop.Orders AS MyOrders;)

[//]: # (```)

[//]: # ()
[//]: # (To configure your own data sources, [learn how to add a data source]&#40;../add-source&#41;.)

[//]: # ()
[//]: # (## Export to Data Sinks)

[//]: # ()
[//]: # (Exporting data to a data sink feeds the processed data to an external data system.)

[//]: # ()
[//]: # (The [export path]&#40;../../sqrl/export&#41; is resolved exactly the same way as the import path. For example:)

[//]: # (```sqrl)

[//]: # (EXPORT NewCustomerPromotion TO sendmail.Promotion; )

[//]: # (```)

[//]: # (* `sendmail`  identifies the package which contains the sink configuration.)

[//]: # (* `Promotion` is the name of the sink we are exporting to in that package. The name identifies the sink configuration file.)

[//]: # ()
[//]: # (To configure your own data sinks, [learn how to add a data sink]&#40;../add-sink&#41;.)

[//]: # ()
[//]: # (## Packages)

[//]: # ()
[//]: # (Source and sink configurations are grouped in [packages]&#40;../../concepts/package&#41;. A package is identified by a package path, like `datasqrl.tutorials.seedshop`.)

[//]: # ()
[//]: # (A package path must resolve against a local directory &#40;relative to where the compiler is invoked&#41; or against the [repository]&#40;../../operations/repository&#41;.)

[//]: # ()
[//]: # (The compiler loads packages at compile time to read the configuration files for the sources and sinks referenced in `IMPORT` and `EXPORT` statements.)

[//]: # ()
[//]: # ()
