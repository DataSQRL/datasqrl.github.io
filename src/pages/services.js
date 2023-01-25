import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const LogoSvg = require('../../static/img/index/undraw_contribute_sqrl.svg').default;
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
      <div className="row">
        <div className={clsx('col col--8')}>
            <h1 className="hero__title">Get Value From Your Data</h1>
            <p className="hero__subtitle">
                We help organizations build successful <Link to="">data services</Link> at a fraction of the time and cost
                through innovative <Link to="">technology</Link> and a <Link to="">process</Link> focused on value delivery.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/contact">
                Get in Touch
              </Link>
            </div>
        </div>
        <div className={clsx('col col--4')}>
            <LogoSvg  className={styles.bannerSvg} alt="DataSQRL can help you build with data" />
        </div>
      </div>
      </div>
    </header>
  );
}


const WhyDataSQRLList = [
  {
    title: 'Trusted Expertise',
    Svg: require('../../static/img/index/undraw_active_support_sqrl.svg').default,
    description: (
      <>
        With decades of experience, DataSQRL's recognized experts can jumpstart your
        organizations ability to turn data assets into business drivers without a
        mountain of costs. Plus, we'll teach you data karaoke.
      </>
    ),
  },
  {
    title: 'Visible Results',
    Svg: require('../../static/img/index/undraw_online_shopping_sqrl.svg').default,
    description: (
      <>
        We are hands-on and work closely with your team to deliver working data
        services and products in a short period of time. We love making data productive
        and <Link to="https://en.wikipedia.org/wiki/KISS_principle">KISS</Link> to make it happen.
      </>
    ),
  },
  {
    title: 'Reliable Partner',
    Svg: require('../../static/img/index/undraw_personal_training_sqrl.svg').default,
    description: (
      <>
        Our mission is to help your organization build with data and we will support your
        team all the way. But instead of piling up billable hours, our success is your team's
        self-sufficiency.
      </>
    ),
  },
];

export default function Services() {
  return (
    <Layout
      title="DataSQRL Services"
      description="Get Value from Your Data">
      <HomepageHeader />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--6">
                  <h2>Simplified Technology</h2>
                  <p>
                  To build data services, organizations assemble spaghetti bowls of complex technologies
                  into bespoke data pipelines that require specialized engineers and are expensive to maintain.
                  </p>
                  <p>
                  DataSQRL technology enables small teams to quickly build powerful data services with low
                  maintenance overhead by:
                  <ul>
                  <li>Utilizing your developers' existing skills. No need to hire expensive specialists.</li>
                  <li>Eliminating bespoke data pipelines through a compiler so your devs can focus on adding value.</li>
                  <li>Automatically optimizing data pipelines to reduce maintenance, cost, and outages.</li>
                  </ul>
                  </p>
                  <div className="text--center">
                    <Link className="button button--secondary" to="/">Learn More</Link>
                  </div>
              </div>
              <div className="col col--6 text--left">
                 <h2>Value-focused Process</h2>
                  <p>
                  Many data services fail to deliver value because their development process is fragmented, rigid,
                  and detached from customer feedback.
                  </p>
                  <p>
                  The DataSQRL process empowers organizations to build data services that deliver business outcomes by
                  following these principles:
                  <ul>
                  <li>Focus on customer satisfaction through early and continuous delivery of valuable data services.</li>
                  <li>Harness changing requirements and creative input from all stakeholders for competitive advantage.</li>
                  <li>Integrate with existing software development processes, tools, and frameworks.</li>
                  </ul>
                  </p>
                  <div className="text--center">
                    <Link className="button button--secondary" to="/">Learn More</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures FeatureList={WhyDataSQRLList} />
        <section className={styles.closer}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--2">
              </div>
              <div className="col col--8">
              <p className="hero__subtitle">
              Your data is valuable. We can help you turn it into new revenue channels, delighted customers, or improved
              business processes.
              </p>
              <div className="text--center">
                <Link className="button button--primary button--lg" to="/contact">Get in Touch</Link>
                <Link className="button button--primary button--lg" to="/contact">Find out How</Link>
              </div>
              </div>
              <div className="col col--2">
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
