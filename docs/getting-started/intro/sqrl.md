---
title: "Implement SQRL Script"
---

# Implementing SQRL Scripts

<img src="/img/index/undraw_programming_sqrl.svg" alt="Programming in SQRL >" width="40%"/>

The logic and function of a data service is defined in the SQRL script.
That's where the action is. We are going to dive deeper into
the SQRL language and how to write SQRL scripts by reviewing and extending the
[Quickstart tutorial](../quickstart).

When you make it through this document, you will know the key concepts
of SQRL, be ready to write your own SQRL scripts, and lay down some serious data APIs.

## What's in a SQRL Script?

An SQRL script defines tables and relationships between them. Together, they
form the data model of the data service which is exposed as an API.

Tables and relationships are defined in SQL - with some additions and a little
bit of syntactic sugar thrown in there to make your life easier. We call
the resulting language variant **SQRL**.

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
are building with in an SQRL script. Tables can be exposed as endpoints in the API, so you can query the data in them.

You define tables in SQRL through import or query statements.

### Import Table

An important statement adds a table from an external data source to your SQRL script. 
In the [quickstart tutorial](../quickstart#adding-data) we imported the `Orders` table.

```sqrl
IMPORT datasqrl.seedshop.Orders;
```

`Orders` is contained in the `datasqrl.seedshop` package. When importing tables, we specify the full
path to the table, including the package, so DataSQRL can locate it.

The `datasqrl.seedshop` package we are using for this example is downloaded from the DataSQRL repository as a dependency. In the [next chapter](data-sources) we will define a custom data source package and table.

Let's add more data to our script by importing the products data from our seedshop:
```sqrl
IMPORT datasqrl.seedshop.Products;
```

Import statements are at the top of your SQRL script, so you can see all the data you are importing
at one glance.

### Query Table

Once you have imported tables, you build with the data they contain.
You do this by defining new tables that query the data in existing ones.

In the [Quickstart tutorial](../quickstart#structure) we defined the `Users` table by querying
for all the unique customer ids in the `Orders` table:

```sqrl
Users := SELECT DISTINCT customerid AS id FROM Orders;
```

You can use all the SQL you already know to define new tables in SQRL.
For example, suppose PM is telling us that they want to add a McDonald's inspired
*"over X million orders served"* banner to the nut shop homepage. \
We define a new `NumOrders` table that contains the count:

```sqrl
NumOrders := SELECT COUNT(*) AS count FROM Orders;
```

The `NumOrders` table gets exposed in our data service API as an additional endpoint
through which the frontend team can query for the current order count. [Run](../quickstart#run) the modified script and [execute](../quickstart#query) the following query: 

```graphql
{
    NumOrders
    {
        count
    } 
}
```

:::info

DataSQRL is still young, and we are actively working on SQL feature parity in SQRL.
Take a look at the [roadmap](/docs/dev/roadmap#sql-parity) for current
limitations and what we are working on.

:::

#### Incremental Table Definition

You can also define tables incrementally by adding new columns to an
existing table.

For example, we defined the `total` column on the nested `Orders.items` table:

```sqrl
Orders.items.total := quantity * unit_price - discount?0.0
```

The part on the left-hand side of the
assignment operator `:=` is the fully specified `Orders.items.total` column 
we are defining. The part on the right-hand side is the expression that computes the total price of each order item.

This is a **localized expression** that is evaluated within the context
of the table on the left-hand side - in this case `Orders.items`. That's why
we can refer to the `quantity`, `unit_price`, and `discount` columns of the `Orders.items` table without any
qualifiers.

Note, that we have to use the conditional expression `discount?0.0` because our input data is a bit messy and some rows don't have a `discount` column.

Incremental column definitions are a great way to clean up such inconsistencies in data:
```sqrl
Orders.items.discount := discount?0.0;
Orders.items.total := quantity * unit_price - discount;
```

We overwrote the `discount` column with a cleaned-up version, so any future references to the column don't have to.

## Relationships

Relationships relate records within and between tables. Defining relationships has two benefits:

1. Relationships can be used in queries and expressions instead of explicit JOINs which simplifies queries and makes them more readable.
2. Relationships are exposed in the API allowing consumers to retrieve related records within a single request.
 

We defined the relationship column `purchases` on the `Users` table to relate to a user's `Orders`:

```sqrl
Users.purchases := JOIN Orders ON Orders.customerid = @.id;
```

A relationship column is defined as a JOIN between two or more tables using the standard
SQL `JOIN ... ON ...` syntax. The starting point of the JOIN is always the table
on the left-hand side, and we can use the special table handle `@` to refer to
it in the JOIN expression. In this case, `Customers` is our *start* table and
`Orders` is our *end* table of the relationship definition.

In addition to the `JOIN [table] ON [condition]` expression, a relationship
definition can end with an optional `ORDER BY` and `LIMIT` clause. The order
is used as the default ordering when the relationship is accessed through the API.
The limit specifies the maximum number of related rows that are returned
when traversing the relationship (i.e. the maximum multiplicity).

To order user purchases by time, we change the relationship definition to:
```sqrl
Users.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time;
```

The relationship is defined as a field on the start table, and we can query it in the API:

```graphql
{
Users (id: 10) {
    purchases {
        id
        totals {
            price
            saving
        }
    }  
}}
```

Relationship columns make the relationships in the data explicit. Adding structure to your data by explicitly defining relationships also clarifies the data itself and how you plan to use it. <br /> 
Relationships can also be used in joins and expressions, which makes them easier to read and write as we'll see in the following section.


## Nested Tables

SQRL supports nested and hierarchical data like JSON through nested tables.
A nested table has a parent table and all rows in a nested table are associated
with a single parent row in the parent table.

In the nut shop tutorial the `Orders` table has a nested `Orders.items` table
that contains the item records for each order. When referring to a nested table,
we have to use the fully qualified name of the table which includes the parent.
`SELECT * FROM Orders.items` is valid but `SELECT * FROM items` is not because
there is no table with that name in the global namespace of the SQRL script.

SQRL automatically adds a `parent` relationship on the child table which relates
rows to their parent rows in the parent table. Likewise, SQRL also adds a relationship field with the name of the nested table to the parent table which relates all child records to the parent record. The `items` relationship on the `Orders` table can be used to query
the item records for a particular order.

```sqrl
Orders.totals := SELECT sum(total) as price,
                  sum(discount) as saving FROM @.items;
```

This statement defines a new nested table `totals` underneath `Orders` by aggregating the total price and discount over all items in each order.

The `SELECT` query on the right is a **localized query** that is evaluated within
the context of the `Orders` table because it selects from the special table handle `@`. Think of a localized query as being executed for each row of table on the left-hand side. We can use the special table handle `@` to refer to each row from the parent table.
In this instance, `@.items` refers to the `items` relationship column of the `Orders` table.

Localized queries are a feature of SQRL that make it easy to express nested, grouped, or partitioned operations.

Nested tables are useful when we want to analyze our data in partitions, like order totals and spending by user as defined by the `User.spending` table.
Whenever you want to build data analysis **by dimension** or compute a result set **for each record**, nested tables are your friend.

For example, let's build the simplest and most effective product recommendation
for our seed shop: recommending products users have already purchased,
ordered by frequency. In other words, we want to look at all the products purchased
**for each customer** and sort them by frequency of purchase:

```sqrl
Users.past_purchases := SELECT i.productid, count(1) as num_orders,
         sum(i.quantity) as total_quantity
      FROM @.purchases.items i
      GROUP BY i.productid
      ORDER BY num_orders DESC, total_quantity DESC;
```

The table `past_purchases` is defined as a nested table underneath `Users`.
The SQL query on the right-hand side is a *localized query* which means it is evaluated in the context of the `Users` table. Nested tables are always defined in the context of the parent table, and we can think of the query definition as being applied to *each row* of the
parent table.

We use the special table handle `@` to refer to each row in the parent 
`Uses` table. The `FROM` clause `@.purchases.items` chains together
the `purchases` relationship on `Users` with the `items` relationship
on `Orders` to retrieve all item records for all order records associated
with a single customer record. Chaining together relationships allows us to
avoid the complexity of multiple JOIN expressions in this query.

## Stream vs State Tables {#event-entity}

We distinguish between stream and state tables in SQRL.

A **stream table** consists of immutable (i.e. unchanging) rows of data that
are incrementally added to the table over time and never deleted. 
The `Orders` table is a stream table because an order does not change once
it has been processed.

In a **state table** the column values of rows change over time and rows
are added to and deleted from the table. The `Users` table is a state
table because it represents our current list of users based on the set of unique `customerid`.

Why is this distinction important? Because stream tables have special features in SQRL and are treated differently from state tables. Stream tables give SQRL the ability to *react* to data and synchronize with arbitrary data sources.

All tables imported from external data sources are stream tables. In case of our imported `Products` table, we get a change stream of product updates.

To turn `Products` into a state table we overwrite it with the following de-duplication query.

```sqrl
Products := DISTINCT Products ON id ORDER BY updated DESC;
```

This special SQRL query selects the most recent version (as identified by the `updated` timestamp) for each product (as identified by the key `id` column).

When we are dealing with static data, there is no real difference
between stream and state tables. However, when dealing with
streaming data and connecting to data in databases it is important
to understand the difference.

A useful way to think about it: a stream table contains events happen and don't change
after the fact whereas state tables represent entities that evolve over time. When you import
a table from a source that you want to treat as an entity, make sure to use a
`DISTINCT` query to define the table as an entity table.

Now, that we have our `Products` state table defined, let's relate it to the `Orders.items` table.

```sqrl
Orders.items.product := JOIN Products ON Products.id = @.productid LIMIT 1;
Products.ordered_items := JOIN Orders.items i ON i.productid = @.id;
```

These two relationship column establish a bidirectional relationship.

## Time

When building real-time data services, *time* is often an important aspect.
The two most common time-based transformations on data are grouping data
points by time windows and aggregating over recent time intervals. SQRL provides
convenience features to address both of those.

### Time Windows for Grouping

For the Quickstart tutorial we computed customer spending and savings 
profiles by week.

```sqrl
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;
```

This defines a nested table which aggregates over the orders for each user.
SQRL has a built-in library of [*time* functions](/docs/reference/sqrl/functions/time)
that compute time windows of various durations. 

We can then group on those windows in order to compute
aggregates across non-overlapping time intervals. In this statement, we
bucket order records into week-long intervals based on the order date to
sum up the total and discounts for each week.

### Time Slices for Recency

Another common time analysis is by recent time slice, i.e. you want to analyze
all records that are younger than some amount of time. 

For our seed shop, we want to analyze the order volume for each product over the last 10 days.

```sqrl
Products.volume_10day := SELECT sum(i.quantity) as quantity,
         sum(i.total) as spend, sum(i.quantity * @.weight_in_gram) as weight
      FROM @.ordered_items i JOIN i.parent o
      WHERE o.time > now() - INTERVAL 10 DAY;
```

This statement defines the nested `volume_10day` table similar to previously defined aggregations. The difference here is that we filter out orders that are older than 10 days by using the special `now()` time function to refer to the current point in time.

Note, that this query will return an empty result set for now. We are going to fix that in the next chapter.

And that, my friend, is a pretty good start for our seed shop data API.


## Next Steps

We've built a complete e-commerce data service with customer analysis, recommendation engine, and business intelligence. Good work 💪! Take a look at the [final SQRL script](https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-basic.sqrl) that includes the changes and additions we discussed in this chapter. You've learned enough about SQRL to start building data services on your own. 

In the [**next chapter**](data-sources), we are going to define our own data source and looks at imports in more detail.

We covered many aspects of SQRL in this document. If you want to explore SQRL in more detail, take a look at the [SQRL reference documentation](/docs/reference/sqrl/overview), which provides detailed explanations of key SQRL concepts like [tables](/docs/reference/sqrl/table),
  [relationships](/docs/reference/sqrl/relationship), and [time](/docs/reference/sqrl/time).