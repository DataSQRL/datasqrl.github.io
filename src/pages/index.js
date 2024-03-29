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
import {
  WhyDataSQRLList,
  DataSQRLFeaturesList,
  DataSQRLUseCases,
  HowDataSQRLWorks, WhyDataSQRL
} from "../components/DataSQRLAdvertisement"
import FeatureGrid from "../components/FeatureGrid";
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';


const header =  {
                   title: 'Build Realtime Data Products',
                   tagLine: 'Operating System for Data™',
                   text: (
                     <>
                       Build GenAI applications, data products, and data-driven features quickly at scale
                       without a PhD in data systems.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/quickstart',
                   buttonText: "Build a Data Product in 10 min",
                   youtubeURL: 'https://www.youtube.com/embed/TNrGHwf_65U',
                   //LogoSvg: require('../../static/img/full_squirrel.svg').default,
                 };

export default function Home() {
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
              <div className="col col--5 text--left">
                <h2><span>With DataSQRL </span><span className="text--primary">= Build Quickly</span></h2>
                <img className={styles.pipelineSvg} src="/img/index/withDataSQRL3.svg" loading="lazy" alt="Building Data Products with DataSQRL" />
              </div>
              <div className="col col--1">
              </div>
              <div className="col col--6 text--left">
                <h2><span>Without DataSQRL </span><span className="text--primary">= Data Plumbing Nightmare</span></h2>
                <img className={styles.pipelineSvg} src="/img/index/withoutDataSQRL3.svg" loading="lazy" alt="Building Data APIs without DataSQRL" />
              </div>
            </div>
            <HowDataSQRLWorks />
          </div>
        </section>

        <HomepageFeatures FeatureList={DataSQRLUseCases} headline="Use Cases" />

        <WhyDataSQRL linkText="How DataSQRL Helps Your Team" linkURL="/services" />

        <HomepageFeatures FeatureList={WhyDataSQRLList} />


        <HomepageFeatures FeatureList={DataSQRLFeaturesList} />
      </main>
    </Layout>
  );
}
