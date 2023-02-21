---
title: "QuickStart Tutorial"
---

# DataSQRL Intro in 5 Minutes

<img src="/img/getting-started/tutorial/nutshop.jpg" alt="Nut Shop Tutorial >|" width="250"/>

Because we have the humor of middle schoolers on Adderall, this quickstart tutorial
implements data-driven features for our online DataSQRL seed shop. Seeds and squirrels - how funny are we?

We want to build a data service that exposes a Customer's purchase history and provides a spending analysis. Let's create an SQRL script for this purpose.

## Run SQRL Script {#run}

In the terminal or command line, create an empty folder for our script:

```bash
> mkdir seedshop; cd seedshop
```

Create a new file in that folder called `c360.sqrl` and paste the following content into the file:

```sql
IMPORT datasqrl.seedshop.Orders;  
IMPORT time.endOfWeek;            

Orders.items.total := quantity * unit_price - discount?0.0;
Orders.totals := SELECT sum(total) as price,
                  sum(discount?0.0) as saving FROM @.items;

Users := SELECT DISTINCT customerid AS id FROM Orders;

Users.purchases := JOIN Orders ON Orders.customerid = @.id;

Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;
```

Now run the DataSQRL compiler to build a data service from the data transformations and aggregations defined in the script:

```bash
docker run -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run c360.sqrl
```

:::note

To run this command you need to have [Docker](https://docs.docker.com/get-docker/) installed on your machine and running. The first time you run this command takes a minute to download the compiler.

:::

You can experiment with the GraphQL API of this data service by opening `http://localhost:8888/graphiql/ ` in your browser and writing GraphQL queries in the left-hand panel. For example, copy the following query:

```graphql
{
Users ( id: 10) {
    purchases (limit: 10) {
        id
        totals {
            price
            savings
        }
    }    
    spending {
        month
        spend
        saved
    }
}}
```

When you hit the "run" button you get the purchase history and spending analysis for the customer with `id=10` in the right-hand panel. Pretty easy, right?

## Introduction to SQRL

Let's take a closer look at the SQRL script for our data service to understand what it does and how it compiles to the API.

:::info

SQRL is an extension of SQL, and we are going to use some basic SQL syntax. If you are unfamiliar with SQL, we recommend you read our [SQL Primer](/docs/reference/sqrl/sql-primer)
first.

:::

### Imports


```sql
IMPORT seedshop.Orders;      
```

The first line of the script imports the order stream data that we are building with. DataSQRL locates the data source for our seedshop orders based on this import definition.

```sql
IMPORT time.round_to_month;
```

Next, we import a time function that rounds a timestamp to the current month which we will later use in an aggregation. That's all the imports we need.

### Data Augmentation






## Next Steps {#next}

You just built and accessed a Customer 360 data service. Good work! 
Give yourself a pat on the back.

This tutorial covered the basics of building data services in DataSQRL. Next, we recommend that
you continue with the [DataSQRL Training](intro/overview) because it extends this tutorial and
explains each of the concepts covered here in more detail. If you found this short tutorial too dense or missing information, the complete [DataSQRL Training](intro/overview) will fill in the gaps and teach you everything you need to know to build your own data services in DataSQRL.
