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
  title: 'Job Posting: DevOps & Cloud Engineer',
  tagLine: 'DevOps & Cloud Engineer',
  text: (
    <>
      Automate the deployment of DataSQRL applications in the cloud and help developers build data products.
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
                  To make DataSQRL truly easy to use, we need your help automating cloud deployment of the data pipelines that DataSQRL compiles.
                </p>
                <p>
                  You will work with Terraform and other cloud DevOps tooling to build a deployment pipeline and observability platform
                  for DataSQRL data pipelines. You will work with a team of supportive data nerds and cheered on by an open-source
                  community that wants an easy path to production.
                </p>

                <p>
                  <strong>Technologies You Will Work With</strong><br />
                  You'll primarily work terraform and similar tooling for AWS cloud services (EMR, RDS, MKS, Fargate, Kinesis, etc). Our initial target is
                  deployment on AWS with other cloud providers coming in the future.
                </p>

                <p>
                  <strong>Location</strong><br />
                  Americas and Europe. DataSQRL is a distributed company with a strong remote-work culture.
                </p>

                <p>
                  <strong>Skills We Value</strong>
                <ul>
                  <li>Cloud Services: Orchestrating and deploying cloud services for development and production workloads.</li>
                  <li>Microservices Architecture: Understanding of microservices architectures and operating them in production.</li>
                  <li>AWS Ecosystem: Building applications and workflows with AWS cloud services, in particular EMR, RDS, MKS, and Fargate.</li>
                  <li>DevOps Automation: Automating deployment workflows with existing tools and custom implementations.</li>
                  <li>Java Ecosystem: Understanding of the Java build system, JAR packaging, and module systems for effective code organization and execution.</li>
                  <li>Observability: Building observability across multiple services for monitoring, incident detection, and operational management.</li>
                </ul>
                </p>

                <p>
                  <strong>Qualities We Admire</strong>
                <ul>
                  <li>Automation Mindset: If a computer can do it, a computer should do it.</li>
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
        <JobPostingFooter jobTitle="DevOps & Cloud Engineer" />
      </main>
    </Layout>
  );
}
