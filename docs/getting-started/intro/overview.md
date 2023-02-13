# DataSQRL Training

<img src="/img/index/undraw_personal_training_sqrl.svg" alt="Nut Shop Tutorial >" width="300"/>

This extended tutorial introduces you to the core concepts of DataSQRL and provides enough
context for you to start building your own data services in DataSQRL.

We will extend our [Customer 360 data service](../quickstart) for our nut shop to
illustrate the concepts with examples. We are going to add product recommendations, a
nutritional analysis, and more. It'll be a riot. Please read the
[introductory tutorial](../quickstart) first, so you can follow along. It only takes
10 minutes.

## What is DataSQRL? {#whatis}

DataSQRL is a data system for building data services from various sources of data.
You connect data sources to a running DataSQRL server and then write SQRL scripts that
clean, transform, and analyze the data. Executing the script on the DataSQRL server
generates a GraphQL API for you data service that you can consume any way you want.

*Add Schematic drawing of DataSQRL server with incoming scripts & data and producing APIs*


SQRL (pronounced "squirrel") stands for *"Structured Query and Reaction Language"*. It
extends the popular database language SQL by some constructs and syntactic sugar to make
it easier and more productive to build responsive data services from streaming data. Specifically,
SQRL provides support for realtime data streams and the ability to react to incoming data -
hence the name. A big chunk of this tutorial is devoted to covering how SQRL extends
SQL and the concepts it provides that make building data services easy. But we are getting
ahead of ourselves.

## How to build a data service in DataSQLR {#build}

There are 3 steps to building a data service in DataSQLR:

1. **[Connect data sources](data-sources.md)**: Connecting a data source to 
 DataSQLR server
 makes the data available for use within our SQRL scripts. Hence, the first step to build a data
 service is connecting the data we want to build with.
2. **[Write SQRL script](sqrl)**: The SQRL script defines the data transformations and
 data logic of our data service. It is the brains of the whole operation. 
3. **[Access API](api)**: When we execute the SQRL script, the DataSQRL server generates
 a GraphQL data API based on the result. You can customize the API and access it from your application in the programming language of your choice.

Before we look more closely at those 3 steps, make sure that you have DataSQRL
[installed](../install) and [running](../quickstart#setup).

Alright, with all that preamble out of the way, let's buckle up and go on a ride.
First stop: **[Connecting data sources](data-sources.md)**.

