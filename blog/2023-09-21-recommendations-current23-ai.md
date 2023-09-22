---
slug: recommendations-current23
title: "Personalized Recommendations for Current23 with Vector Embeddings in Flink and Kafka"
authors: [matthias]
tags: [AI, Kafka, Flink, Postgres, microservice, DataSQRL]
---

<head>
  <meta property="og:image" content="/img/blog/recommendationsCurrent23.png" />
  <meta name="twitter:image" content="/img/blog/recommendationsCurrent23.png" />
</head>

Let’s build a personalized recommendation engine using AI as an event-driven microservice with Kafka, Flink, and Postgres. And since Current23 is starting soon, we will use the events of this event-driven conference as our input data (sorry for the pun). You’ll learn how to apply AI techniques to streaming data and what talks you want to attend at the Kafka conference - double win!

We will implement the whole microservice in 50 lines of code thanks to the DataSQRL compiler, which eliminates all the data plumbing so we can focus on building.

<img src="/img/blog/recommendationsCurrent23.png" alt="Build AI Recommendations with DataSQRL >|" width="40%"/>

<!-- (Click on the video to watch the tutorial or read below) -->

# What We Will Build

We are going to build a recommendation engine and semantic search that uses AI to provide personalized results for users based on user interactions.

Let’s break that down:
Our input data is a stream of conference events, namely the talks with title, abstract, speakers, time, and so forth. We consume this data from an external data source.

In addition, our microservice has endpoints to capture which talks a user has liked and what interests a user has expressed. We use those user interactions to create a semantic user profile for personalized recommendations and personalized search results.

We create the semantic user profile through vector embeddings, an AI technique for mapping text to numbers in a way that preserves the content of the text for comparison. It’s a great tool for representing the meaning of text in a computable way. It's like mapping addresses (i.e. street, city, zip, country) onto geo-coordinates. It’s hard to compare two addresses, but easy to compute the distance between two geo-coordinates. Vector embeddings do the same thing for natural language text.

Those semantic profiles are then used to serve recommendations and personalized search results. 

<!--truncate-->

To summarize, our microservice will expose the following API (expressed in GraphQL schema):
```graphql
type Mutation {
    Likes(liked: LikedInput!): LikeAdded
    AddInterest(interest: AddInterest!): InterestAdded
}

type Query {
    Events(limit: Int!, offset: Int = 0): [Events!]!
    EventsLiked(userid: String!): [EventsLiked!]!
    RecommendedEvents(userid: String!): [RecommendedEvents!]
    PersonalizedEventSearch(query: String!, userid: String!): [PersonalizedEventSearch!]
}
```
The API has two mutations (for REST folks, think of those as POST): one captures which events a user has liked, and another captures a user’s interests.

We have four query endpoints (those are like GET): two boring ones that return all the events and the events a user has liked and two AI-powered ones that return recommended events for a user and personalized search results for a user’s search query.

