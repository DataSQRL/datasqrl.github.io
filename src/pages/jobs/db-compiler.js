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
                  One paragraph describing the position and why they should work at DataSQRL.
                </p>

                <p>
                  <strong>Technologies We Use</strong><br />
                  Our tech stack combines Apache Flink, Apache Calcite, Postgres, and Java.
                </p>

                <p>
                  <strong>Skills We Value</strong>
                <ul>
                  <li>Stream Processing Frameworks: Mastery over continuous data flow and real-time processing.</li>
                  <li>Query & Compute Engines: Deep-rooted knowledge in optimizing and managing queries.</li>
                  <li>Compiler Construction: Building and fine-tuning compilers.</li>
                  <li>Language Processing: Expertise in parsing high-level languages. Experience working with transpilers and language servers.</li>
                  <li>Logical Planning: Navigating abstract representations of high-level instructions.</li>
                  <li>Connector Development: Ability to create connectors for diverse systems that offer significant user benefits with minimal configuration.</li>
                </ul>
                </p>

                <p>
                  <strong>Qualities We Admire</strong>
                <ul>
                  <li>Analytical Thinking: Possess the prowess to dissect complex problems and identify the optimal solution path.</li>
                  <li>Attention to Detail: Every line of code matters. Ensuring the precision and flawless functionality of compilers is paramount.</li>
                  <li>Collaboration: Values the input of everyone on the team. Strives to have others feel safe and heard.</li>
                  <li>Adaptability: Thrive in a dynamic environment with ever-evolving challenges and tech updates.</li>
                  <li>Simplicity: Prioritize straightforward approaches, even in intricate systems.</li>
                </ul>
                </p>

                <p>
                  Sounds interesting? Use the form below to apply! We'd love for you to join our team. See how you
                  can <Link to="/careers">supercharge your career</Link> at DataSQRL by growing your skills with the mentorship of
                  technical experts and experienced entrepreneurs.

                  To learn more about our unique company, culture, and how we work, visit
                  our <Link to="https://you.datasqrl.com">internal company website</Link>.
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
