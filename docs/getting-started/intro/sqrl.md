[//]: # (---)

[//]: # (title: "Implement SQRL Script")

[//]: # (---)

[//]: # ()
[//]: # (# Implementing SQRL Scripts)

[//]: # ()
[//]: # (<img src="/img/index/undraw_programming_sqrl.svg" alt="Programming in SQRL >" width="40%"/>)

[//]: # ()
[//]: # (The processing and logic of our data product is defined in the SQRL script.)

[//]: # (That's where the action is. We are going to dive deeper into)

[//]: # (the SQL language variant of DataSQRL by reviewing and extending the SQRL script from the [introduction]&#40;../overview&#41;.)

[//]: # ()
[//]: # (When you make it through this chapter, you will know the key concepts)

[//]: # (of SQRL, be ready to write your own SQRL scripts, and lay down some serious data APIs.)

[//]: # ()
[//]: # (## What's in a SQRL Script?)

[//]: # ()
[//]: # (An SQRL script defines tables and relationships between them. Together, they)

[//]: # (form the data model which is exposed as an API.)

[//]: # ()
[//]: # (Tables and relationships are defined in SQL - with some additions and a little)

[//]: # (bit of syntactic sugar thrown in there to make your life easier.)

[//]: # ()
[//]: # (## Tables)

[//]: # ()
[//]: # (A table is made up of columns &#40;or fields&#41; and rows. A row represents a data record.)

[//]: # (Columns have a data type and represent an attribute of a record in the table. We often)

[//]: # (refer to columns as *fields* in the context of a data record. Records and rows, columns)

[//]: # (and fields, Darth Vader and Anakin Skywalker are all name pairs that describe the same)

[//]: # (thing.)

[//]: # ()
[//]: # (Tables are the central concept of SQRL. Tables structure and contain all the data you)

[//]: # (are building with in an SQRL script. Tables can be exposed as endpoints in the API, so you can query the data in them.)

[//]: # ()
[//]: # (You define tables in SQRL through import or query statements.)

[//]: # ()
[//]: # (### Import Table)

[//]: # ()
[//]: # (An important statement adds a table from an external data source to your SQRL script. )

[//]: # (In the [first chapter]&#40;../overview#sqrl&#41; we imported the `Orders` table.)

[//]: # ()
[//]: # (```sqrl)

[//]: # (IMPORT datasqrl.seedshop.Orders;)

[//]: # (```)

[//]: # ()
[//]: # (`Orders` is contained in the `datasqrl.seedshop` package. When importing tables, we specify the full)

[//]: # (path to the table, including the package, so DataSQRL can locate it.)

[//]: # ()
[//]: # (The `datasqrl.seedshop` package we are using for this example is downloaded from the DataSQRL [repository]&#40;https://dev.datasqrl.com&#41; as a dependency. In the [next chapter]&#40;../data-sources&#41; we will define a custom data source package and table.)

[//]: # ()
[//]: # (Let's add more data to our script by importing the products data from our seedshop:)

[//]: # (```sqrl)

[//]: # (IMPORT datasqrl.seedshop.Products;)

[//]: # (```)

[//]: # ()
[//]: # (Import statements are at the top of your SQRL script, so you can see all the data you are importing)

[//]: # (at one glance.)

[//]: # ()
[//]: # (### Query Table)

[//]: # ()
[//]: # (Once you have imported tables, you build with the data they contain.)

[//]: # (You do this by defining new tables that query the data in existing ones.)

[//]: # ()
[//]: # (In the [first chapter]&#40;../introduction.md#sqrl&#41; we defined the `Users` table by querying)

[//]: # (for all the unique customer ids in the `Orders` table:)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Users := SELECT DISTINCT customerid AS id FROM Orders;)

[//]: # (```)

[//]: # ()
[//]: # (You can use all the SQL you already know to define new tables in SQRL.)

[//]: # (For example, suppose PM is telling us that they want to add a McDonald's inspired)

[//]: # (*"over X million orders served"* banner to the nut shop homepage. \)

[//]: # (We define a new `NumOrders` table that contains the count:)

[//]: # ()
[//]: # (```sqrl)

[//]: # (NumOrders := SELECT COUNT&#40;*&#41; AS count FROM Orders;)

[//]: # (```)

[//]: # ()
[//]: # (The `NumOrders` table gets exposed in our data API as an additional endpoint)

[//]: # (through which the frontend team can query for the current order count. [Run]&#40;../overview#run&#41; the modified script and [execute]&#40;../overview#query&#41; the following query: )

[//]: # ()
[//]: # (```graphql)

[//]: # ({)

[//]: # (    NumOrders)

[//]: # (    {)

[//]: # (        count)

[//]: # (    } )

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (:::info)

[//]: # ()
[//]: # (DataSQRL is still young, and we are actively working on SQL feature parity in SQRL.)

[//]: # ()
[//]: # (:::)

[//]: # ()
[//]: # (#### Incremental Table Definition)

[//]: # ()
[//]: # (You can also define tables incrementally by adding new columns to an)

[//]: # (existing table.)

[//]: # ()
[//]: # (For example, we defined the `total` column on the nested `Orders.items` table:)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Orders.items.total := quantity * unit_price - coalesce&#40;discount,0.0&#41;)

[//]: # (```)

[//]: # ()
[//]: # (The part on the left-hand side of the)

[//]: # (assignment operator `:=` is the fully specified `Orders.items.total` column )

[//]: # (we are defining. The part on the right-hand side is the expression that computes the total price of each order item.)

[//]: # ()
[//]: # (This is a **localized expression** that is evaluated within the context)

[//]: # (of the table on the left-hand side - in this case `Orders.items`. That's why)

[//]: # (we can refer to the `quantity`, `unit_price`, and `discount` columns of the `Orders.items` table without any)

[//]: # (qualifiers.)

[//]: # ()
[//]: # (## Relationships)

[//]: # ()
[//]: # (Relationships relate records within and between tables. Defining relationships has two benefits:)

[//]: # ()
[//]: # (1. Relationships can be used in queries and expressions instead of explicit JOINs which simplifies queries and makes them more readable.)

[//]: # (2. Relationships are exposed in the API allowing consumers to retrieve related records within a single request.)

[//]: # ( )
[//]: # ()
[//]: # (We defined the relationship column `purchases` on the `Users` table to relate to a user's `Orders`:)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Users.purchases := JOIN Orders ON Orders.customerid = @.id;)

[//]: # (```)

[//]: # ()
[//]: # (A relationship column is defined as a JOIN between two or more tables using the standard)

[//]: # (SQL `JOIN ... ON ...` syntax. The starting point of the JOIN is always the table)

[//]: # (on the left-hand side, and we can use the special table handle `@` to refer to)

[//]: # (it in the JOIN expression. In this case, `Customers` is our *start* table and)

[//]: # (`Orders` is our *end* table of the relationship definition.)

[//]: # ()
[//]: # (In addition to the `JOIN [table] ON [condition]` expression, a relationship)

[//]: # (definition can end with an optional `ORDER BY` and `LIMIT` clause. The order)

[//]: # (is used as the default ordering when the relationship is accessed through the API.)

[//]: # (The limit specifies the maximum number of related rows that are returned)

[//]: # (when traversing the relationship &#40;i.e. the maximum multiplicity&#41;.)

[//]: # ()
[//]: # (To order user purchases by time, we change the relationship definition to:)

[//]: # (```sqrl)

[//]: # (Users.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time;)

[//]: # (```)

[//]: # ()
[//]: # (The relationship is defined as a field on the start table, and we can query it in the API:)

[//]: # ()
[//]: # (```graphql)

[//]: # ({)

[//]: # (Users &#40;id: 10&#41; {)

[//]: # (    purchases {)

[//]: # (        id)

[//]: # (        totals {)

[//]: # (            price)

[//]: # (            saving)

[//]: # (        })

[//]: # (    }  )

[//]: # (}})

[//]: # (```)

[//]: # ()
[//]: # (Relationship columns make the relationships in the data explicit. Adding structure to your data by explicitly defining relationships also clarifies the data itself and how you plan to use it. <br /> )

[//]: # (Relationships can also be used in joins and expressions, which makes them easier to read and write as we'll see in the following section.)

[//]: # ()
[//]: # ()
[//]: # (## Nested Tables)

[//]: # ()
[//]: # (SQRL supports nested and hierarchical data like JSON through nested tables.)

[//]: # (A nested table has a parent table and all rows in a nested table are associated)

[//]: # (with a single parent row in the parent table.)

[//]: # ()
[//]: # (In the nut shop tutorial the `Orders` table has a nested `Orders.items` table)

[//]: # (that contains the item records for each order. When referring to a nested table,)

[//]: # (we have to use the fully qualified name of the table which includes the parent.)

[//]: # (`SELECT * FROM Orders.items` is valid but `SELECT * FROM items` is not because)

[//]: # (there is no table with that name in the global namespace of the SQRL script.)

[//]: # ()
[//]: # (SQRL automatically adds a `parent` relationship on the child table which relates)

[//]: # (rows to their parent rows in the parent table. Likewise, SQRL also adds a relationship field with the name of the nested table to the parent table which relates all child records to the parent record. The `items` relationship on the `Orders` table can be used to query)

[//]: # (the item records for a particular order.)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Orders.totals := SELECT sum&#40;total&#41; as price,)

[//]: # (                  sum&#40;coalesce&#40;discount,0&#41;&#41; as saving FROM @.items;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines a new nested table `totals` underneath `Orders` by aggregating the total price and discount over all items in each order.)

[//]: # ()
[//]: # (The `SELECT` query on the right is a **localized query** that is evaluated within)

[//]: # (the context of the `Orders` table because it selects from the special table handle `@`. Think of a localized query as being executed for each row of table on the left-hand side. We can use the special table handle `@` to refer to each row from the parent table.)

[//]: # (In this instance, `@.items` refers to the `items` relationship column of the `Orders` table.)

[//]: # ()
[//]: # (Localized queries are a feature of SQRL that make it easy to express nested, grouped, or partitioned operations.)

[//]: # ()
[//]: # (Nested tables are useful when we want to analyze our data in partitions, like order totals and spending by user as defined by the `User.spending` table.)

[//]: # (Whenever you want to build data analysis **by dimension** or compute a result set **for each record**, nested tables are your friend.)

[//]: # ()
[//]: # (For example, let's build the simplest and most effective product recommendation)

[//]: # (for our seed shop: recommending products users have already purchased,)

[//]: # (ordered by frequency. In other words, we want to look at all the products purchased)

[//]: # (**for each customer** and sort them by frequency of purchase:)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Users.past_purchases := SELECT i.productid, count&#40;1&#41; as num_orders,)

[//]: # (         sum&#40;i.quantity&#41; as total_quantity)

[//]: # (      FROM @.purchases.items i)

[//]: # (      GROUP BY i.productid)

[//]: # (      ORDER BY num_orders DESC, total_quantity DESC;)

[//]: # (```)

[//]: # ()
[//]: # (The table `past_purchases` is defined as a nested table underneath `Users`.)

[//]: # (The SQL query on the right-hand side is a *localized query* which means it is evaluated in the context of the `Users` table. Nested tables are always defined in the context of the parent table, and we can think of the query definition as being applied to *each row* of the)

[//]: # (parent table.)

[//]: # ()
[//]: # (We use the special table handle `@` to refer to each row in the parent )

[//]: # (`Uses` table. The `FROM` clause `@.purchases.items` chains together)

[//]: # (the `purchases` relationship on `Users` with the `items` relationship)

[//]: # (on `Orders` to retrieve all item records for all order records associated)

[//]: # (with a single customer record. Chaining together relationships allows us to)

[//]: # (avoid the complexity of multiple JOIN expressions in this query.)

[//]: # ()
[//]: # (## Stream vs State Tables {#stream-state})

[//]: # ()
[//]: # (We distinguish between stream and state tables in SQRL.)

[//]: # ()
[//]: # (A **stream table** consists of immutable &#40;i.e. unchanging&#41; rows of data that)

[//]: # (are incrementally added to the table over time and never deleted. )

[//]: # (The `Orders` table is a stream table because an order does not change once)

[//]: # (it has been processed.)

[//]: # ()
[//]: # (In a **state table** the column values of rows change over time and rows)

[//]: # (are added to and deleted from the table. The `Users` table is a state)

[//]: # (table because it represents our current list of users based on the set of unique `customerid`.)

[//]: # ()
[//]: # (Why is this distinction important? Because [stream tables]&#40;/docs/reference/sqrl/stream&#41; have special features in SQRL and are treated differently from state tables. Stream tables give SQRL the ability to *react* to data and synchronize with arbitrary data sources.)

[//]: # ()
[//]: # (All tables imported from external data sources are stream tables. In case of our imported `Products` table, we get a change stream of product updates.)

[//]: # ()
[//]: # (To turn `Products` into a state table we overwrite it with the following de-duplication query.)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Products := DISTINCT Products ON id ORDER BY updated DESC;)

[//]: # (```)

[//]: # ()
[//]: # (This special SQRL query selects the most recent version &#40;as identified by the `updated` timestamp&#41; for each product &#40;as identified by the key `id` column&#41;.)

[//]: # ()
[//]: # (When we are dealing with static data, there is no real difference)

[//]: # (between stream and state tables. However, when dealing with)

[//]: # (streaming data and connecting to data in databases it is important)

[//]: # (to understand the difference.)

[//]: # ()
[//]: # (A useful way to think about it: a stream table contains events happen and don't change)

[//]: # (after the fact whereas state tables represent entities that evolve over time. When you import)

[//]: # (a table from a source that you want to treat as an entity, make sure to use a)

[//]: # (`DISTINCT` query to define the table as an entity table.)

[//]: # ()
[//]: # (Now, that we have our `Products` state table defined, let's relate it to the `Orders.items` table.)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Orders.items.product := JOIN Products ON Products.id = @.productid;)

[//]: # (Products.ordered_items := JOIN Orders.items i ON i.productid = @.id;)

[//]: # (```)

[//]: # ()
[//]: # (These two relationship column establish a bidirectional relationship.)

[//]: # ()
[//]: # (## Time)

[//]: # ()
[//]: # (When building real-time data products, *time* is often an important aspect.)

[//]: # (The two most common time-based transformations on data are grouping data)

[//]: # (points by time windows and aggregating over recent time intervals. SQRL provides)

[//]: # (convenience features to address both of those.)

[//]: # ()
[//]: # (### Time Windows for Grouping)

[//]: # ()
[//]: # (We computed customer spending and savings profiles by week.)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Users.spending := SELECT endOfWeek&#40;p.time&#41; AS week,)

[//]: # (         sum&#40;t.price&#41; AS spend, sum&#40;t.saving&#41; AS saved)

[//]: # (      FROM @.purchases p JOIN p.totals t)

[//]: # (      GROUP BY week ORDER BY week DESC;)

[//]: # (```)

[//]: # ()
[//]: # (This defines a nested table which aggregates over the orders for each user.)

[//]: # (SQRL has a built-in library of [*time* functions]&#40;/docs/reference/sqrl/functions/time&#41;)

[//]: # (that compute time windows of various durations. )

[//]: # ()
[//]: # (We can then group on those windows in order to compute)

[//]: # (aggregates across non-overlapping time intervals. In this statement, we)

[//]: # (bucket order records into week-long intervals based on the order date to)

[//]: # (sum up the total and discounts for each week.)

[//]: # ()
[//]: # (### Time Slices for Recency)

[//]: # ()
[//]: # (Another common time analysis is by recent time slice, i.e. you want to analyze)

[//]: # (all records that are younger than some amount of time. )

[//]: # ()
[//]: # (For our seed shop, we want to analyze the order volume for each product over the last 10 days.)

[//]: # ()
[//]: # (```sqrl)

[//]: # (Products.volume_10day := SELECT sum&#40;i.quantity&#41; as quantity,)

[//]: # (         sum&#40;i.total&#41; as spend, sum&#40;i.quantity * @.weight_in_gram&#41; as weight)

[//]: # (      FROM @ JOIN @.ordered_items i JOIN i.parent o)

[//]: # (      WHERE o.time > now&#40;&#41; - INTERVAL 10 DAY;)

[//]: # (```)

[//]: # ()
[//]: # (This statement defines the nested `volume_10day` table similar to previously defined aggregations. The difference here is that we filter out orders that are older than 10 days by using the special `now&#40;&#41;` time function to refer to the current point in time.)

[//]: # ()
[//]: # (Note, that this query will return an empty result set for now. We are going to fix that in the next chapter.)

[//]: # ()
[//]: # (And that, my friend, is a pretty good start for our seed shop data API.)

[//]: # ()
[//]: # (## Next Steps)

[//]: # ()
[//]: # (We've built a complete e-commerce data product with customer analysis, recommendation engine, and business intelligence. Good work 💪! Take a look at the [final SQRL script]&#40;https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-sqrl.sqrl&#41; that includes the changes and additions we discussed in this chapter. You've learned enough about SQRL to start building data pipelines on your own. )

[//]: # ()
[//]: # (In the [**next chapter**]&#40;../data-sources&#41;, we are going to define our own data source and looks at imports in more detail.)

[//]: # ()
[//]: # (We covered many aspects of SQRL in this document. If you want to explore SQRL in more detail, take a look at the [SQRL reference documentation]&#40;/docs/reference/sqrl/overview&#41;, which provides detailed explanations of key SQRL concepts like [tables]&#40;/docs/reference/sqrl/table&#41;,)

[//]: # (  [relationships]&#40;/docs/reference/sqrl/relationship&#41;, [stream tables]&#40;/docs/reference/sqrl/stream&#41;, and [time]&#40;/docs/reference/sqrl/time&#41;.)
