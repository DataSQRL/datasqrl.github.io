# Deploy on AWS

This documentation walks you through the steps of deploying a data service compiled by DataSQLR on AWS managed services. Using managed services eliminates most of the operational burden of running a data service, auto-scales each engine based on the amount of incoming data and API workload, and gets you up and running with a production-grade data service in an under an hour.

To set up a DataSQRL data service on AWS managed services, follow these 3 steps.

:::warn
This documentation is work in progress. Please check back soon.
:::

## Step 1: Set up Aurora Serverless

### 1.1: Start Aurora Serverless

Start an Aurora Serverless Postgres-compatible database.

### 1.2: Configure Database in Package Configuration

Enter database URL and credentials in the database engine configuration in the `package.json`.

Run compiler.

### 1.3: Deploy Database Schema

Install the DataSQRL SQL database schema and index structures in the database.

## Step 2: Deploy on Kinesis Data Analytics

Deploy the compiled Flink jar on Kinesis Data Analytics

## Step 3: Deploy API server on Fargate