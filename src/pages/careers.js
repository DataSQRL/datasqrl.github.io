import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';
import ContactForm from "../components/ContactForm";

const header =  {
  title: 'Work at DataSQRL',
  tagLine: 'Supercharge your Career and Retain your Life.',
  text: (
    <>
      Work on technically challenging problems with massive impact without sacrificing your life and
      within a company committed to your personal growth.
    </>
  ),
  LogoSvg: require('../../static/img/generic/undraw_careers.svg').default,
}

const FORMSPARK_ACTION_URL = "https://submit-form.com/9yOnVWVN";

const DataSQRLWorkBenefits = [
  {
    title: 'Personal Growth',
    image: '/img/generic/undraw_growth.svg',
    description: (
      <>
        You develop a personal growth plan with your mentor based on your skills
        and career goals. We actively invest in your growth plan and support you along the way.
        And this isn't an HR scheme to measure your performance.
      </>
    ),
  },
  {
    title: 'Work Flexibility',
    image: '/img/index/undraw_personal_training_sqrl.svg',
    description: (
      <>
        DataSQRL is a distributed company which allows you to work when and where is best for you.
        We have the experience to build remote teams that work well and maximize your impact without
        getting in the way of your life.
      </>
    ),
  },
  {
    title: 'Customized Benefits',
    image: '/img/index/undraw_active_support_sqrl.svg',
    description: (
      <>
        We customize benefits to your needs instead of throwing the kitchen-sink of benefits at you.
        Health insurance and unlimited PTO are always included. The rest is customized to suit
        your unique lifestyle.
      </>
    ),
  },
];

const WhyWorkAtDataSQRL = [
  {
    title: 'Impactful Mission',
    image: '/img/generic/undraw_launch.svg',
    description: (
      <>
        Our vision is to make building data products as easy as creating a
        spreadsheet. Data is the lifeblood of the modern economy. Our mission
        is to enable people to build with data so they can participate in the data
        economy.
      </>
    ),
    link: 'https://you.datasqrl.com/docs/mission/',
    linkText: 'Our Mission & Vision'
  },
  {
    title: 'Learning Environment',
    image: '/img/generic/undraw_data_points.svg',
    description: (
      <>
        You get to work on hard problems and cutting edge technology with recognized
        experts who provide mentorship and guidance. Moreover, DataSQRL is committed to
        your learning journey with hands-on support and not just abstract career training.
      </>
    ),
    link: 'https://you.datasqrl.com/docs/you/',
    linkText: 'Our Commitment to You'
  },
  {
    title: 'Responsibility with Support',
    image: '/img/index/undraw_active_support_sqrl.svg',
    description: (
      <>
        At DataSQRL, we are building a culture of responsibility that enables you to
        tackle challenging projects with autonomy and resourcefulness. We don't just
        throw you into the cold water, but provide structure and support for you to succeed.
      </>
    ),
    link: 'https://you.datasqrl.com/docs/culture/',
    linkText: 'Our Culture'
  },
];

export default function Careers() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <HomepageFeatures FeatureList={WhyWorkAtDataSQRL} />
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3"></div>
              <div className="col col--6">
                <h2>Why Work At DataSQRL?</h2>
                <p>
                  We started DataSQRL to combine technical innovation with a culture of belonging. We want
                  to build a company that challenges us to learn and grow without sacrificing our lives
                  to long work hours. A place to work where you see your impact, feel supported, and advance
                  the state of technology. Read more about DataSQRL on our <Link to="https://you.datasqrl.com">internal website</Link>.
                </p>

                <p>
                  Tired of busting your a** to make VCs rich? What to be more than a tiny cog in a large corporate machine?
                  At DataSQRL we are not beholden to the hyper-growth mantra and committed to aligning your career path
                  with our mission.
                </p>

                <p>
                  <Link to="/about">We have a lot of experience</Link> building companies, innovative technologies, and high-performance teams.
                  Join us on this journey! Your career and life will thank you for it.
                </p>
              </div>
              <div className="col col--3"></div>
            </div>
          </div>
        </section>
        <HomepageFeatures FeatureList={DataSQRLWorkBenefits} headline="What We Offer"/>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--12">
                <h2>Open Positions</h2>
                <table style={{width: 100 + "%" }}>
                  <thead>
                  <tr>
                    <th>Position</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><strong>Database Compiler Engineer</strong></td>
                    <td>Work on the core compiler technology of DataSQRL which combines database query planning and rewriting with AI optimization.</td>
                    <td>Americas & Europe</td>
                    <td><Link className="button button--secondary" to="/services">Learn More & Apply</Link></td>
                  </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </section>
        <section className={styles.closer}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3">
              </div>
              <div className="col col--6">
                <h2 className="margin-bottom--md">Join DataSQRL</h2>
                <p>
                  Don't see your dream job in the open positions listed above? We are always looking for talented folks
                  to join our team who want to contribute to DataSQRL. Please reach out and we'll find a position for you.
                </p>
                <p>
                  Enter your name, email, and a 2 sentence description of what you'd like to work on or contribute to DataSQRL.
                </p>
                <ContactForm formURL={FORMSPARK_ACTION_URL} messageLabel="What would you like to work on at DataSQRL?" submitText="Apply Now!" context="generic apply" />
              </div>
              <div className="col col--3">
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
