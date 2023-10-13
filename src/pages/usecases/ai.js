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
                   title: 'Build Streaming AI Applications',
                   tagLine: 'Build Streaming AI Applications',
                   text: (
                     <>
                       Enrich your data streams with AI models and machine learning to build powerful data products
                       in a fraction of the time.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/tutorials/recommendations/intro/',
                   buttonText: "Enrich Data With AI in 10 min",
                   //youtubeURL: 'https://www.youtube.com/embed/mf5q-IdbVQY',
                   LogoSvg: require('/static/img/generic/ai_squirrel_double.svg').default,
                 };

export const UseCaseFeatures = [
  {
    title: 'Vector Embedding',
    image: '/img/generic/undraw_contact.svg',
    description: (
      <>
        DataSQRL supports vector embeddings, vector similarity, and vector search to build
        custom semantic search engines and personalized user experiences.
      </>
    ),
  },
  {
    title: 'Feature Construction',
    image: '/img/generic/undraw_data_points.svg',
    description: (
      <>
        Save a lot of time by constructing features with the SQL you already know and feed
        them directly into your AI or ML model.
      </>
    ),
  },
  {
    title: 'Complete Integration',
    image: '/img/generic/undraw_building_blocks.svg',
    description: (
      <>
        DataSQRL compiles integrated AI applications that combine data ingestion, data transformation,
        feature construction, model application, and API serving in one data pipeline.
      </>
    ),
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  var exampleIndex = 0;
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
                <h2>Simplify AI</h2>
                <p className="hero__subtitle">
                  Using SQL to construct features, compute vector embeddings, apply machine learning models,
                  or deploy deep-neural networks allows you to build production-grade
                  AI applications quickly.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/getting-started/tutorials/recommendations/intro/">
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
                  Most AI projects fail because productizing AI models requires
                  complex data plumbing to compute real-time features on data streams.
                  DataSQRL eliminates data plumbing allowing you to focus on data transformation
                  and model deployment. Utilize the power of AI without getting bogged down
                  in implementation details.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/services/">
                  Let's Build AI Data Products
                </Link>
              </div>
              <div className="col col--4 text--center hide-small-screens">
                <img src="/img/generic/ai_squirrel_double.svg" alt="DataSQRL unlocks the power of AI" />
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
