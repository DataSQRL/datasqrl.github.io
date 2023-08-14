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
  title: 'Job Posting: Apache Flink Engineer',
  tagLine: 'Apache Flink Engineer',
  text: (
    <>
      Make it easier to build streaming applications with Apache Flink by integrating Flink into the DataSQRL compiler.
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
                  empowers people to build streaming data and realtime AI applications with only basic SQL knowledge.
                  A core part of DataSQRL is compiling SQL programs to Flink jobs and that's where we need your help.
                </p>
                <p>
                  You'll be working on the internals of two open-source projects
                  - <Link to="https://flink.apache.org/">Apache Flink</Link> and <Link to="https://github.com/DataSQRL/sqrl">DataSQRL</Link> -
                  which means your contributions will have a big impact, you'll be working within supportive communities of domain experts,
                  and there are plenty of fun technical problems to tackle.
                </p>

                <p>
                  <strong>Technologies You Will Work With</strong><br />
                  You'll primarily work with Apache Flink, Apache Calcite, and Java. Plus integration work with AI technologies like ONNX and MLeap.
                </p>

                <p>
                  <strong>Location</strong><br />
                  Americas and Europe. DataSQRL is a distributed company with a strong remote-work culture.
                </p>

                <p>
                  <strong>Skills We Value</strong>
                <ul>
                  <li>Apache Flink: Understanding of Flink's internals (table & datastream API) and building with and on top of Apache Flink.</li>
                  <li>Stream Processing Frameworks (in general): Developing continuous data flow and real-time processing engines.</li>
                  <li>Open-source Development: Implementing complex software systems as part of an open-source community.</li>
                  <li>Logical Planning: Navigating abstract representations of high-level instructions.</li>
                  <li>Connector Development: Ability to create and abstract connectors for Apache Flink.</li>
                  <li>Streaming DevOps: Running Apache Flink jobs in production.</li>
                </ul>
                </p>

                <p>
                  <strong>Qualities We Admire</strong>
                <ul>
                  <li>Performance Engineering: Knowledge of high-performance computing and hardware efficiency. Every line of code matters.</li>
                  <li>Adaptability: Thrive in a dynamic environment with ever-evolving challenges and tech updates.</li>
                  <li>Analytical Thinking: Ability to dissect complex problems and identify the optimal solution path.</li>
                  <li>Community Building: Fostering a welcoming, supportive, and safe open-source community.</li>
                  <li>Communication: Communicating complex topics clearly to internal and external audiences.</li>
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
        <JobPostingFooter jobTitle="Apache Flink Engineer" />
      </main>
    </Layout>
  );
}
