[//]: # (---)

[//]: # (title: "Deployment")

[//]: # (---)

[//]: # ()
[//]: # (# Deploying the Data Pipeline)

[//]: # ()
[//]: # (<img src="/img/generic/undraw_launch.svg" alt="DataSQRL Deployment >" width="40%"/>)

[//]: # ()
[//]: # (We have built a customer 360 application and recommendation engine, now it's time to take it to production.)

[//]: # ()
[//]: # (<!--)

[//]: # (Throughout the tutorial, we used the DataSQRL `run` command to run our SQRL scripts. That command does two things:)

[//]: # ()
[//]: # (1. It compiles the script and API specification into executables.)

[//]: # (2. It orchestrates and runs the executables in a single process.)

[//]: # ()
[//]: # (This convenient for development, but for deployment we want more control over how the executables are compiled and deployed. That's what we are going to cover in this chapter.)

[//]: # (-->)

[//]: # ()
[//]: # (## Run the Compiler)

[//]: # ()
[//]: # (Execute the following command to compile our seedshop script and API specification:)

[//]: # ()
[//]: # (```bash)

[//]: # (docker run --rm -v $PWD:/build datasqrl/cmd compile seedshop.sqrl seedshop.graphqls  --mnt $PWD)

[//]: # (```)

[//]: # ()
[//]: # (<img src="/img/reference/compilation_simplified.svg" alt="DataSQRL Compilation >" width="50%"/>)

[//]: # ()
[//]: # (The compiler takes a SQRL script, API specification, and optional package configuration as arguments and produces an executable for each component of our data pipeline:)

[//]: # ()
[//]: # (- topics and schemas for Kafka)

[//]: # (- a Flink jar with all dependencies)

[//]: # (- a physical data model and index definitions for the database)

[//]: # (- an API model that maps API endpoints to database queries and Kafka topics)

[//]: # ()
[//]: # (## Deploy Executables)

[//]: # ()
[//]: # (You can find all the executables in the `build/deploy` folder. It also contains a [docker-compose]&#40;https://docs.docker.com/compose/&#41; template `docker-compose.yml` for starting all the components of the data pipeline and running the executables.)

[//]: # ()
[//]: # (```bash)

[//]: # (> cd build/deploy)

[//]: # (> docker compose up)

[//]: # (```)

[//]: # ()
[//]: # (The docker-compose template starts a Kafka cluster, Flink cluster, and Postgres database. It initializes the database with the compiled database schema and index structures. It installs the topics in the Kafka cluster. It submits the Flink jar to the Flink cluster. Finally, it launches a server instance with the API model.)

[//]: # ()
[//]: # (To verify that everything is working correctly, you can execute GraphQL queries against the API through GraphiQL running at [`http://localhost:8888//graphiql/`]&#40;http://localhost:8888//graphiql/&#41;.)

[//]: # ()
[//]: # (## Customize Deployment)

[//]: # ()
[//]: # (You can use the provided docker-compose template for your deployments and customize it to suit your needs.)

[//]: # ()
[//]: # (You can deploy the deployment artifacts in any way you'd like. Because DataSQRL compiles to existing data technologies, the only limit is what those underlying technologies support.)

[//]: # ()
[//]: # (For example, you can run the API server in Kubernetes, use a managed database service for the database, or submit the Flink jar to an existing Flink cluster.)

[//]: # ()
[//]: # (You tell DataSQRL where and how you want to deploy the compiled data pipeline by configuring the individual components in the package configuration file `package.json`. The `package.json` file should be in the same directory as your SQRL script.)

[//]: # ()
[//]: # (The package configuration specifies what engines DataSQRL compiles to. DataSQRL calls the data technologies that execute the components of a data pipeline "**engines**". For example, DataSQRL supports [Apache Flink]&#40;https://flink.apache.org/&#41; as a stream engine, [Apache Kafka]&#40;https://kafka.apache.org/&#41; as a log engine, [Postgres]&#40;https://www.postgresql.org/&#41; as a database engine, and [Vert.x]&#40;https://vertx.io/&#41; as a server engine.)

[//]: # ()
[//]: # (Check out [all the engines]&#40;/docs/reference/operations/engines/overview&#41; that DataSQRL supports and how to configure them in the [package configuration]&#40;/sqrl/datasqrl-spec/#packagejson&#41;. )

[//]: # ()
[//]: # (That concludes our introductory tutorial! Great job and enjoy building with data&#40;sqrl&#41;!)

[//]: # ()
[//]: # (<!--)

[//]: # (DataSQRL defines a data pipeline as a graph of engines. Each engine processes data and passes it to the next engine in the stack. DataSQRL compiles your SQRL script into executables that run on each engine. )

[//]: # ()
[//]: # (Specifically, DataSQRL takes the table computations you define in your SQRL scripts and the query endpoints defined in the API specification and compiles them into one comprehensive data flow graph. The data flow graph abstractly represents how the data flows from the sources you import into your SQRL script to the query endpoints exposed by your API and all the processing that has to happen in between.)

[//]: # ()
[//]: # (The "magic" of DataSQRL is the optimizer which maps the processing steps from the data flow graph to the engines in the data pipeline. The optimizer determines which computation should happen in which engine to produce the most efficient data pipeline. It then generates deployment artifacts that execute those computations in the respective engines and makes sure that the data flows smoothly into and between the engines.)

[//]: # ()
[//]: # (-->)

[//]: # ()
[//]: # ()
[//]: # (## Next Steps)

[//]: # ()
[//]: # (* For more information, refer to the reference documentation for [building]&#40;/docs/reference/operations/build&#41; and [deploying]&#40;/docs/reference/operations/deploy/overview&#41; with DataSQRL as well as the [DataSQRL command documentation]&#40;/docs/reference/operations/command&#41; for all the command line options.)

[//]: # (* Wanna know how DataSQRL compiles efficient data pipelines? The [DataSQRL optimizer]&#40;/docs/reference/sqrl/learn&#41; uses a cost model to divide up data processing among the components and generate the most efficient executables. You can [provide hints]&#40;/docs/reference/sqrl/learn#hints&#41; when the optimizer makes the wrong choice.)