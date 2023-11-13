import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';
import ContactForm from "../components/ContactForm";
import {APPLY_FORM_URL, DataSQRLWorkBenefits, WhyWorkAtDataSQRL} from "../components/JobPostingFooter";
import {DataSQRLUseCases, HowDataSQRLWorks, WhyDataSQRL} from "../components/DataSQRLAdvertisement";
import featureStyles from "../components/HomepageFeatures.module.css";

const header =  {
  title: 'DataSQRL Courses',
  tagLine: 'Elevate Your Expertise',
  text: (
    <>
      Master the art of building streaming data products and elevate your career by attending an exclusive DataSQRL
      course led by industry experts.
    </>
  ),
  LogoSvg: require('../../static/img/generic/teacher.svg').default,
}

const DataSQRLCourseBenefits = [
  {
    title: 'Elevate Your Expertise',
    image: '/img/generic/undraw_growth.svg',
    description: (
      <>
        DataSQRL courses are designed to give you the practical skills and theoretical knowledge
        to build streaming data products quickly and competently.
      </>
    ),
  },
  {
    title: 'Future Proof',
    image: '/img/generic/undraw_experts.svg',
    description: (
      <>
        Our courses teach you the technologies and techniques you need to succeed in a world that
        runs on data and gain a competitive edge for an AI-powered future.
      </>
    ),
  },
  {
    title: 'Small Classrooms',
    image: '/img/index/undraw_personal_training_sqrl.svg',
    description: (
      <>
        DataSQRL courses have a limited number of seats so you get individualized help and all your questions
        answered.
      </>
    ),
  },
];


export default function Courses() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--sm margin-top--lg">
              <div className="col col--4 text--right">
                <img className={featureStyles.featureProfile} src='/img/headshots/matthias1.png' alt="Matthias Broecheler" />
              </div>
              <div className="col col--5 text--left">
                <h2>Expert Instructor</h2>
                <p>
                  Our courses are led by Dr. Matthias Broecheler. <br />
                  Matthias is the former Chief Technologist at <Link to="https://www.datastax.com/">DataStax</Link>, the company behind the
                  NoSQL <Link to="https://cassandra.apache.org/">Cassandra</Link> database.
                  He invented the <Link to="https://janusgraph.org/">JanusGraph</Link> database (formerly TitanDB) and is an author of
                  O’Reilly’s <Link to="https://www.oreilly.com/library/view/the-practitioners-guide/9781492044062/">“Practitioner’s Guide to Graph Data”</Link>. <br />
                  He is a founder of the database company Aurelius which was acquired by DataStax in 2015. <br />
                </p>
              </div>
            </div>
            <div className="row margin-bottom--md">
              <div className="col col--12">
                <h2>Course Schedule</h2>
                <table style={{width: 100 + "%" }}>
                  <thead>
                  <tr>
                    <th width="30%">Course Title</th>
                    <th>Description</th>
                    <th width="20%">Date</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="hero__subtitle"><strong><Link to="https://www.eventbrite.com/e/building-streaming-ai-applications-with-kafka-and-flink-tickets-718595517537">How to build Streaming AI Applications with Kafka & Flink</Link></strong></td>
                    <td>Our courses for this year have ended or are full. Please check back again in 2024.</td>
                    <td></td>
                    <td></td>
                  </tr>

                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures FeatureList={DataSQRLCourseBenefits} />



        <WhyDataSQRL linkText="Learn more about DataSQRL" linkURL="/" />

        <section className={styles.closer}>
          <div className="container">
            <HowDataSQRLWorks />
          </div>
        </section>

        <HomepageFeatures FeatureList={DataSQRLUseCases} headline="Use Cases" />


      </main>
    </Layout>
  );
}
