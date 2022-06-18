---
title: "Advanced Concepts"
---

# Advanced Concepts in DataSQRL

You have made it through the entire extended tutorial and want to keep learning about DataSQLR? Kudos to you! This page highlights some advanced aspects of DataSQRL with pointers to more information so you can continue your journey to ninja SQRL status 🥇.

## SQRL Functions

we are going to start with good-ol' boring functions. Functions are incredibly useful, can make your script more concise, and your life a lot easier.

We used the function `function.time.fromEpochMillis` in the [nut shop tutorial](../nutshop-tutorial) and referenced the function by its fully qualified name. If you use a function repeatedly, you can import it to save you from typing the full name.

```sqrl
IMPORT nutshop-data.Products;
IMPORT nutshop-data.Orders;

IMPORT function.time.fromEpochMillis;

Orders.date := fromEpochMillis(time);
```

You can also import all functions in a particular package:

```sqrl
IMPORT function.time.*;
```

Note, that the imported functions are placed in the same namespace as the imported tables and datasets, so you have to be careful that those names do not overlap. If they do, you can rename functions or tables on import.

```sqrl
IMPORT function.time.fromEpochMillis AS epoch2Millis;

Orders.date := epoch2Millis(time);
```

As a side note, `function` is a reserved keyword in SQRL and you cannot name your datasets or tables `function` to avoid confusion.

SQRL includes a lot of useful functions. You can view the [complete listing of function packages](/docs/category/functions). Here are some highlights:

* **iff** is an inline if-then-else function that evaluates the boolean expression given as the first argument and returns the second argument if it is true, otherwise it returns the third argument. Great for small conditionals where *case-when* statements are overkill.
* **coalesce** returns the second argument if the first argument is null. Great for normalizing messy data.
* If you are doing string transformations, take a look at the [string function package](/docs/reference/sqrl/functions/string-fct).
* Working with timestamps, dates, and all matters of time gets a lot easier with the [time function package](/docs/reference/sqrl/functions/time-fct).
* geo, statistics


## Pagination {#pagination}

By default, SQRL supports `limit` and `offset` arguments to paginate through large result sets. While simple, this approach has the downside that you may see duplicate records or miss records when navigating between pages as the underlying data - and hence offsets - change. Another downside is that you won't know if there is a "next page" until you run out of results.

To remedy these downsides, SQRL also supports cursor style navigation. When you configure cursor style navigation (WHERE EXACTLY??), results are returned in pages with extra page information:

```graphql
{
    products(pageSize: 20, pageState: "") {
        items {
            name
        }
        pageInfo {
            hasNextPage
            nextPageState
        }
    } 
}
```

We added the `pageSize` argument to tell the API that we wish to page through the data with 20 rows per page. The empty `pageState` argument tells the API to return the first page. You can also omit that argument to retrieve the first page. \
However, to access subsequent pages, we pass the `nextPageState` value that was returned on the previous request. The `hasNextPage` field is `true` if there is a subsequent page.

## Hidden Fields and Utility Functions

DataSQRL automatically adds a few hidden columns to all records from imported data source tables:

* **_uuid**: A unique identifier for the record assigned by the DataSQRL server on ingest.
* **_ingest_time**: A timestamp that marks the time when the record was ingested by DataSQRL server.
* **_source_time**: The timestamp attached to the record by the data source. This timestamp is only available if the data source supports it and null otherwise.

The unique identifier is useful to distinguish records and track data lineage.

