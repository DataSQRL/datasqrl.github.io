# DataSQRL Introduction

<img src="/img/getting-started/squirrel_learning.png" alt="Nut Shop Tutorial >|" width="40%"/>

This extended tutorial introduces you to the core concepts of DataSQRL and teaches you how to build your own data services in DataSQRL. It's just three chapters plus extra credit.

We will extend the [Quickstart tutorial](../quickstart) for our seed shop to
illustrate the concepts with examples and provide more details and background. We are going to add more data-driven features, customize the data API, and export data. It'll be a riot. 

Please read the
[quickstart tutorial](../quickstart) first, so you can follow along. It only takes
a few minutes, and we'll wait right here.

## What is DataSQRL? {#whatis}

DataSQRL is an open-source compiler for building data APIs. DataSQRL compiles SQRL scripts and API specifications into integrated data pipelines that ingest streaming data from external data sources, process the data according to the SQRL script, and expose the results through an API that matches the specification.

SQRL (pronounced "squirrel") stands for *"Structured Query and Reaction Language"*. It
extends the popular database language SQL by some constructs and syntactic sugar to make
it easier and more productive to build responsive data services from streaming data. Specifically,
SQRL provides support for realtime data streams and the ability to react to incoming data -
hence the name. A big chunk of this tutorial is devoted to covering how SQRL extends
SQL and the concepts it provides that make building data services easy. But we are getting
ahead of ourselves.

## How to build a data service with DataSQLR {#build}

There are 3 steps to building a data service in DataSQLR:

1. **Implement SQRL script:** You combine, transform, and analyze the input data by implementing SQRL scripts. 
2. **Customize API:** The transformed data is exposed through an API which you can customize to meet your data service requirements by editing the API specification. This step is optional since DataSQRL can also generate a default API spec for you.
3. **Compile Data Pipeline:** DataSQRL compiles the SQRL script and API specification into a fully integrated data pipeline. This is where you sigh in relief for all the work you *don't* have to do.

## Next Step

Alrighty, with those high-level concepts out of the way, let's buckle up and start building things.
First stop: **[Introducing SQRL](sqrl)** as a language for building data APIs.

