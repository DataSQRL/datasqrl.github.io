import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import HomepageFeatures from '../../components/HomepageFeatures';
import HomepageHeader from '../../components/HomepageHeader';
import {
  WhyDataSQRLList,
  DataSQRLFeaturesList,
  DataSQRLUseCases,
  HowDataSQRLWorks, WhyDataSQRL
} from "../../components/DataSQRLAdvertisement"
import {scriptExamples} from "../../components/ScriptExamples";

const header =  {
                   title: 'Build Event-Driven Microservices',
                   tagLine: 'Build Event-Driven Microservices',
                   text: (
                     <>
                       DataSQRL compiles efficient event-driven microservices to process
                       events in realtime without the architectural complexity and all that data plumbing code.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/quickstart/',
                   buttonText: "Build a Microservice in 10 min",
                   //youtubeURL: 'https://www.youtube.com/embed/mf5q-IdbVQY',
                   LogoSvg: require('/static/img/index/undraw_use_cases_sqrl.svg').default,
                 };

export const UseCaseFeatures = [
  {
    title: 'Decentralized',
    image: '/img/index/undraw_connection_sqrl.svg',
    description: (
      <>
        DataSQRL can consume data from data streams and external data systems enabling domain teams
        to build data products without a central data warehouse or lake.
      </>
    ),
  },
  {
    title: 'Self-Serve',
    image: '/img/generic/undraw_data_points.svg',
    description: (
      <>
        DataSQRL builds data pipelines that expose user-friendly GraphQL APIs for easy consumption
        in a self-serve data platform.
      </>
    ),
  },
  {
    title: 'True Autonomy',
    image: '/img/generic/undraw_careers.svg',
    description: (
      <>
        DataSQRL eliminates the data plumbing that requires dedicated data technology expertise,
        thereby empowering your domain teams to build data products independently.
      </>
    ),
  },
];

const codeGraphQLExample =
`# Query the processed data
type Query {
  SecReading(sensorid: Int!): [SecReading!]
  SensorMaxTemp(sensorid: Int): [SensorMaxTemp!]
}
# Mutation ingest sensor readings as metrics events
type Mutation {
  AddReading(metric: ReadingInput!): CreatedReading
}
# Realtime push notifications on temperature alerts
type Subscription {
  HighTempAlert(sensorid: Int): HighTempAlert
}
`;

const codeSQLExample =
`IMPORT metricsapi.AddReading; -- Ingested through mutation endpoint
IMPORT time.endOfSecond;      -- Import time function
/* Aggregate sensor readings to second */
SecReading := SELECT sensorid, endOfSecond(_source_time) as timeSec,
avg(temperature) as temp FROM AddReading
GROUP BY sensorid, timeSec;
/* Get max temperature in last minute */
SensorMaxTemp := SELECT sensorid, max(temp) as maxTemp
FROM SecReading
WHERE timeSec >= now() - INTERVAL 1 MINUTE
GROUP BY sensorid;
/* Alert on high temperatures */
HighTempAlert := SELECT * FROM SecReading WHERE temp > 50;
`;

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  var exampleIndex = 1;
  return (
    <Layout
      title={header.title}
      description={header.tagline}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--xl margin-top--lg">
              <div className="col col--6">
                <CodeBlock language="graphql">
                  {codeGraphQLExample}
                </CodeBlock>
              </div>
              <div className="col col--5 text--left">
                <h2>Step 1: Define Your Event-Driven Data API</h2>
                <p className="hero__subtitle">
                  GraphQL mutations for event ingestion, queries for data retrieval, and subscriptions
                  for realtime data updates and push notifications.
                </p>
              </div>
            </div>
            <div className="row margin-bottom--xl margin-top--lg">
              <div className="col col--6">
                <CodeBlock language="sql">
                  {codeSQLExample}
                </CodeBlock>
              </div>
              <div className="col col--5 text--left">
                <h2>Step 2: Implement Data Processing in SQL</h2>
                <p className="hero__subtitle">
                  Process incoming events from the API or external data systems in SQL and define
                  the tables that can be queried and streamed through the API.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/getting-started/quickstart/">
                  Try this Example
                </Link>
              </div>
            </div>
            <div className="row margin-bottom--sm margin-top--lg">
              <div className="col col--6 text--center">
                <img src="/img/index/howDataSQRLWorks.svg" alt="DataSQRL Compiles Event-Driven Microservices" />
              </div>
              <div className="col col--5 text--left">
                <h2>Step 3: DataSQRL Compiles Event-Driven Microservice</h2>
                <p className="hero__subtitle">
                  DataSQRL compiles SQL + GraphQL schema into an optimized microservice powered by
                  Apache Flink, Kafka, and Postgres. DataSQRL eliminates all the data plumbing between components
                  allowing you to build quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*<HomepageFeatures FeatureList={UseCaseFeatures} />*/}

        <section className={styles.content}>
          <div className="container">
            <div className="row margin-top--lg">
              <div className="col col--6 text--left">
                <h2>Why DataSQRL?</h2>
                <p className="hero__subtitle">
                  To efficiently expose processed event data in realtime you need event-driven microservices.
                  But building those requires complicated architectures and integrating complex technologies.
                  DataSQRL compiles event-driven architectures and eliminates data plumbing to make your
                  microservice implementation simple.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/services/">
                  Get Help Building ED Architectures
                </Link>
              </div>
              <div className="col col--4 text--center hide-small-screens">
                <img src="/img/index/undraw_use_cases_sqrl.svg" alt="DataSQRL Makes Event-Driven Microservices Simple" />
              </div>
            </div>
          </div>
        </section>

        <HomepageFeatures FeatureList={WhyDataSQRLList} />


        <HomepageFeatures FeatureList={DataSQRLFeaturesList} />
      </main>
    </Layout>
  );
}
