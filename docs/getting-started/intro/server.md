---
title: "Operating DataSQRL"
---

# Operating the DataSQRL Server

You've come a long way, mate. You have connected data sources to DataSQRL server, implemented a fairly elaborate Customer 360 data service with a recommendation engine, and build a small React application that queries the data service API. Congrats!

This last installment of our extended tutorial covers the operation of DataSQRL server.

## Development Mode

In the [nut shop tutorial](../nutshop-tutorial#setup) we started an instance of DataSQRL server with the command:

```bash
datasqrl run dev &
```

This runs DataSQRL in *development mode* as a background process. In development mode, DataSQRL optimizes for fast start-up times, quick script iteration, and ease of development.

During development, we use the command `datasqrl watch customer360.sqrl` to submit our script to the server for execution whenever we save the script. This gives us quick feedback on our changes and allows us to iterate quickly. The command expects a local DataSQRL server instance running in development mode. You can also connect to a remote DataSQRL development server - take a look at the [datasqrl command](/docs/reference/cmd#scripts) for details. The important part is that the server is running in development mode to enable the quick resubmission of the SQRL script you are implementing that makes iterative development responsive.

### Troubleshooting & Debugging

When you run `datasqrl watch customer360.sqrl`, the GraphQL IDE *GraphiQL* opens in your web browser. GraphiQL makes it easy to query the GraphQL API generated by DataSQRL from your SQRL script. Use GraphiQL to inspect the structure and schema of the generated API to validate its correctness. You can also query the API to verify that the data meets your expectations.

After exploring the API in GraphiQL it is often obvious what you need to change in your SQRL script to produce the right results. \
However, if inspecting and querying the API does not provide enough information to troubleshoot an issue, you can enter debug mode.

In debugging mode, the server provides a lot of information about how it executes the script so you can see  what is going on behind the scenes. \
To debug your script, you first end the automatic submission of your development script by pressing `CTRL-C` on the `datasqrl watch` process. Now run `datasqrl debug customer360.dqrl` to submit your script to the server for execution in debugging mode.

You will see a lot of output on your screen. Let's dissect it to see what's going on.

```bash
to be determined
```

## Going to Production

We have developed and debugged our Customer 360 data service, now it's time to take it to production and expose those new features to our nut shop customers.

### Production Mode

First, we need to start an instance of DataSQRL server in production mode. If you are still running DataSQRL in development mode, stop that instance first by executing `datasqrl stop`. Then run `datasqrl run prod &` which fires up a production mode instance of DataSQRL.

In production mode, DataSQRL optimizes for security, robustness, and performance. A production DataSQRL instance can run multiple different scripts at the same time and share resources between them. But you cannot develop a SQRL script against a DataSQRL server running in production. We want to trade off the fast iteration cycles, flexibility, and visibility we appreciate during development for the security, predictability, and efficient operation we require during production. That's why DataSQRL runs in two different modes.

### Running SQRL Scripts in Production

To execute an SQRL script in production, DataSQRL expects two additional arguments in addition to the script itself:
* The folder of GraphQL query templates that our application will execute against the API
* A pre-schema file that specifies the expected schema for all imported tables

In the [last section](api) we developed queries against the generated API and generalized those to query patterns that we invoked from the React Customer 360 application. During development, DataSQRL generates a fully flexible GraphQL API that we can query in whichever way we want. But we don't want to expose that kind of flexibility on a production data service because it creates too big of an attack surface for hackers to exploit or application developers to make mistakes.

That's why we submit the folder of query patterns with the SQRL script when we go to production. DataSQRL inspects the queries to generate a GraphQL API that supports any query that matches one of the patterns and rejects requests that do not. In addition to making your data service much more secure, DataSQRL also uses the query patterns to optimize the performance of the data service.

The pre-schema file is a YAML file that describes the expected columns and types for the tables we import in our SQRL script. The pre-schema file is used by a production DataSQRL server to validate the incoming data from a data source before the script processes the data. In other words, DataSQRL will make sure that all processed future data has the structure and data types that you expected during development. We get peace of mind that data corruption, operational failures, or human mistakes won't corrupt our data service and result in sleepless nights troubleshooting data inconsistencies.

During development, DataSQRL generates the pre-schema file for us. Open up the `pre-schema.yml` file in the same folder as our `customer360.sqrl` script.

```yml
version: 1

datasets:
  - name: nutshop-data
    tables:
      - name: Products
        columns:
          - name: id
            type: integer
            tests:
              - not_null
          - name: name
            type: string
          - name: sizing
            type: string
          - name: weight_in_gram
            type: integer
            tests:
              - not_null
          - name: type
            type: string
          - name: category
            type: string
          - name: usda_id
            type: integer
            tests:
              - not_null
      - name: Orders
        ...(truncated)...
```

The file lists all the columns with their data type and nullability status for each of the tables that we import in our script. This defines the schema contract that will be enforced for all incoming data processed by our script in production. When DataSQRL encounters a record that does not satisfy the pre-schema, it will log an error message with the record and not process it.

In most cases, it is sufficient to take a quick look at the generated pre-schema file to make sure it matches our expectation. Learn more about [schema management](/docs/reference/sources/schema-management) and how to customize the pre-schema if DataSQRL doesn't generate the right pre-schema for your data service.

With the queries and pre-schema in hand, we can submit our SQRL script to production:

```bash
datasqrl submit customer360.sqrl -q ./queries -s pre-schema.yml -r config.json
```

This command submits our `customer360.sqrl` to run on a production DataSQRL server with the folder of query patterns and the pre-schema file as arguments. We added a third argument `-r config.json` to connect to a remote DataSQRL server. If you are running the server locally, you don't need to provide this argument. In most cases, however, the production server is running on another machine and we need to connect to it remotely. The `config.json` configuration file provides all the information necessary to establish a secure connection:

```json
{
  "server": "",
  "port": "5070",
  "credentials":
  {
    "username": "xxx",
    "password": "yyy"
  }
}
```


## Next Steps

You can't get enough of DataSQRL, can you? You're in luck, we put together a page of [Advanced Concepts in DataSQRL](advanced) for you that highlights some advanced aspects of DataSQRL that we did not cover in this tutorial.

---

If you want to learn more about operating DataSQRL server, here are some hand-selected topics for you:

* Unless you run DataSQRL behind a firewall, you need to protect the generated API from unauthorized access. Learn more about [JWT based access control](/docs/reference/api/access-control) to set up authorization for your DataSQRL data service.
* Check out the [complete reference](/docs/reference/operations/overview) for DataSQRL server which lists all server configuration options.
* When you run DataSQRL in production it is a good idea to [monitor DataSQRL server](/docs/reference/operations/monitoring) for visibility and troubleshooting.
