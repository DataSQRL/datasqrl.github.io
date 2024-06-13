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
                   title: 'Build A Streaming Data Mesh',
                   tagLine: 'Build A Streaming Data Mesh',
                   text: (
                     <>
                       DataSQRL empowers your domain teams to autonomously build decentralized data products
                       by eliminating data plumbing
                       and provides the tooling for a self-service data platform.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/tutorials/overview/',
                   buttonText: "Build a Data Product in 10 min",
                   //youtubeURL: 'https://www.youtube.com/embed/mf5q-IdbVQY',
                   LogoSvg: require('/static/img/generic/data_mesh_sqrl.svg').default,
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  var exampleIndex = 2;
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
                <h2>No Streaming Data Expertise Required</h2>
                <p className="hero__subtitle">
                  With DataSQRL, domain teams can quickly build streaming data products with their
                  existing SQL knowledge and without having to learn the intricacies of
                  complex data technologies.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/getting-started/tutorials/overview/">
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
                  The foundational principle of data mesh architectures is domain ownership.
                  But your domain teams don't have the data technology expertise to implement all the data
                  plumbing that streaming data products require.
                  DataSQRL eliminates data plumbing so domain teams can build successful
                  data products autonomously.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/services/">
                  Let's Build a Data Mesh Together
                </Link>
              </div>
              <div className="col col--4 text--center hide-small-screens">
                <img src="/img/generic/data_mesh_sqrl.svg" alt="DataSQRL empowers your data mesh" />
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
