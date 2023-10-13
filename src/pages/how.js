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
import {WhyDataSQRLList, DataSQRLFeaturesList, DataSQRLUseCases} from "../components/DataSQRLAdvertisement"
import {scriptExamples} from "../components/ScriptExamples"
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';


const header =  {
                   title: 'DataSQRL Compiles Data Pipelines',
                   tagLine: 'DataSQRL Compiles Data Pipelines',
                   text: (
                     <>
                       Implement your data processing in SQL and define your data API in GraphQL.
                       DataSQRL compiles an optimized data pipeline powered by Kafka, Flink, and Postgres.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/quickstart',
                   buttonText: "Try Out DataSQRL in 10 minutes!",
                   youtubeURL: 'https://www.youtube.com/embed/mf5q-IdbVQY',
                   // LogoSvg: require('../../static/img/full_squirrel.svg').default,
                 };


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
                          {option.usecase}
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
            <div className="row margin-bottom--xl margin-top--lg">
              <div className="col col--6">
                <CodeBlock language="graphql">
                  {scriptExamples[exampleIndex].graphql}
                </CodeBlock>
              </div>
              <div className="col col--5 text--left">
                <h2>Step 2: Define API</h2>
                <p className="hero__subtitle">
                  Specify the GraphQL schema for the API. That's how external or internal customers access the processed
                  data.
                </p>
              </div>
            </div>
            <div className="row margin-bottom--xl">
              <div className="col col--6 text--center">
                    <img width="400" src="/img/reference/compiledPipeline.svg" alt="DataSQRL compiled data pipeline" />
              </div>
              <div className="col col--5 text--left">
                <h2>Step 3: Compile to Pipeline</h2>
                <p className="hero__subtitle">
                  DataSQRL compiles SQL + GraphQL schema into an optimized data pipeline integrating
                  Apache Flink, Kafka, Postgres, and API layer into a robust, scalable, and easy to maintain data product.
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
                  <h2>Step 4: Deploy Anywhere</h2>
                  <p className="hero__subtitle">
                      DataSQRL builds optimized executables for each component that run efficiently on your preferred cloud,
                      managed service, or self-hosted.
                  </p>
                  <p className="hero__subtitle">
                    Use the services and technologies you already trust to run your data pipeline.
                  </p>
                  <div className={styles.buttons}>
                      <Link
                          className="button button--primary button--lg"
                          to={scriptExamples[exampleIndex].link}>
                          Try Out this Example!
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


        <HomepageFeatures FeatureList={WhyDataSQRLList} />

        <HomepageFeatures FeatureList={DataSQRLFeaturesList} />

        <HomepageFeatures FeatureList={DataSQRLUseCases} headline="Use Cases" />

        <LinkRotation teaser="Learn more: " links={LearnMoreLinks} />
      </main>
    </Layout>
  );
}