The timestamps are often used when we transform a change-record event table into an entity table as discussed in [the previous section](sqrl#event-entity}) on entity and event tables. For example, we used `_ingest_time` in the entity table definition of the `Products` table:

```sqrl
Products := DISTINCT Products ON id ORDER BY _ingest_time DESC;
```

This statement defines `Products` entity records as the last change event for each product id ordered by the time the events were ingested. We can also define *last* in terms of the source time of an event record:

```sqrl
Products := DISTINCT Products ON id ORDER BY _source_time DESC;
```

In practice, the definitions lead to the same result unless records from the data source may arrive out of order when they are ingested by DataSQRL. In that case, it is better to use `_source_time` if the data source supports it.

To assign unique ids and timestamps to the event tables we define via subscriptions, we can use the utility functions `uuid()` and `now()` in the `SELECT` clause of the subscription:

```sqrl
NewCustomerPromotion := SUBSCRIPTION ON ADD AS
SELECT uuid() AS event_id, now() AS event_time, customerid, total_orders
FROM Customers WHERE total_orders >= 100;
```

## Script Evolution

You've successfully submitted your SQRL script to production and the data service is running smoothly. The project manager is super excited by the Customer 360 functionality and, after talking to some customers, wants to break customer spending down by week instead of by month.

Easy enough for us. We replace `Customers.spending_by_month` with

```sqrl
Customers.spending_by_week :=
         SELECT function.time.truncateToWeek(date) AS week,
                sum(total) AS total_spend,
                sum(discount) AS total_savings
         FROM _.purchases
         GROUP BY week ORDER BY week DESC;
```

We also update the queries, integrate it with the Customer 360 application, and run all our tests. We are ready to go to production. But if we submit this updated script, it would replace the existing data service API with an incompatible change which would break the currently running Customer 360 application that depends on the old API. Changing the data service and application at the same time is too cumbersome and could potentially result in some downtime.

Instead, we are going to submit our updated script as a new version:
```bash
datasqrl submit customer360.sqrl -v v2 -q ./queries -s pre-schema.yml -r config.json
```

This is the same `submit` command we used before with an additional argument `-v v2` which instructs DataSQRL to deploy the newly generated API as version `v2` and keep the old script running under API version `v1`. Note, that DataSQRL uses the version `v1` by default when you don't specify a version.

Now, we can carefully migrate the Customer 360 React application to the new API version `v2`. Once that migration is complete and everything is running smoothly, we can remove the old version:

```bash
datasqrl remove customer360.sqrl -v v1
```

Versioning is your friend as you evolve your data service and change things up. At some point, you may find that your SQRL script is getting too long and your API to overloaded. For instance, we may eventually split the Customer 360 API from the recommendation engine so we can develop those two components as separate services. \
You can trim down the `customer360.sqrl` script and move the `Customers.past_purchases` and `Customers.products_by_protein` to a new `recommendation.sqrl` script. Make sure you also copy or move all the column, table, and import statements those tables depend on. \
Now, you can submit a new version of the customer 360 script and also deploy the `recommendation.sqrl` script as a separate data service.

## Hints and Optimization {#hints}

You can control how DataSQRL executes your scripts by providing annotation hints.

Before we talk about those hints, let's take a short detour to discuss how DataSQRL executes SQRL scripts. DataSQRL is a combination of a stream processing engine and a database. The stream processing engine ingests data from the connected sources, validates it, and updates the tables defined in the SQRL script that are affected by the new data record. Table records are eventually written to the database where they can be queried by the API to answer API requests.

*(insert schematic diagram visualizing it)*

When DataSQRL converts an SQRL script to an execution plan, the optimizer determines which tables and columns should be incrementally computed by the stream processing engine when new data arrives or computed upon request inside the database for each API query. This decision has important implications for the performance and cost of the data service.

For example, the column `Customers._recent_avg_protein` from our `customer360.sqrl` script would be very expensive to compute at query time when we request product recommendations from the API because it requires a multi-way `JOIN` starting from all orders that a customer placed in the last 6 month. If we computed this at query time, the database would have to fetch a lot of data which takes time and is costly. It is much cheaper to incrementally update this column value whenever the customer places a new order and store the result in the database so it is instantly available at query time. \
On the other hand, incrementally computing the `Customers.products_by_protein` table when data changes would be very expensive since the ordering changes anytime the `Customers._recent_avg_protein` changes with a new order for that customer. Since we only have a couple hundred product records that don't change very often, it is much more efficient to compute `Customers.products_by_protein` at query time.

DataSQRL collects statistics on the source data and analyzes your script to make the optimal decision on whether to incrementally compute a particular table and column or compute it at query time. However, sometimes the optimizer gets it wrong. When that happens, you can provide a hint to DataSQRL to dictate that decision to the optimizer.

:::caution

Please send us example SQRL scripts where the optimizer makes the wrong decision and produces suboptimal results. We are actively working on improving the optimizer and your input is super valuable to us.

:::

```sqrl
-- @optimizer(materialize=true)
Customers._recent_avg_protein :=
        SELECT SUM(e.quantity * p.weight_in_gram * n.protein)/SUM(e.quantity * p.weight_in_gram)
        FROM _.purchases.items e JOIN e.product p JOIN p.nutrition n
        WHERE e.parent.date > now() - INTERVAL 6 MONTH;

-- @api(paginate=true)
-- @optimizer(materialize=false)
Customers.products_by_protein :=
        SELECT p.id AS productid, ABS(p.nutrition.protein-_._recent_avg_protein) AS protein_difference FROM Products p
        ORDER BY protein_difference ASC LIMIT 20;
Customers.products_by_protein.product := JOIN Products ON Products.id = _productid LIMIT 1;
```

With the `@optimizer` annotation we can pass hints to the optimizer. The boolean flag `materialize` tells the optimizer whether to incrementally update a table with changing data - i.e. to materialize a table as database folks would say - or to compute the table results at query time with each API request.

Learn more about the [DataSQRL optimizer](/docs/reference/operations/optimizer) and how to provide hints to control the execution plan that it generates for your SQRL script. You can also learn more about the [architecture of DataSQRL](/docs/dev/architecture/overview) to dive deep into the internals of the system.

## Next Steps

Congratulations, you not only finished the extended tutorial but also completed the extra credit. What a champ! You are definitely ready to get started with DataSQRL.

For additional information, you can consult the [reference documentation](/docs/reference/overview) which covers all the details and then some. \
If you are running into a problem or wonder how to solve a particular issue in DataSQRL, take a look at [the how-to guides](/docs/guides/overview) which provide solutions for common questions. \
If neither of those resources address your problem, reach out to the community for help. We'd love to hear about your problem and support you as best we can.

Want to learn more about the internals of DataSQRL or contribute to the codebase? The [developer documentation](/docs/dev/overview) provides a detailed breakdown of the DataSQRL architecture and everything you need to know to extend DataSQRL yourself.






