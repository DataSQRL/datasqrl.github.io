import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';
import LinkRotation from "../components/LinkRotation";
import FeatureGrid from "../components/FeatureGrid";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const header =  {
                   title: 'DataSQRL',
                   tagLine: 'Build Streaming Data APIs In Minutes',
                   text: (
                     <>
                         Real-time analytics on data streams and datasets served through fast APIs without the
                         brain-numbing orchestration of data pipelines.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/quickstart',
                   buttonText: 'Get Started in 5 minutes',
                   LogoSvg: require('../../static/img/full_squirrel.svg').default,
                 };


const DataSQRLFeaturesList = [
    {
        title: 'Customizable',
        image: '/img/generic/undraw_building_blocks.svg',
        linkText: 'Learn More',
        description: (
            <>
                Edit the API, connect any data source, bring your own functions -- DataSQRL
                is fully customizable.
                Say goodbye to generic data APIs and let your creativity roam free like a squirrel.
            </>
        ),
    },
    {
        title: 'Open Source',
        image: '/img/generic/undraw_code.svg',
        linkText: 'Learn More',
        description: (
            <>
                DataSQRL is an open-source project. It's free to use and you can view the
                entire source code.
                If you are in a giving mood, you could even <Link to="/docs/dev/contribute">contribute</Link> to DataSQRL yourself.
            </>
        ),
    },
    {
        title: 'Robust & Scalable',
        image: '/img/generic/undraw_secure_server.svg',
        linkText: 'Learn More',
        description: (
            <>
                The DataSQRL compiler produces code that runs on proven data technologies like
                Apache Flink and Postgres. That means you can verify the output and rest assured
                that your data API is resilient and scalable.
            </>
        ),
    },
];

const WhyDataSQRLList = [
  {
    title: 'Saves You Time',
    image: '/img/index/undraw_time_management_sqrl.svg',
    description: (
      <>
        DataSQRL allows you to focus on your data logic because it handles all the annoying
        parts of building data services that make you want to choke on your keyboard:
        pipeline plumbing, schema management, error handling, data serving, API generation, and so on.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    image: '/img/index/undraw_programming_sqrl.svg',
    description: (
      <>
        Express your data logic, transformations, and analytics with the SQL you already know.
        Development with SQL sounds like eating soup with a sword but a bit of syntactic
        sugar makes it productive, easy to debug, and simple to maintain.
      </>
    ),
  },
  {
    title: 'Fast & Efficient',
    image: '/img/index/undraw_fast_loading_sqrl.svg',
    description: (
      <>
        DataSQRL compiles efficient data architectures that optimize partitioning,
        data flows, index selection, materialization, denormalization, and query execution.
        There actually is some neat technology behind this buzzword bingo.
      </>
    ),
  },
];

const scriptExamples = [
  {
    name: "Seedshop",
    usecase: "Customer 360",
    description: "Integrate and aggregate customer data streams into a customer 360 with SQRL.",
    script:
      `IMPORT datasqrl.seedshop.Orders;  -- Import orders stream
IMPORT time.endOfWeek;            -- Import time function
/* Augment orders with total price */
Orders.items.total := quantity * unit_price - discount?0.0;
Orders.totals := SELECT sum(total) as price,
                  sum(discount?0.0) as saving FROM @.items;
/* Create new table of unique customers */
Users := SELECT DISTINCT customerid AS id FROM Orders;
/* Create relationship between customers and orders */
Users.purchases := JOIN Orders ON Orders.customerid = @.id;
/* Aggregate the purchase history for each user by week */
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;`,
    queryURL: "?query=query%20UserSpending(%24userid%3A%20Int!)%20%7B%0A%09Users(id%3A%20%24userid)%20%7B%0A%20%20%20%20spending%20%7B%0A%20%20%20%20%20%20week%0A%20%20%20%20%20%20spend%0A%20%20%20%20%20%20saved%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=UserSpending&variables=%7B%0A%20%20\"userid\"%3A%202%0A%7D",
    link: "/docs/getting-started/quickstart",
  },
  {
    name: "Clickstream",
    usecase: "Recommendations",
    description: "Analyze click stream data for content recommendations with SQRL.",
    script:
      `IMPORT datasqrl.example.clickstream.Click;  -- Import data
/* Most visited pages in the last day */
Trending := SELECT url, count(1) AS total
    FROM Click WHERE timestamp > now() - INTERVAL 1 DAY
    GROUP BY url ORDER BY total DESC;
/* Find next page visits within 10 minutes */
VisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,
    a.timestamp AS timestamp
    FROM Click b JOIN Click a ON b.userid=a.userid AND
        b.timestamp <= a.timestamp AND
        b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;
/* Recommend pages that are visited shortly after */
Recommendation := SELECT beforeURL AS url, afterURL AS rec,
    count(1) AS frequency FROM VisitAfter
    GROUP BY url, rec ORDER BY url ASC, frequency DESC;`,
    queryURL: "?query=query%20ContentRecommendation(%24pageURL%3A%20String!)%20%7B%0A%09Recommendation(url%3A%20%24pageURL)%20%7B%0A%20%20%20%20rec%0A%20%20%20%20frequency%0A%20%20%7D%0A%7D&operationName=ContentRecommendation&variables=%7B%0A%20%20\"pageURL\"%3A%20\"mascot_books%2Fa_time_of_gifts\"%0A%7D",
    link: "docs/getting-started/tutorials/recommendations/intro",
  },
  {
    name: "Sensors",
    usecase: "Internet of Things",
    description: "Monitor and aggregate metrics data with SQRL.",
    script:
      `IMPORT datasqrl.example.sensors.*;     -- Import all data
IMPORT time.*;                -- Import all time functions
/* Aggregate sensor readings to minute */
MinReadings := SELECT sensorid, endOfMinute(time) as timeMin,
        avg(temperature) as temp FROM SensorReading
    GROUP BY sensorid, timeMin;
/* Create table of sensors and relate to readings */
Sensors := DISTINCT Sensors ON id  ORDER BY placed DESC;
Sensors.readings := JOIN MinReadings r ON r.sensorid = @.id;
/* Create table of machines with recent temperature */
Machine := SELECT s.machineid, max(temp) as maxTemp,
    avg(temp) as avgTemp
    FROM Sensors s JOIN s.readings
    WHERE timeMin >= now() - INTERVAL 1 HOUR
    GROUP BY s.machineid;`,
    queryURL: "?query=query%20MachineTemperature(%24machine%3A%20Int!)%20%7B%0A%09Machine(machineid%3A%20%24machine)%20%7B%0A%20%20%20%20maxTemp%0A%20%20%20%20avgTemp%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20\"machine\"%3A%202%0A%7D",
    link: "docs/getting-started/tutorials/iot/intro",
  }
];

const getScriptName = (name) => {
  return name.toLowerCase() + ".sqrl";
}

const getOptionName = (name, usecase) => {
  let result = getScriptName(name);
  if (usecase) {
    result = usecase + ": " + result;
  }
  return result;
}

const LearnMoreLinks = [
    { url: '/docs/getting-started/concepts/why-datasqrl', text: 'Benefits of DataSQRL' },
    { url: '/docs/getting-started/quickstart', text: 'Getting Started with DataSQRL' },
    { url: 'docs/getting-started/concepts/datasqrl', text: 'How DataSQRL Works' },
    { url: 'docs/getting-started/concepts/sqrl', text: 'The SQRL Language' },
    { url: 'docs/getting-started/comparison/overview', text: 'When to Use DataSQRL' },
];

const SupportedLanguages = [
  { image: '/img/external/nodejs_logo.svg', title: 'NodeJS' },
  { image: '/img/external/react_logo.svg', title: 'React' },
  { image: '/img/external/vue_logo.svg', title: 'Vue' },
  { image: '/img/external/python_logo.svg', title: 'Python' },
  { image: '/img/external/java_logo.svg', title: 'Java' },
  { image: '/img/external/spring_logo.svg', title: 'Spring' },
  { image: '/img/external/kotlin_logo.svg', title: 'Kotlin' },
  { image: '/img/external/scala_logo.svg', title: 'Scala' },
];

const SupportedDeployments = [
  { image: '/img/external/aws_logo.svg', title: 'AWS' },
  { image: '/img/external/gcp_logo.svg', title: 'GCP' },
  { image: '/img/external/azure_logo.svg', title: 'Azure' },
  { image: '/img/external/awsflink_logo.png', title: 'Kinesis Data Analytics' },
  { image: '/img/external/flink_logo.svg', title: 'Apache Flink' },
  { image: '/img/external/postgres_logo.svg', title: 'Postgres' },
  { image: '/img/external/awsrds_logo.svg', title: 'AWS RDS' },
  { image: '/img/external/cloudsql_logo.png', title: 'Cloud SQL' },
];

export default function Home() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const handleExampleChange = (event) => {
    const index = event.target.selectedIndex;
    setExampleIndex(index);
  };

  const [withoutDataSQRLRowVisible, setWithoutDataSQRLRowVisible] = useState(false);

  const handleWithoutDataSQRLButtonClick = () => {
    setWithoutDataSQRLRowVisible(true);
  };

  const handleWithDataSQRLButtonClick = () => {
    setWithoutDataSQRLRowVisible(false);
  };

  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={header.title}
      description={header.tagline}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--xs">
              <div className="col col--8">
                <p className="hero__subtitle">
                  DataSQRL is a compiler and build tool for streaming data pipelines. <br />
                  Build data services in 4 steps:
                </p>
              </div>
            </div>
            <div className="row margin-bottom--lg">
              <div className="col col--6">
                  <div class={styles.usecase}>
                      Pick a Use Case:&nbsp;
                    <select onChange={handleExampleChange}>
                      {scriptExamples.map((option, index) => (
                        <option key={index} value={option.name}>
                          {getOptionName(option.name, option.usecase)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <CodeBlock language="sql">
                    {scriptExamples[exampleIndex].script}
                  </CodeBlock>
              </div>
              <div className="col col--5 text--left">
                 <h2>Step 1</h2>
                 <p className="hero__subtitle">
                   {scriptExamples[exampleIndex].description}
                 </p>
                  <p className="hero__subtitle">
                  <Link to="/docs/getting-started/concepts/sqrl">SQRL</Link> is a SQL dialect developers call "not awful"
                  that supports data streams, relationships, and nested data.
                  </p>
              </div>
            </div>
            <div className="row margin-bottom--lg">
              <div className="col col--6 text--center">
                    <img className={styles.pipelineSvg} src="/img/generic/highlevel_pipeline.svg" alt="DataSQRL compiled pipeline" />
              </div>
              <div className="col col--6 text--left">
                <h2>Step 2</h2>
                <p className="hero__subtitle">
                  DataSQRL compiles your script into a data pipeline that serves the processed data
                  as a GraphQL API.
                </p>
                <CodeBlock language="bash" wrap="true">
                  docker run -it -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run {getScriptName(scriptExamples[exampleIndex].name)}
                </CodeBlock>
                <p className="hero__subtitle">
                    Save the SQRL script, run the command above, and see the magic with your own eyes.
                </p>
              </div>
            </div>
            <div className="row margin-bottom--lg">
              <div className="col col--6 hide-small-screens">
                <FeatureGrid FeatureList={SupportedLanguages} columnBase={3} />
              </div>
              <div className="col col--5 text--left">
                 <h2>Step 3</h2>
                 <p className="hero__subtitle">
                 Query the API from your favorite language, framework,
                   or directly <Link id="localhost-link-id" to={"http://localhost:8888/graphiql/" + scriptExamples[exampleIndex].queryURL} target="_blank">in the browser</Link>.
                   <Tooltip anchorSelect="#localhost-link-id" className="tooltip" clickable>
                     Run the command above first for this link to work
                     {/*<br />Otherwise, use the online <Link to="." target="_blank">DataSQRL playground</Link>*/}
                   </Tooltip>
                 </p>
                 <p className="hero__subtitle">
                     Then repeat the cycle until your data feature is complete or you run out of Mountain Dew.
                 </p>
              </div>
            </div>
          <div className="row margin-bottom--xs">
              <div className="col col--6 hide-small-screens">
                <FeatureGrid FeatureList={SupportedDeployments} columnBase={3} />
              </div>
              <div className="col col--5 text--left">
                  <h2>Step 4</h2>
                  <p className="hero__subtitle">
                      Ready to ship? DataSQRL builds optimized deployment artifacts that run on your preferred cloud,
                      managed service, or self-hosted.
                  </p>
                  <p className="hero__subtitle">
                      Let's have some fun building with data!
                  </p>
                  <div className={styles.buttons}>
                      <Link
                          className="button button--primary button--lg"
                          to={scriptExamples[exampleIndex].link}>
                          Read {scriptExamples[exampleIndex].usecase} Tutorial
                      </Link>
                  </div>
                  {/*<div className={styles.buttons}>*/}
                  {/*  <Link*/}
                  {/*    className="button button--primary button--lg"*/}
                  {/*    to={scriptExamples[exampleIndex].link}>*/}
                  {/*    Build {scriptExamples[exampleIndex].name} in Playground*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
              </div>
          </div>
          </div>
        </section>

        <HomepageFeatures FeatureList={DataSQRLFeaturesList} />

        <section className={styles.content}>
          <div className="container">
            <h2>
              How to build data APIs
              <button id="withDataSQRLButton" className={clsx(
                "button button--secondary", styles.headerButton, withoutDataSQRLRowVisible && "button--outline")}
                      onClick={handleWithDataSQRLButtonClick}
              >with DataSQRL</button>
              <button id="withoutDataSQRLButton" className={clsx(
                "button button--secondary", styles.headerButton, !withoutDataSQRLRowVisible && "button--outline")}
                      onClick={handleWithoutDataSQRLButtonClick}
              >without DataSQRL</button>
            </h2>
            <div id="withDataSQRLRow" className={clsx("row", withoutDataSQRLRowVisible && styles.notVisible)}>
              <div className="col col--8">
                <img className={styles.pipelineSvg} src="/img/index/withDataSQRL.svg" loading="lazy" alt="Building Data APIs with DataSQRL" />
              </div>
              <div className="col col--4">
                <p className="text--left margin-bottom--sm">
                  The DataSQRL compiler does the laborious "data plumbing" work and builds optimized data pipelines that run smoothly in production.
                </p>
                <p className="text--left margin-bottom--sm">
                  Wanna know exactly what the DataSQRL compiler does and how it works? Click below!
                </p>
                <div className="text--center">
                  <Link className="button button--primary" to="/docs/getting-started/intro/compiler">
                    How the Sausage Is Made
                  </Link>
                </div>
              </div>
            </div>
            <div id="withoutDataSQRLRow" className={clsx("row", !withoutDataSQRLRowVisible && styles.notVisible)}>
              <div className="col col--8">
                <img className={styles.pipelineSvg} src="/img/index/withoutDataSQRL.svg" loading="lazy" alt="Building Data APIs without DataSQRL" />
              </div>
              <div className="col col--4">
                <p className="text--left margin-bottom--sm">
                  Without DataSQRL you have to orchestrate multiple data technologies, scripts, and configurations into a coherent
                  data pipeline.
                </p>
                <p className="text--left margin-bottom--sm">
                  For a more detailed breakdown of all the work DataSQRL saves you from, check out:
                </p>
                <div className="text--center">
                  <Link className="button button--primary" to="/docs/reference/concepts/data-pipeline">
                    How to Build a Data Pipeline
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomepageFeatures FeatureList={WhyDataSQRLList} />

        <LinkRotation teaser="Learn more: " links={LearnMoreLinks} />
      </main>
    </Layout>
  );
}
