---
title: "Implement SQRL Script"
---

# Implementing SQRL Scripts

The logic and function of a data service is defined in the SQRL script.
That's where the action is. We are going to dive deeper into
the SQRL language and how to write SQRL scripts by reviewing and extending the
[nut shop tutorial](../nutshop-tutorial).

When you make it through this document, you will know the key concepts
of SQRL, be ready to write your own SQRL scripts, and take the world by storm
with your new data service.

## What's in a SQRL Script?

An SQRL script defines tables and relationships between them. Together, they
form the data model of the data service which is exposed as an API.

That's pretty much all there is to it. You define tables holding rows of data
and relationships between those row records and the resulting data model
can be navigated through an API that DataSQRL generates for you.

Tables and relationships are defined in SQL - with some additions and a little
bit of syntactic sugar thrown in there to make your life easier. We call
the resulting language variant **SQRL**.

The rest of this document explains how to define tables and relationships
in SQRL so you can build the data service of your dreams.

:::info

If you are unfamiliar with SQL, we recommend you read the
[SQL Primer](/docs/reference/sqrl/sql-primer) which introduces
the basic concepts of SQL.

:::

## Tables

A table is made up of columns (or fields) and rows. A row represents a data record.
Columns have a data type and represent an attribute of a record in the table. We often
refer to columns as *fields* in the context of a data record. Records and rows, columns
and fields, Darth Vader and Anakin Skywalker are all name pairs that describe the same
thing.

Tables are the central concept of SQRL. Tables structure and contain all the data you
are building with in an SQRL script. Tables are exposed as endpoints in the API that
DataSQRL generates for you, so you can query the data in them.

You define most tables in SQRL using one of 3 ways: by import, by query, or incrementally.

### Import

