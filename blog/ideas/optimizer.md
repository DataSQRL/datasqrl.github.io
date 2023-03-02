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
        FROM @.purchases.items e JOIN e.product p JOIN p.nutrition n
        WHERE e.parent.date > now() - INTERVAL 6 MONTH;

-- @api(paginate=true)
-- @optimizer(materialize=false)
Customers.products_by_protein :=
        SELECT p.id AS productid, ABS(p.nutrition.protein - @._recent_avg_protein) AS protein_difference FROM Products p
        ORDER BY protein_difference ASC LIMIT 20;
Customers.products_by_protein.product := JOIN Products ON Products.id = _productid LIMIT 1;
```

With the `@optimizer` annotation we can pass hints to the optimizer. The boolean flag `materialize` tells the optimizer whether to incrementally update a table with changing data - i.e. to materialize a table as database folks would say - or to compute the table results at query time with each API request.

Learn more about the [DataSQRL optimizer](/docs/reference/operations/optimizer) and how to provide hints to control the execution plan that it generates for your SQRL script. You can also learn more about the [architecture of DataSQRL](/docs/dev/architecture) to dive deep into the internals of the system.