You can see the full GraphQL API with the mutation and return types [here](https://gist.github.com/mbroecheler/bd3ba8a8307fc36836a91599b9ff2643).

#  Architecture

We will implement our conference recommendation service as an event-driven microservice for robust, real-time processing at scale. The architecture of the microservice is shown below and uses Kafka for event storage, Flink for stream processing, Postgres for querying, and GraphQL for the API.

<img src="/img/blog/current23_microservice.svg" alt="Event-driven microservice architecture >" width="60%"/>

The data travels counter-clockwise from the top:

1. When a user interaction is captured through the mutation endpoint,
2. the input data is written to Kafka as an event, 
3. which gets picked up by Flink, processed, embedded as a vector, and aggregated into a semantic user profile, 
4. which is stored in Postgres. 
5. When a user requests data through the query endpoint, the data is fetched from Postgres. 
6. In addition, the conference events are ingested by Flink from an external data source and similarly processed and stored in the database for querying.

Each component serves a distinct purpose in this event-driven architecture: the GraphQL server acts as the interface to the outside world, Kafka manages events in motion, Flink processes the event stream, and Postgres stores the processed data for retrieval on request.

# Implementation

Now, we could implement this event-driven microservice by implementing each of the components: implement the GraphQL server, set up the Kafka topics and event schemas, implement a Flink job for data processing, and design a database schema plus SQL queries. We would have to write a ton of data plumbing code: moving data between systems, mapping schemas, designing data models, and stitching it all together. There is a reason event-driven microservices are built by teams of specialists.

There is a better way: We are going to use the open-source DataSQRL compiler to generate all of that data plumbing code for us. That means we can implement our entire microservice in just 50 lines of SQL code as follows ([click here](https://gist.github.com/mbroecheler/315f99fc53768f579014ab9be7cc2fd4) to see the entire SQL script):

## Imports

```sql
IMPORT conference.Events;  --import external data
IMPORT recAPI.Likes;        --import data from API mutation
IMPORT recAPI.AddInterest;  --import data from API mutation

IMPORT string.*;
IMPORT text.*;
IMPORT vector.*;
IMPORT time.parseTimestamp;
```

We import the source tables that we are processing in this script. DataSQRL uses packages to represent data sources for modularity and ease of reuse. It’s like importing an external library but for data.
Our API is treated as a data source which allows us to import the mutation input data as a table.

We are also importing functions for string processing, vector embedding, etc. DataSQRL uses the same packaging structure to organize functions.

Now, onto the actual logic of our script.

## Processing Event Data

```sql
Events.id := coalesce(CAST(regexExtract(url, '(\d*)$') AS INT),0);
Events.full_text := concat(title,'\n',abstract);
Events.startTime := concat(trim(regexExtract(date, '^[^-]*')),' ',trim(regexExtract(time, '\d\d?:\d\d\s(AM|PM)')));
Events.startTimestamp := parseTimestamp(concat(startTime,' PDT'), 'MMMM d, yyyy h:mm a z')
Events.embedding := onnxEmbed(full_text, '/build/embedding/model_quantized.onnx');

Events := DISTINCT Events ON id ORDER BY last_updated DESC;
```

First, we are adding additional columns to the `Events` table and then deduplicating the data stream so we have the most recent version of each event.

We are adding columns mostly to clean up our ingested events data. When you are dealing with external data, cleanup is often necessary. In this case, we need to do some work to extract the event timestamp and id.

We are also adding the `embedding` column to compute a vector embedding for the `title` and `abstract` of each talk. We are using the [ONNX AI](https://onnxruntime.ai/) runtime to execute the embedding model. The embedding model we are using here is a quantized version of the [all-MiniLM-L6-v2](https://www.sbert.net/docs/pretrained_models.html) pre-trained model. This is a model for sentence embedding trained on a large corpus that is small and fast while delivering good performance. “Quantized” means that the model has been transformed to run efficiently on CPUs for those of us who aren’t hoarding GPUs right now.

## Processing User Interactions

```sql
AddInterest.embedding := onnxEmbed(text, '/build/embedding/model_quantized.onnx');

LikeVector := SELECT l.userid, e.embedding, l._source_time
              FROM Likes l TEMPORAL JOIN Events e ON l.eventId = e.id WHERE l.liked;

UserInterestVectors := 
    (SELECT userid, embedding, _source_time FROM LikeVector)
        UNION ALL
    (SELECT userid, embedding, _source_time FROM AddInterest)

UserInterests := SELECT userid, center(embedding) as interestVector 
                 FROM UserInterestVectors GROUP BY userid;
```

Next, we are processing the user interactions. We are adding an embedding vector for the user interests captured in the AddInterst table. We are joining the user `Likes` with the deduplicated events table using a [temporal join](../temporal-join) to get the embedding vector for the liked event. Both of those capture the semantic interests of a user.

Then, we combine those data streams in the `UserInterstVectors` table and aggregate them by computing the centroid for all those vectors for each user. That summary of user interest vectors gives us the semantic profile of each user.

## User Analytics

```sql
UserLikes := DISTINCT Likes ON userid, eventId ORDER BY _source_time DESC;

EventLikeCount := SELECT eventid, count(*) as num, avg(eventid) as test
                  FROM UserLikes l WHERE l.liked GROUP BY eventid;

Events.likeCount := JOIN EventLikeCount l ON @.id = l.eventid;

EventsLiked(@userid: String) := 
    SELECT e.* FROM UserLikes l JOIN Events e ON l.eventId = e.id
    WHERE l.userid = @userid
    ORDER BY e.startTimestamp ASC;
```

To show you that DataSQRL also supports good old-fashioned data analytics, we are adding some user likes analytics. We deduplicate the stream of `Likes` (in case a user liked and then unliked an event) and aggregate them by event into the `EventLikeCount` table.

We add a relationship between `Events` and `EventLikeCount` so that the like count can be accessed from the event through the API. DataSQRL adds relationships to SQL, so you can structure your data for API access and to simplify join expressions.

We add a table function that returns all the events a user has liked which maps onto the query endpoint in the GraphQL API of the same name.

## Personalized Recommendation

```sql
RecommendedEvents(@userid: String) :=
    SELECT e.*, cosineSimilarity(i.interestVector, e.embedding) as score
    FROM UserInterests i JOIN Events e
    WHERE i.userid = @userid ORDER BY score DESC;
```

To serve users personalized recommendations, we compute the similarity between the event embedding and the aggregated semantic user profile of the `UserInterests` table using cosine similarity between the vectors.

## Personalized Search

```sql
PersonalizedEventSearch(@query: String, @userid: String) :=
    SELECT e.*, coalesce(cosineSimilarity(i.interestVector, e.embedding),0.0) as score
    FROM Events e LEFT JOIN UserInterests i ON i.userid = @userid
    WHERE textsearch(@query, title, abstract) > 0
    ORDER BY score DESC;
```

For personalized search, we retrieve those events where the title or abstract matches the search query and then rank the results based on how similar the event is to the aggregated user interests.

# Conclusion

And that’s it. A complete event-driven microservice with vector embedding, personalized search, and user interaction analytics in 50 lines of SQL code.

And DataSQRL handles all the rest: mapping mutations onto Kafka topics and events, ingesting those events into Flink and mapping schemas, designing the physical data models in Kafka, Flink, and the database, mapping API calls onto database queries, optimizing index structures, and moving the data efficiently between all those components. That’s a whole lot of soul-sucking work we did not have to do.

If you want to learn more about DataSQRL, visit [datasqrl.com](/), take a look at the [in-depth tutorial](/docs/getting-started/intro/overview/), or [join the community](/community) on [Discord](https://discord.gg/49AnhVY2w9) to ask questions and share your thoughts and feedback.

# Run Microservice

Want to run the recommendation microservice yourself? It’s easy. Follow these steps:

1. In your command line, create an empty folder and go into the folder:
```bash
mkdir current23; cd current23
```
2. Download the SQRL script, GraphQL schema, vector embedding model and event data source by [clicking here](https://drive.google.com/file/d/15p6erQnG8S4eDVgjxiOdYEfvqdEgjc0M/view?usp=sharing), moving the zip file into folder you just created and unpacking it. You should see 3 directories (conference, conferencedata, and embedding) as well as a `sqrl` and `graphqls` file. The SQRL script and GraphQL schema are the ones we walked through above.

3. Compile the SQRL script and GraphQL schema into an event-driven microservice by running:
```bash
docker run --rm -v $PWD:/build datasqrl/cmd:dev compile conference-recommendation.sqrl recAPI.graphqls --mnt $PWD
```

:::info
Disclaimer: We are using the preview release of DataSQRL to showcase the vector embedding feature that's coming in the next release.
Use the latest tag for the stable release.
:::


4. Stand up the entire microservice in docker by running:
```bash
(cd build/deploy; docker compose up)
```


Note, that the microservice does not contain DataSQRL. DataSQRL is only the compiler and generates the docker-compose script for orchestrating the microservice. The microservice itself only consists of Kafka, Flink, Postgres, and GraphQL server.
If you want to take a look at the deployment artifacts that DataSQRL compiled for each component, take a peek inside the `build/deploy` folder.

Once the microservice is up and running (it takes a little while for all the components to boot up and initialize), the GraphQL API is accessible. You can access the API directly or open [http://localhost:8888/graphiql/](http://localhost:8888/graphiql/) to try out queries in your browser.

For example, run this query to get a list of events.

```graphql
{
    Events(limit:20) {
        id
        title
        abstract
        time
        location
    }
}
```

Add a user interest by running the following mutation:

```graphql
mutation AddInterest($interest: AddInterest!) {
  AddInterest(interest: $interest) {
  _source_time
}}
```

And add the following query payload under "Query Variables":
```json
{
  "interest": {
    "userid": "1234",
    "text": "I want to learn more about Apache Flink and how to use it for real-time stream processing."
  }
}
```

Then look at the recommendations for the user `1234`:
```graphql
{
  RecommendedEvents(userid: "1234") {
    id
    title
    abstract
  }
}
```

You can like an event with this mutation:
```graphql
mutation AddLike($liked: LikedInput!) {
  Likes(liked: $liked) {
  _source_time
}}
```
and this payload:
```json
{
  "liked": {
    "userid": "1234",
    "eventId": 1136822,
    "liked": true
  }
}
```

And then see how that impacts the personalized search results with this query:
```graphql
{
  PersonalizedEventSearch(query: "kafka", userid: "1234") {
    id
    title
    abstract
  }
}
```
As you can see, our search results are strongly biased in the direction of Apache Flink since that's what we liked a Flink talk and expressed an interest in Flink.

Enjoy playing with the API and finding the talks you want to attend at the conference.

To shut the microservice down, hit CTRL-C and then run `(cd build/deploy; docker compose down -v)` to remove the volumes.


