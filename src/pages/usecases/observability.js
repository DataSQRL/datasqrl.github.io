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
                   title: 'Build Observability and Automation Platforms',
                   tagLine: 'Build Observability and Automation Platforms',
                   text: (
                     <>
                       Turn your metrics into insights with real-time analytics and automate processes with AIOps
                       quickly and without breaking the bank.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/tutorials/iot/intro/',
                   buttonText: "Build Metrics Analytics 10 min",
                   //youtubeURL: 'https://www.youtube.com/embed/mf5q-IdbVQY',
                   LogoSvg: require('/static/img/generic/predictive_analytics_sqrl.svg').default,
                 };

export const UseCaseFeatures = [
  {
    title: 'Situational Awareness',
    image: '/img/generic/undraw_bug.svg',
    description: (
      <>
        DataSQRL makes it easy to integrate multiple data streams and apply real-time analytics
        so you can build dashboards that show the complete picture quickly.
      </>
    ),
  },
  {
    title: 'AIOps',
    image: '/img/generic/ai_squirrel.svg',
    description: (
      <>
        Deploy machine learning and large language models for predictive analytics on your
        metrics or log data streams.
      </>
    ),
  },
  {
    title: 'Save Money',
    image: '/img/index/undraw_decide_sqrl.svg',
    description: (
      <>
        DataSQRL builds optimized data pipelines that efficiently store and process metrics
        data so you can get all the insights at a fraction of the cost.
      </>
    ),
  },
];

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
                <CodeBlock language="sql">
                  {scriptExamples[exampleIndex].script}
                </CodeBlock>
              </div>
              <div className="col col--5 text--left">
                <h2>Automate and Observe Quickly</h2>
                <p className="hero__subtitle">
                  DataSQRL makes it easy to analyse metrics data in real-time with SQL
                  and automate your playbook processes with custom rules or AIOps.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/getting-started/tutorials/iot/intro/">
                  Try this Example
                </Link>
              </div>
            </div>
            <HowDataSQRLWorks />
          </div>
        </section>

        <HomepageFeatures FeatureList={UseCaseFeatures} />

        <section className={styles.content}>
          <div className="container">
            <div className="row margin-top--lg">
              <div className="col col--6 text--left">
                <h2>Why DataSQRL?</h2>
                <p className="hero__subtitle">
                  DataSQRL turns the deluge of metrics data into your competitive advantage by making it easy
                  to build contextual dashboards that provide situational awareness and automating processes
                  with the help of ML.
                  DataSQRL empowers you to turn metrics into insights by eliminating data plumbing.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/services/">
                  Stop Drowning in Metrics Data
                </Link>
              </div>
              <div className="col col--4 text--center hide-small-screens">
                <img src="/img/generic/predictive_analytics_sqrl.svg" alt="DataSQRL turns metrics into insights" />
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
