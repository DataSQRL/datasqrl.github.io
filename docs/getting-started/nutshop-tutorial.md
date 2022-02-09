---
title: "Intro Tutorial"
---

# Customer 360 Tutorial

Because we have the humor of a middle schooler on Adderall, this introductory tutorial
will implement data-driven features for our online DataSQRL nut shop. Nuts and squirrels - 
how funny are we?

The DataSQRL nut shop is a pretty basic online shop that processes and keeps track of orders 
placed by customers. We want to add Customer 360 functionality to the shop, which means giving 
customers insights into their past orders and recommending products to purchase. In short, we
want to use the data we have about our customers to sell them nuts with a personalized touch.

![DataSQRL Nut Shop](/img/getting-started/tutorial/nutshop.jpg)

## Install {#setup}

Before the fun begins, we need to install DataSQRL so you can run the service we are building.
Follow the [Download & Install](/docs/getting-started/install)
instruction. It'll be quick. We will wait right here.

Let's fire up DataSQRL by executing the following command into your terminal or shell:
```bash
datasqrl run dev &
```

This runs the DataSQRL server in development mode as a background process, so we can build a new
data service. When you are done with development, you can stop the process by executing 
`datasqrl stop`.


## Step 1: Adding Data {#adding-data}

First, we are going to add some data from our online shop for us to play with. Navigate to
a directory on your computer where you can place files for this tutorial. [Download this zip
archive](/) and unzip it in the folder. You should see the folder `nutshop-data` which 
contains the order and product data for our shop.

Let's feed that data to DataSQRL with the following command:
```bash
datasqrl source folder nutshop-data
```

This command instructs DataSQRL to connect the data in the `nutshop-data` folder as a 
dataset and gives you the following response:
```bash
Connecting source "nutshop-data" to DataSQRL server "localhost:7050"
Adding dataset "nutshop-data"
Adding table "nutshop-data.Products" with files [products.csv]
Adding table "nutshop-data.Orders" with files [orders_*.json]
```

We can now access the data and build a data service with it. Create a file called 
`customer360.sqrl` and open it in your favorite editor. This is the SQRL script where
we define the transformations and logic for our Customer 360 data service. SQRL is an
extension of SQL that adds a few concepts and some syntactic sugar to make it easier to
develop with SQL and build data services. SQRL is like adding bacon to a sandwich: it makes
SQL better in ways that seem obvious in hindsight.

Add the following two import statements to your `customer360.sqrl` script:
```sqrl
IMPORT nutshop-data.Products;
IMPORT nutshop-data.Orders;
```

This imports the `Products` and `Orders` tables from the `nutshop-data` dataset to our script.
In DataSQLR, all data is structured as tables and tables are grouped into datasets.

In your terminal, execute the following command to run our little SQRL script:
```bash
datasqrl dev customer360.sqrl
```
This command continuously monitors your SQRL script and submits any changes to the running
DataSQRL server for execution. The server executes the script and generates a data service
from the result which is exposed as a GraphQL API.

### Querying the API {#api}

The command also opens a page in your browser where you can inspect the resulting API with
GraphiQL, which is a lightweight IDE for your API. Try it out by pasting the following
GraphQL query into the left hand side and hitting the run button:
```graphql
{
    products(filter: [{ id: {eq: "1"}}]) {
        items {
            name
            sizing
            weight_in_grams
        }
    } 
}
```
You should see the requested information for the product with id equal to "1". You can modify
the filter condition to query for products by their fields.

Voila, we got a functioning data service with `products` and `orders` API entry points
for the respective tables that we imported. That was easier than making fun of the metaverse.

## Step 2: Transforming Data {#transform}

### Data Cleansing

There are two certainties in life: death and messy data. Time to clean up! Luckily, our
curated tutorial data only has 2 little "messes".

First, the `time` of an order is given as the number of milliseconds since Unix epoch. We
need to convert `time` to a proper DateTime field so we can handle it like a timestamp.

```datasqrl
Orders.date := util.time.fromEpochMillis(time);
```

In this statement we are declaring a new field `date` on the `Orders` table and define it
by applying the utility function `util.time.fromEpochMillis` to the `time` field.

Secondly, the `discount` field on the order entries is absent when no discount was applied.
It's pretty annoying to check for existence whenever we want to access that field. This
is an easy fix which defaults `discount` to `0.0` when the field is missing using the 
`coalesce` function:

```datasqrl
Orders.entries.discount := coalesce(discount, 0.0);
```

Nice, our data already looks much better. Adding to and overwriting fields on tables 
incrementally makes it pretty easy to clean your data.
When you save the script, you can see the new `date` field on `Orders` in the API.

