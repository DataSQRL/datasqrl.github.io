---
title: "Optimizer"
---

# DataSQRL Optimizer

The optimizer is part of the DataSQRL compiler and determines the optimal data service architecture to execute a SQRL script and serve a given API specification.

The DataSQRL optimizer runs a global optimization for the entire data service and local optimizations for each individual engine that is part of the data service architecture.

## Global Optimization

The DataSQRL compiler produces a computation DAG (directed, acyclic graph) of all the tables defined in the SQRL script and the result sets computed from those tables that are accessible via the data API according to the API specification.

The global optimizer determines which engine executes the computation of which table in the DAG.

<img src="/img/reference/reactive_microservice.svg" alt="DataSQRL data service architecture >" width="50%"/>


For example, suppose we are compiling a SQRL script against the data service architecture shown to the left, which consist of the Flink stream processor, a database, API server, and Kafka log in a circle that visualizes the data flow of the data service. <br />
If we precompute a table in the stream engine, those results are readily available at request time which leads to fast response times and good API performance compared to having to compute the results in the database. However, pre-computing all possible results for the API can be very wasteful or outright impossible due to the number of possible query combinations.

The global compiler strives to find the right balance between pre-computing tables for high performance and computing results at request time to reduce waste in order to build efficient data services.

In addition, the global optimizer picks the engine most suitable to compute each table of the global DAG and prunes the DAG to eliminate redundant computations.

## Local Optimization

The local optimizer takes the physical execution plans for each engine and runs them through an engine specific optimizer.

Local optimizers that are executed by DataSQRL include:

* **DAG Optimization:** Consolidates repeated computations in the stream processing DAG.
* **Index Selection:** Chooses an optimal set of indices for database engines to speed up queries executed for individual API calls.

## Optimizer Hints {#hints}

Sometimes the optimizer makes the wrong decision and produces sub-optimal data services. You can provide hints in the SQRL script to correct those errors by overwriting the optimizer.

### Execution Engine Hint

You annotate a table definition in SQRL with the name of an execution engine as a hint to tell the optimizer which engine should compute the table.

```sql
/*+ EXEC(stream) */
OrdersByMonth := SELECT endOfmonth(p.time) AS month,
              count(1) as num_orders
         FROM Orders GROUP BY month;
```

The annotation `EXEC(stream)` instructs the optimizer to compute the `OrdersByMonth` table in the `stream` engine. An engine with the name `stream` must be configured in the engines section of the [package configuration](../package-config).

Similarly, the `EXEC(database)` annotation instructs the optimizer to choose the engine with the name `database`:

```sql
/*+ EXEC_DB */
OrdersByMonth := SELECT endOfmonth(p.time) AS month,
              count(1) as num_orders
         FROM Orders GROUP BY month;
```