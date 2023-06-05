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
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';


const header =  {
                   title: 'Build Event-Driven Applications Faster',
                   tagLine: 'Build Event-Driven Applications Faster',
                   text: (
                     <>
                       DataSQRL makes it easy to process data streams with Apache Flink and query the results via API in realtime.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/quickstart',
                   buttonText: 'Get Started in 5 minutes',
                   LogoSvg: require('../../static/img/full_squirrel.svg').default,
                 };


const DataSQRLFeaturesList = [
    {
        title: 'Fully Customizable',
        image: '/img/generic/undraw_building_blocks.svg'
    },
    {
        title: 'Open Source',
        image: '/img/generic/undraw_code.svg',
    },
    {
        title: 'Robust & Scalable',
        image: '/img/generic/undraw_secure_server.svg',
    },
];

const WhyDataSQRLList = [
  {
    title: 'Saves You Time',
    image: '/img/index/undraw_time_management_sqrl.svg',
    description: (
      <>
        DataSQRL allows you to focus on your data logic because it handles all the annoying
        parts of implementing streaming applications that make you want to choke on your keyboard:
        data plumbing, schema management, error handling, data serving, API generation, and so on.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    image: '/img/index/undraw_programming_sqrl.svg',
    description: (
      <>
        Express your data logic, transformations, and analytics with the SQL you already know.
        DataSQRL allows you to focus on the "what" and worry less about the "how". Import your
        functions when SQL is not enough - DataSQRL makes custom code integration easy.
      </>
    ),
  },
  {
    title: 'Fast & Efficient',
    image: '/img/index/undraw_fast_loading_sqrl.svg',
    description: (
      <>
        DataSQRL builds efficient event-driven microservices that optimize data processing,
        partitioning, index selection, view materialization, denormalization, and query execution.
        There actually is some neat technology behind this buzzword bingo.
      </>
    ),
  },
];

const scriptExamples = [
  {
    name: "Clickstream",
    usecase: "Recommendations",
    description: "Analyze click stream data for real-time content recommendations based on frequency of page visits.",
    script:
      `IMPORT datasqrl.example.clickstream.Click;  -- Import data
/* Find next page visits within 10 minutes */
VisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,
    a.timestamp AS timestamp
    FROM Click b JOIN Click a ON b.userid=a.userid AND
        b.timestamp <= a.timestamp AND
        b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;
/* Recommend pages that are frequently co-visited */
Recommendation := SELECT beforeURL AS url, afterURL AS rec,
    count(1) AS frequency FROM VisitAfter
    GROUP BY url, rec ORDER BY url ASC, frequency DESC;`,
    queryURL: "?query=query%20ContentRecommendation(%24pageURL%3A%20String!)%20%7B%0A%09Recommendation(url%3A%20%24pageURL)%20%7B%0A%20%20%20%20rec%0A%20%20%20%20frequency%0A%20%20%7D%0A%7D&operationName=ContentRecommendation&variables=%7B%0A%20%20\"pageURL\"%3A%20\"mascot_books%2Fa_time_of_gifts\"%0A%7D",
    link: "docs/getting-started/tutorials/recommendations/intro",
  },
  {
    name: "Sensors",
    usecase: "Metrics & Monitoring",
    description: "Aggregate metrics data and monitor maximum temperature in the last hour.",
    script:
      `IMPORT datasqrl.example.sensors.*;     -- Import all data
IMPORT time.*;                -- Import all time functions
/* Aggregate sensor readings to minute */
MinReadings := SELECT sensorid, endOfMinute(time) as timeMin,
        avg(temperature) as temp FROM SensorReading
    GROUP BY sensorid, timeMin;
/* Get max temperature in last hour */
MaxSensorTemp := SELECT sensorid, max(temp) as maxTemp
    FROM MinReadings
    WHERE timeMin >= now() - INTERVAL 1 HOUR
    GROUP BY sensorid;`,
    queryURL: "?query=query%20MachineTemperature(%24machine%3A%20Int!)%20%7B%0A%09Machine(machineid%3A%20%24machine)%20%7B%0A%20%20%20%20maxTemp%0A%20%20%20%20avgTemp%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20\"machine\"%3A%202%0A%7D",
    link: "docs/getting-started/tutorials/iot/intro",
  },
  {
    name: "Seedshop",
    usecase: "Customer 360°",
    description:
      (
        <>
          Integrate and aggregate customer data streams into a customer 360.
          <br /><br />
          DataSQRL supports relationships and nested tables to structure data.
        </>
      ),
    script:
      `IMPORT datasqrl.seedshop.Orders;  -- Import orders stream
IMPORT time.endOfWeek;            -- Import time function
/* Create new table of unique customers */
Users := SELECT DISTINCT customerid AS id FROM Orders;
/* Create relationship between customers and orders */
Users.purchases := JOIN Orders ON Orders.customerid = @.id;
/* Aggregate the purchase history for each user by week */
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(i.quantity * i.unit_price) AS spend
      FROM @.purchases p JOIN p.items i
      GROUP BY week ORDER BY week DESC;`,
    queryURL: "?query=query%20UserSpending(%24userid%3A%20Int!)%20%7B%0A%09Users(id%3A%20%24userid)%20%7B%0A%20%20%20%20spending%20%7B%0A%20%20%20%20%20%20week%0A%20%20%20%20%20%20spend%0A%20%20%20%20%20%20saved%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=UserSpending&variables=%7B%0A%20%20\"userid\"%3A%202%0A%7D",
    link: "/docs/getting-started/quickstart",
  },
];

const getScriptName = (name) => {
  return name.toLowerCase() + ".sqrl";
}

const getOptionName = (name, usecase) => {
  // let result = getScriptName(name);
  // if (usecase) {
  //   result = usecase + ": " + result;
  // }
  return usecase;
}

const LearnMoreLinks = [
    { url: '/docs/getting-started/concepts/why-datasqrl', text: 'Benefits of DataSQRL' },
    { url: 'docs/getting-started/concepts/datasqrl', text: 'How DataSQRL Works' },
    { url: 'docs/getting-started/concepts/when-datasqrl', text: 'When to Use DataSQRL' },
    { url: '/docs/getting-started/quickstart', text: 'Getting Started with DataSQRL' },
    { url: 'docs/getting-started/intro/overview', text: 'The DataSQRL Tutorial' },
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
  { image: '/img/external/docker_logo.svg', title: 'Docker' },
  { image: '/img/external/kubernetes_logo.svg', title: 'Kubernetes' },
  { image: '/img/external/confluent_logo.svg', title: 'Confluent Cloud' },
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
            <div className="row margin-bottom--xl margin-top--lg">
              <div className="col col--6">
                  <div class={styles.usecase}>
                      Pick an Example:&nbsp;
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
                 <h2>Step 1: Implement in SQL</h2>
                 <p className="hero__subtitle">
                   {scriptExamples[exampleIndex].description}
                 </p>
              </div>
            </div>
            <div className="row margin-bottom--xl">
              <div className="col col--6 text--center">
                    <img width="400" src="/img/reference/compiledMicroservice.svg" alt="DataSQRL compiled microservice" />
              </div>
              <div className="col col--5 text--left">
                <h2>Step 2: Compile to Microservice</h2>
                <p className="hero__subtitle">
                  DataSQRL compiles your script into a complete microservice integrating
                  Flink, Kafka, database, and API layer.
                </p>
                {/*<CodeBlock language="bash" wrap="true">*/}
                {/*  docker run --rm -it -p 8888:8888 -v $PWD:/build datasqrl/cmd run {getScriptName(scriptExamples[exampleIndex].name)}*/}
                {/*</CodeBlock>*/}
                {/*<p className="hero__subtitle">*/}
                {/*    Save the SQRL script, run the command above, and see the magic with your own eyes.*/}
                {/*</p>*/}
              </div>
            </div>
          <div className="row margin-bottom--xs">
              <div className="col col--6 hide-small-screens">
                <FeatureGrid FeatureList={SupportedDeployments} columnBase={4} />
              </div>
              <div className="col col--5 text--left">
                  <h2>Step 3: Deploy Anywhere</h2>
                  <p className="hero__subtitle">
                      DataSQRL builds optimized executables for each component that run efficiently on your preferred cloud,
                      managed service, or self-hosted.
                  </p>
                  <div className={styles.buttons}>
                      <Link
                          className="button button--primary button--lg"
                          to={scriptExamples[exampleIndex].link}>
                          Try Out DataSQRL in 5 Minutes!
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
              How to build event-driven microservices
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
                  DataSQRL compiles an event-driven microservice from the SQL script that defines your data processing
                  and GraphQL schema that defines your API. All plumbing installed and ready to go.
                </p>
                <p className="text--left margin-bottom--sm">
                  Wanna know exactly what DataSQRL does and how it works? Click below!
                </p>
                <div className="text--center">
                  <Link className="button button--primary" to="/docs/getting-started/concepts/datasqrl">
                    How DataSQRL Works
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
                  Without DataSQRL you have to implement Flink, Kafka, the database, and API separately and then integrate
                  the components and make sure the data flows efficiently between them. Plus testing, deployment, monitoring and so forth.
                </p>
                <p className="text--left margin-bottom--sm">
                  DataSQRL saves you from all that low-level data plumbing work.
                </p>
                <div className="text--center">
                  <Link className="button button--primary" to="/docs/getting-started/concepts/why-datasqrl">
                    Why Should I Use DataSQRL?
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