Note the nested table syntax in `Orders.entries` to reference the nested `entries` records
within the `Orders` table. SQRL supports [nested tables](/) which is useful when dealing with
hierarchical data like our `Orders` data.

### Data Structure {#structure}

A Customer 360 application is all about the customer, so let's restructure our data with
the customer at the center.

:::info

SQRL is an extension of SQL and we are going to use some basic SQL syntax. If you are
unfamiliar with SQL, we recommend you read our [SQL Primer](/docs/reference/sqrl/sql-primer)
first.

:::

First, we define a `Customers` table based on the
unique customer ids from the `Orders` table.

```sqrl
Customers := SELECT DISTINCT customerid AS id FROM Orders;
```

So far, our tables are independent of one another. For our Customer 360, we want
to link customers to their orders to display a customer's shopping history. We accomplish
this by defining a relationship between `Customers` and `Orders`:

```sqrl
Customers.purchases := JOIN Orders ON Orders.customerid = _.id ORDER BY Orders.time DESC
```

A relationship is declared as a field on a table which references the related records as
defined by the `JOIN` statement on the right. A JOIN relates records from two
tables based on a JOIN predicate - in our case matching customer ids.
The underscore is syntactic sugar that SQRL adds to SQL for referring to the table on the
left hand side on which the relationship is defined.

Similarly, we want to link the `Orders.entries` to the actual product records that they
reference. This calls for another relationship:

```sqrl
Orders.entries.product := JOIN Products ON Products.id = _.productid LIMIT 1;
```

When you save the script, a `customers` endpoint has been added to the API and we can access
a customer's shopping history and the products in their orders through the relationships we
just defined.

Try executing the following GraphQL query in GraphiQL to navigate through the relationships:

```graphql
{
    customers(filter: [{ id: {eq: "50"}}]) {
        items {
            purchases(pageSize:10) {
                id
                time
                entries {
                    quantity
                    product {
                        name
                        weight_in_grams
                    }
                }
            }
        }
    } 
}
```

We can now navigate through our data with the uncanny agility of Luke
Skywalker in the Death Star.

## Step 3: Analyzing Data {#analysis}

Let's dig our hands even deeper into the data dough and do some data analysis. Our customers
would like to know how much they are spending and saving in our shop every month.

First, let's compute the total and savings for each order as separate fields.

```datasqrl
Orders.entries.total := quantity * unit_price - discount;
Orders.total := sum(entries.total);
Orders.savings := sum(entries.discount);
```

We can use those fields to aggregate those values for each customer by month.

```datasqrl
Customers.spending_by_month :=
         SELECT util.time.truncateToMonth(date) AS month,
                sum(total) AS total_spend,
                sum(discount) AS total_savings
         FROM _.purchases
         GROUP BY month ORDER BY month DESC;
```

This statement defines a nested table `spending_by_month` beneath `Customers` which takes
all the orders referenced by the `purchases` relationship on `Customers` for each customer
record and groups them by
the month of the order's date. It then sums up the total and savings for all the orders in each
group. The utility function `truncateToMonth` takes a date and returns the date for the
beginning of the month in which that input date occurred.

## Step 4: Querying the API {#api}

We got our data cleaned up, transformed into a customer-centric view, linked together through
relationships to access customers' shopping history, and we added a spending analysis.
[Click here](/) to see the full script.

That's a great start for a Customer 360 data service. And it is all readily accessible
through the GraphQL API.

The final step is to access the API from your application. We'll look at an example in Javascript. Take a look at the [API guides](/docs/guides/api/overview) to learn how to query the API from your favorite language or framework.

Create the Javascript file `index.js` with the following code:
```js
import { ApolloClient, gql} from "@apollo/client";

const client = new ApolloClient({ 
  uri: 'http://localhost:7050/graphql/customer360/v0'
});
```

This imports and connects the [Apollo GraphQL client](https://www.apollographql.com/docs/react/)  to our customer 360 API. If you don't have the client installed, run `npm install @apollo/client graphql` first. \
We can now run queries against it.

```js
client
  .query({
    query: gql`
      query GetProduct {
        products(filter: [{ id: {eq: "1"}}]) {
            items {
                name
                sizing
                weight_in_grams
            }
        }
      }
    `
  })
  .then(result => console.log(result));
```

Run this code to see the result printed to your console.

## Next Steps {#next}

You just built and accessed a Customer 360 data service. Good work! 
Give yourself a pat on the back.

This tutorial covered the basics of building data services in DataSQRL. We recommend that
you read the [DataSQRL Introduction](intro/overview) next because it extends this tutorial and
explains each of the concepts covered here in more detail. If you found this short tutorial too *dense* or missing information, the complete [DataSQRL Introduction](intro/overview) will fill in the gaps and teach you everything you need to know to build your own data services in DataSQRL.