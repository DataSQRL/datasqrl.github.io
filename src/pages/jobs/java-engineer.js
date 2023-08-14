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
  title: 'Job Posting: Reactive Java Engineer',
  tagLine: 'Reactive Java Engineer',
  text: (
    <>
      Build a reactive API server engine with embedded code execution for data services on top of Eclipse Vert.x.
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
                  DataSQRL generates reactive API endpoints from user applications and we need your help to build the server engine that
                  powers those endpoints on top of <Link to="https://vertx.io/">Eclipse Vert.x</Link>.
                </p>
                <p>
                  You will develop a customizable server engine that translates incoming API calls to pre-compiled
                  database retrieval code for high performance execution of mission-critical data services. Your contributions
                  will benefit the open-source community and make reactive data applications easier to implement.
                </p>

                <p>
                  <strong>Technologies You Will Work With</strong><br />
                  You'll primarily work with Eclipse Vert.x and Java. Plus integration work with AI technologies like ONNX and MLeap.
                </p>

                <p>
                  <strong>Location</strong><br />
                  Americas and Europe. DataSQRL is a distributed company with a strong remote-work culture.
                </p>

                <p>
                  <strong>Skills We Value</strong>
                <ul>
                  <li>Reactive Java: Developing asynchronous server applications in Java and <Link to="https://vertx.io/">Eclipse Vert.x</Link> in particular.</li>
                  <li>API Development: Designing and implementing GraphQL and REST APIs on the JVM.</li>
                  <li>Java Ecosystem: Understanding of the Java build system, JAR packaging, and module systems for effective code organization and execution.</li>
                  <li>Database Query Execution: Efficiently executing database retrieval operations from an API server.</li>
                  <li>Code Generation: Generating runtime execution code from a high-level instruction set and embedding it in an application.</li>
                  <li>Server DevOps: Running reactive Java applications in production with observability and DevOps tooling.</li>
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
        <JobPostingFooter jobTitle="Reactive Java Engineer" />
      </main>
    </Layout>
  );
}
