import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../index.module.css';
import HomepageFeatures from '../../components/HomepageFeatures';
import HomepageHeader from '../../components/HomepageHeader';
import ContactForm from "../../components/ContactForm";
import JobPostingFooter, {APPLY_FORM_URL, DataSQRLWorkBenefits, WhyWorkAtDataSQRL} from "../../components/JobPostingFooter";

const header =  {
  title: 'Job Posting: Database Compiler Engineer',
  tagLine: 'Database Compiler Engineer',
  text: (
    <>
      Work on the core compiler technology of DataSQRL which combines database
      query planning and rewriting with AI optimization.
    </>
  ),
  LogoSvg: require('../../../static/img/generic/undraw_careers.svg').default,
}


export default function JobPosting() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--2"></div>
              <div className="col col--8">
                <p>
                  At DataSQRL, we are building <Link to="https://github.com/DataSQRL/sqrl">innovative open-source technology</Link> that
                  empowers people to build streaming data and realtime AI applications.
                  We need your help to improve the core compiler component of DataSQRL which plans, optimizes, and translates
                  the high-level SQL language into executables for each engine.
                </p>
                <p>
                  As a founding engineer, you have the opportunity to build an engineering powerhouse and set the
                  technical direction for DataSQRL while working on innovative technology within
                  an open-source community and supported by domain experts at DataSQRL.
                </p>

                <p>
                  <strong>Technologies We Use</strong><br />
                  Our tech stack combines Apache Flink, Apache Calcite, Postgres, Apache Kafka, and Java.
                </p>

                <p>
                  <strong>Location</strong><br />
                  Americas and Europe. DataSQRL is a distributed company with a strong remote-work culture.
                </p>

                <p>
                  <strong>Skills We Value</strong>
                <ul>
                  <li>Stream Processing Frameworks: Developing continuous data flow and real-time processing engines.</li>
                  <li>Query Engines: Knowledge of the relational model, query planning, query optimization, and query rewriting.</li>
                  <li>Compiler Construction: Building and fine-tuning compilers.</li>
                  <li>Language Processing: Expertise in parsing high-level languages. Experience working with transpilers and language servers.</li>
                  <li>Logical Planning: Navigating abstract representations of high-level instructions.</li>
                  <li>Connector Development: Ability to create connectors for external systems.</li>
                </ul>
                </p>

                <p>
                  <strong>Qualities We Admire</strong>
                <ul>
                  <li>Analytical Thinking: Ability to dissect complex problems and identify the optimal solution path.</li>
                  <li>Attention to Detail: Every line of code matters. Ensuring the precision and flawless functionality of compilers is paramount.</li>
                  <li>Mentorship: Provides direction to junior engineers and fosters a safe environment for growth.</li>
                  <li>Collaboration: Values the input of everyone on the team. Strives to have others feel safe and heard.</li>
                  <li>Adaptability: Thrive in a dynamic environment with ever-evolving challenges and tech updates.</li>
                  <li>Simplicity: Prioritize straightforward approaches, even in intricate systems.</li>
                </ul>
                </p>

                <p>
                  Sounds interesting? Use the form below to apply! We'd love for you to join our team. See how you
                  can <Link to="/careers">supercharge your career</Link> at DataSQRL by growing your skills and growing a team
                  of committed engineers in a safe, supportive environment.
                </p>

                <p>
                  To learn more about our unique company, culture, and how we work, visit
                  our <Link to="https://you.datasqrl.com">internal company website</Link> and see if DataSQRL is the right fit for you.
                  Don't hesitate to <Link to="/contact">contact us</Link> if you have any questions about this position
                  or DataSQRL in general.
                </p>
              </div>
              <div className="col col--2"></div>
            </div>
          </div>
        </section>
        <JobPostingFooter jobTitle="Database Compiler Engineer" />
      </main>
    </Layout>
  );
}
