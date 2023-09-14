import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';

const header =  {
                   title: 'DataSQRL Services',
                   tagLine: 'Get Value From Your Data',
                   text: (
                     <>
                We help organizations build successful <Link to="/docs/reference/concepts/data-service">data services</Link> at
                a fraction of the time and cost through innovative <Link to="/docs/getting-started/concepts/datasqrl">technology</Link> and
                 a <Link to="/docs/process/intro">process</Link> focused on value delivery.
                     </>
                   ),
                   buttonLink: '/contact',
                   buttonText: 'Get in Touch',
                   LogoSvg: require('../../static/img/index/undraw_contribute_sqrl.svg').default,
                 }


const WhatDataSQRLServices = [
  {
    title: 'Courses',
    image: '/img/index/undraw_programming_sqrl.svg',
    description: (
      <>
        Our online courses are an easy and convenient way to learn how to use DataSQRL technology
        and build streaming data services. You will quickly get up to speed in an exclusive learning environment with immediate feedback. <br />
        Plus, you get homework for free.
      </>
    ),
    link: '/courses',
    linkText: 'Attend a Course',
  },
  {
    title: 'Workshops',
    image: '/img/index/undraw_personal_training_sqrl.svg',
    description: (
      <>
        A workshop combines learning with hands-on development. Your team learns how to apply the DataSQRL process
        and together we build a custom data service for your organization. <br />
        A workshop empowers your team to build data services autonomously. We promise: no death by Powerpoint.
      </>
    ),
    link: '/contact',
    linkText: 'Schedule a Workshop',
  },
  {
    title: 'Consulting',
    image: '/img/index/undraw_active_support_sqrl.svg',
    description: (
      <>
        Partner with us and we will embed with your team to build a data service from inception
        through production to stable operations. This is the fastest way to jumpstart your
        organization into a data powerhouse. We support all parts of your data journey from outside
        guidance to pair-programming with your team.
      </>
    ),
    link: '/contact',
    linkText: 'Let\'s talk',
  },
];

const WhyDataSQRLServices = [
  {
    title: 'Trusted Expertise',
    image: '/img/generic/undraw_experts.svg',
    description: (
      <>
        With decades of experience, DataSQRL's <Link to="/about">recognized experts</Link> can jumpstart your
        organizations ability to turn data assets into business drivers without a
        mountain of costs. Plus, we'll teach you data karaoke.
      </>
    ),
  },
  {
    title: 'Visible Results',
    image: '/img/generic/undraw_data_points.svg',
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
    image: '/img/generic/undraw_partner.svg',
    description: (
      <>
        <Link to="/about">Our mission</Link> is to help your organization build with data and we will support your
        team all the way. But instead of squeezing you dry for billable hours, our success is your team's
        self-sufficiency.
      </>
    ),
  },
];

export default function Services() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--6">
                  <h2>Simple Technology</h2>
                  <p>
                  To build data services, organizations assemble spaghetti bowls of complex technologies
                  into bespoke data layers that require specialized engineers and are expensive to maintain.
                  </p>
                  <p>
                  <Link to="/docs/getting-started/concepts/datasqrl">DataSQRL technology</Link> enables small teams
                  to quickly build powerful data services with low maintenance overhead by:
                  <ul>
                  <li>Utilizing your developers' existing skills. No need to hire expensive specialists.</li>
                  <li>Eliminating bespoke data layers through a compiler so your devs can focus on adding value.</li>
                  <li>Automatically optimizing data layerss to reduce maintenance, cost, and outages.</li>
                  </ul>
                  </p>
                  <div className="text--center">
                    <Link className="button button--secondary" to="/docs/getting-started/concepts/why-datasqrl">Learn More</Link>
                  </div>
              </div>
              <div className="col col--6 text--left">
                 <h2>Value-focused Process</h2>
                  <p>
                  Many data services fail to deliver value because their development process is fragmented, rigid,
                  and detached from customer feedback.
                  </p>
                  <p>
                  The <Link to="/docs/process/intro">DataSQRL process</Link> empowers organizations to build data services that deliver business outcomes by
                  following these principles:
                  <ul>
                  <li>Focus on customer satisfaction through early and continuous delivery of valuable data services.</li>
                  <li>Harness changing requirements and creative input from all stakeholders for competitive advantage.</li>
                  <li>Integrate with existing software development processes, tools, and frameworks.</li>
                  </ul>
                  </p>
                  <div className="text--center">
                    <Link className="button button--secondary" to="/docs/process/intro">Learn More</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures FeatureList={WhatDataSQRLServices} headline="What We Offer"/>
        <HomepageFeatures FeatureList={WhyDataSQRLServices} headline="Why We Deliver"/>
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