An important statement adds the table you are importing to your SQRL script. 
In the [nut shop tutorial](../nutshop-tutorial#adding-data) we imported the 
`Products` and `Orders` tables.

```sqrl
IMPORT nutshop-data.*;
```

These tables are now defined in our script and we can transform, query, or otherwise build with
the data they contain. The [previous section](data-sources#basics) explains how to connect
data sources to DataSQRL for importing data.

Import statements are at the top of your SQRL script so you can see all the data you are importing
at one glance.

Let's import the nutritional information from our cloud bucket data source by adding the
following import statement to the top of our customer 360 script: 

```sqrl
IMPORT usda-data.Nuts;
```

This defines a `Nuts` table based on the data in the `nuts.json` file that's contained in the
connected cloud bucket. Each JSON object in that file is represented by a row in the `Nuts` table.
We'll use the data in the `Nuts` table for our recommendation engine later on.

### Query 

Once you have imported tables, you build with the data they contain.
You do this by defining new tables that query the data in existing ones.

In the [intro tutorial](../nutshop-tutorial#structure) we defined the `Customers` table by querying
for all the unique customer ids in the `Orders` table:

```sqrl
Customers := SELECT DISTINCT customerid AS id FROM Orders;
```

You can bring to bear all the SQL you already know to define new tables in SQRL.
For example, suppose PM is telling us that they want to add a McDonald's inspired
*"over X million orders served"* banner to the nut shop homepage. \
We define a new `NumOrders` table that contains the count:

```sqrl
NumOrders := SELECT COUNT(*) AS count FROM Orders;
```

The `NumOrders` table gets exposed in our data service API as an additional endpoint
through which the frontend team can query for the current order count.

```graphql
{
    NumOrders
    {
        count
    } 
}
```

:::info

DataSQRL is still young and we are actively working on SQL feature parity in SQRL.
Take a look at the [roadmap](/docs/dev/roadmap#sql-parity) for current
limitations and what we are working on.

:::

### Incrementally

You can also define tables incrementally by adding new columns to an
existing table.

In the nut shop tutorial, we added the column `date` to the `Orders` table:

```sqrl
Orders.date := function.time.fromEpochMillis(time);
```

The part on the left-hand side of the
assignment operator `:=` is the fully specified `Orders.date` column 
we are defining. The part on the right-hand side is the actual definition.
In this case, we are applying the function `fromEpochMillis` within the
`time` function package to the `time` column to convert it to a `DateTime`.

This is a **localized expression** that is evaluated within the context
of the table on the left-hand side - in this case `Orders`. That's why
we can refer to the `time` column of the `Orders` table without any
qualifiers.

For more complex column definitions,
we can use the full `SELECT` query syntax.

```sqrl
Customers.since := SELECT MIN(o.date) FROM Orders o WHERE o.customerid = @.id;
```

This statement defines a new column `since` on the `Customers` table as the
date when the customer placed their first order.

The `SELECT` query on the right is a **localized query** that is evaluated within
the context of the `Customers` table. Think of a localized query
as being executed for each row of table on the left-hand side. We can use the special table
handle `@` to refer to column values of that row. \
In this instance, `@.id` refers to the `id` columns of the `Customers` table.

Localized queries are a feature of SQRL that allows incremental table definitions
and simplifies queries because we don't have to write the implicit JOIN between
`Customers` and `Orders` in the statement above.

Localized queries in incremental column definitions must return a single value
which gets assigned to the defined column. In other words, the query must be
guaranteed to return a single row with a single column in it.

---

### Table Schema

The data type of columns is inferred from the input data or definition of the table.
In our example, the `time` column on the `Orders` table is of type `Number` which
DataSQRL inferred from the records in the orders data. The data type of the `date` column
defined above is `DateTime` which is inferred from the result type of the `fromEpochMillis`
function.

In most cases, type inference is obvious and you can let DataSQRL handle data types and schema for you.
One less thing to worry about. \
Read more about [schema management](/docs/reference/sources/schema-management)
and how to [manually define data types](/docs/guides/sources/manual-schema) for 
datasets with heterogeneous or very messy data where it isn't obvious.

## Relationships

Relationships relate records within and between tables.
Defining relationships has two benefits:

1. Relationships are exposed in the API allowing consumers
 to retrieve related records within a single request.
2. Relationships can be used in queries instead of explicit
 JOINs which simplifies queries and makes them more readable.
 This is particularly useful when we query along the same
 relationship multiple times.

In the nut shop tutorial, we defined the following relationship between
the `Customers` and `Orders` table:

```sqrl
Customers.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time DESC;
```

A relationship is defined by a JOIN between two or more tables using the standard
SQL `JOIN ... ON ...` syntax. The starting point of the JOIN is always the table
on the left-hand side and we can use the special table handle `@` to refer to
it in the JOIN expression. In this case, `Customers` is our *start* table and
`Orders` is our *end* table of the relationship definition.

In addition to the `JOIN [table] ON [condition]` expression, a relationship
definition can end with an optional `ORDER BY` and `LIMIT` clause. The order
is used as the default ordering when the relationship is accessed through the API.
The limit specifies the maximum number of related rows that are returned
when traversing the relationship (i.e. the maximum multiplicity).

The relationship is defined as a field
on the start table, which is how we access it in the script or through the API:

```graphql
{
    Customers(id: "50")
    {
        purchases(limit:10)
        {
            id
            time
        }
    } 
}
```



We can also access relationships when we define tables or columns in our 
SQRL script:

```sqrl
Customer.total_orders := SUM(purchases.total);
```

In this incremental column definition from the nut shop tutorial, we are summing
the total value of all orders related to a particular customer record by the 
`purchases` relationship.

This expression is much easier to read and write than the equivalent
definition:

```sqrl
Customers.total_orders := SELECT SUM(o.total) FROM Orders o WHERE o.customerid = @.id;
```

And we can reuse relationships across definitions. For instance, we can rewrite
the definition of the `since` column on `Customers` as:

```sqrl
Customers.since := MIN(purchases.date);
```

Relationships make it easier to implement SQRL scripts, allow you to reuse JOINs
between queries, and add structure to your data model which is accessible through
the API. Adding structure to your data by explicitly defining relationships also
clarifies the data itself and how you plan to use it.

For example, by defining relationships between the `Nuts` and `Products` tables
we explicitly establish a 1-to-1 relationship between those two sets of records
that we can use to enrich our `Products` data with additional information.

```sqrl
Products.nutrition := JOIN Nuts ON Nuts.fdcID = @.usda_id LIMIT 1;
Nuts.product := JOIN Products ON @.fdcID = Products.usda_id LIMIT 1;
```

## Nested Tables

SQRL supports nested and hierarchical data like JSON objects through nested tables.
A nested table has a parent table and all rows in a nested table are associated
with a single parent row in the parent table.

In the nut shop tutorial the `Orders` table has a nested `Orders.items` table
that contains the item records for each order. When referring to a nested table,
we have to use the fully qualified name of the table which includes the parent.
`SELECT * FROM Orders.items` is valid but `SELECT * FROM items` is not because
there is no table with that name in the global namespace of the SQRL script.

SQRL automatically adds a relationship field with the name of the nested
table to the parent table which relates all child records to the parent
record. The `items` relationship on the `Orders` table can be used to query
the item records for a particular order, e.g. 
`SELECT SUM(items.discount) AS order_discount FROM Orders`. \
Likewise, SQRL adds a `parent` relationship on the child table which relates
rows to their parent rows in the parent table. This relationship can be used
to refer to parent row attributes, e.g. 
`SELECT productid, parent.date FROM Orders.items`

### Defining Nested Tables

We can also define nested tables in SQRL. In the nut shop tutorial, we defined
the nested table `Customers.spending_by_month` to aggregate spending by month
for each customer. Nested tables are useful when we want to analyze our data
in partitions, like order totals and discounts by customer.

Whenever you want to build data analysis **by dimension** or compute a 
result set **for each record**, nested tables are your friend.

For example, let's build the simplest and most effective product recommendation
into our customer 360: recommending products customers have already purchased
orderd by frequency. In other words, we want to look at all the products purchased
**for each customer** and sort them by frequency of purchase:

```sqrl
Customers.past_purchases :=
         SELECT i.productid, count(i.*) as num_orders, sum(i.quantity) as total_quantity
         FROM @.purchases.items i
         GROUP BY i.productid
         ORDER BY num_orders DESC, total_quantity DESC;
```

The table `past_purchases` is defined as a nested table within `Customers`.
The SQL query on the right-hand side is a 
*localized query* which means it is evaluated in the context of the `Customers`
table. Nested tables are always defined in the context of the parent table
and we can think of the query definition as being applied to *each row* of the
parent table.

We use the special table handle `@` to refer to each row in the parent 
`Customers` table. The `FROM` clause `@.purchases.items` chains together
the `purchases` relationship on `Customers` with the `items` relationship
on `Orders` to retrieve all item records for all order records associated
with a single customer record. Chaining together relationships allows us to
avoid the complexity of multiple JOIN expressions in this query.

## Event vs Entity Tables {#event-entity}

We distinguish between event and entity tables in SQRL.

An **event table** consists of immutable (i.e. unchanging) rows of data that
are incrementally added to the table over time and never deleted. 
The `Orders` table in the
nut shop tutorial is an event table because an order does not change once
it has been processed.

In an **entity table** the column values of rows change over time and rows
are added to and deleted from the table. The `Products` table is an entity
table because it represents our current list of products which may change
over time.

Why is this distinction important? Because DataSQRL treats all data
produced by data sources as event tables. When you import a table, you
get an event table of immutable records that are ingested from the 
data source in realtime.

Let's do a little experiment to see how this works. While you still have
the nut shop data service running, open up an editor to modify the 
`products.csv` file by removing the word *"(desiccated)"* from the product
name of the first record on line 2. Then save the file. Because the 
data was modified, this triggers an update from the data source and
DataSQRL ingests all the product records again.

When we [query the API](../nutshop-tutorial#api) 
for products with `id=1` we get
two results with slightly different names.

```graphql
{
    Products(id: "1") {
        name
        sizing
        weight_in_grams
    } 
}
```

In fact, we now have duplicate records for all products: one from
before we edited the file and one from after. That's because
DataSQRL treats all source data as an event stream. If the underlying
data are entities, like products in our case, then we get an event 
stream of updates to those entities.

To get a `Products` entity table with a single, most-recent version
of each product, we have to 
define `Products` as a deduplicated entity table at the top of our
SQRL script after the imports:

```sqrl
Products := DISTINCT Products ON id ORDER BY _ingest_time DESC;
```

This defines an entity table that takes the most recent update
for each product by id. In this case *recency* is defined by
the `_ingest_time` column which is a column that exists on all
event tables and marks the time when a record was ingested by
DataSQRL.

When you run the products API query again you only get a single
result with the most current product.

When we are dealing with static data, there is no real difference
between event and entity tables. However, when dealing with
streaming data and connecting to data in databases it is important
to understand the difference.

A useful way to think about it: events happen and don't change
after the fact whereas entities evolve over time. When you import
a table that you want to treat as an entity, make sure to use a
`DISTINCT` query to define the table as an entity table.

## Time

When building real-time data services, *time* is often an important aspect.
The two most common time-based transformations on data are grouping data
points by time buckets and slicing data by recent time interval. SQRL provides
convenience features to address both of those.

### Time Buckets for Grouping

For our nut shop customer 360 we computed customer spending and savings
profiles by month as follows:

```sqrl
Customers.spending_by_month :=
         SELECT function.time.truncateToMonth(date) AS month,
                sum(total) AS total_spend,
                sum(discount) AS total_savings
         FROM @.purchases
         GROUP BY month ORDER BY month DESC;
```

This defines a nested table which aggregates over the orders for each customer.
SQRL has a built-in library of [*time* functions](/docs/reference/sqrl/functions/time-fct)
that compute time buckets of
various durations. We can then group on those buckets in order to compute
aggregates across non-overlapping time intervals. In this example, we
bucket order records into month-long intervals based on the order date to
sum up the total and discounts for each month.


### Time Slices for Recency

Another common time analysis is by recent time slice, i.e. you want to analyze
all records that are younger than some amount of time.

For our nut shop, we want to add
another recommendation service that recommends products our customers are likely 
to buy but might not have bought yet. \
Our nut shop customers closely watch their protein intake. 
After all, if you are climbing trees all day you
need to feed your muscles. That's why we want to recommend products that
have a similar protein content to the average amount of protein a customer
has recently consumed.

First, let's compute the average recent protein intake based on a customer's
past purchases.

```sqrl
Customers.recent_avg_protein :=
      SELECT SUM(e.quantity * p.weight_in_gram * n.protein)/SUM(e.quantity * p.weight_in_gram)
      FROM @.purchases.items e JOIN e.product p JOIN p.nutrition n
      WHERE e.parent.date > now() - INTERVAL 6 MONTH;
```

In the `FROM` clause of this query, we are joining the order items a customer has
bought with the product information and the nutritional information so we can compute
the average protein content. Note, how we are using the previously defined relationships
instead of table names in the JOIN expressions to chain the relationships together.
In the `WHERE` clause we are filtering out any order that is older than 6 months by using
the special `now()` function which is used to define recent time slices.

`now()` stands for the current system time which means the result of this query will
change as time progresses.

We will use the value `recent_avg_protein` defined above to define another
nested table that ranks all the nut products we offer in the store by similarity
of protein content.

```sqrl
Customers.products_by_protein :=
SELECT p.id AS productid, 
       ABS(p.nutrition.protein - @.recent_avg_protein) AS protein_difference 
FROM Products p ORDER BY protein_difference ASC LIMIT 20;
```

Finally, we add a relationship to this nested table to relate those records back
to our `Products` table:

```sqrl
Customers.products_by_protein.product := JOIN Products ON Products.id = _productid LIMIT 1;
```

And that, my friend, is a pretty good start for a novel product recommendation engine.

## Subscriptions

The last feature we want to implement in our customer 360 is a trigger or
notification when a customer has more than $100 in purchases so that we can
email them with a special coupon to reward their loyalty.

SQRL supports subscriptions which observe an underlying table and trigger
events.

```sqrl
NewCustomerPromotion := SUBSCRIPTION ON ADD AS
      SELECT customerid, total_orders 
      FROM Customers WHERE total_orders >= 100;
```

We define the subscription `NewCustomerPromotion` which observes the table
defined by the `SELECT` query for all customers with more than $100 in total
purchases. The `ON ADD` qualifier for this subscription means that an event
is triggered whenever a new row is added to that table.

A subscription defines an event table that contains a row for every
event that is triggered by the underlying table. We can treat it like any other
table, for example, by defining a relationship to `Customers`:

```sqrl
NewCustomerPromotion.customer := JOIN Customers ON Customers.id = @.customerid;
```

However, subscriptions are special in that they are exposed as WebSockets in the
API that proactively sent out events when they occur to subscribing users. In
addition, we can register queues with DataSQRL server where subscription events
get posted to notify downstream systems. We are going to look into
both of those subscription access methods in more detail in the [next section](api).

Subscriptions are a powerful feature to *react* to changes in the data and 
notify downstream systems or consumers of the API immediately.

## Next Steps

We've built a complete customer 360 with two complementary recommendation engines and
promotions. Good work 💪! Take a look at the [final Customer 360 SQRL script](/).

You've learned enough about SQRL to start building data services on your own. Next,
we are going to take a closer look at the API that DataSQRL generates from your
scripts and how to access it.

---

We've covered the 80% of SQRL you need in this document. If you want to know more:

* Take a look at the [SQRL guides](/docs/guides/sqrl/overview) for 
 advice on solving specific problems in SQRL
* Learn more about the key SQRL concepts of [tables](/docs/reference/sqrl/table),
  [relationships](/docs/reference/sqrl/relationship), and [time](/docs/reference/sqrl/time).
* If you want to know it *all*, take a look at the [SQRL language reference](/docs/reference/sqrl/grammar).