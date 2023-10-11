import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';
import ContactForm from "../components/ContactForm";
import {APPLY_FORM_URL, DataSQRLWorkBenefits, WhyWorkAtDataSQRL} from "../components/JobPostingFooter";

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
                  for long work hours. A place to work where you see your impact, advance
                  the state of technology and feel safe, respected, and supported.
                  Read more about DataSQRL on our <Link to="https://you.datasqrl.com">internal website</Link>.
                </p>

                <p>
                  DataSQRL is an open-source company which means we build our software in the open and nurture a
                  vibrant community around it. This transparency and relationship-building extend to how DataSQRL operates internally.
                </p>

                <p>
                  Tired of busting your a** to make VCs rich? Want to be more than a tiny cog in a large corporate machine?
                  At DataSQRL we are not beholden to the hyper-growth mantra and are committed to aligning your career path
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
                    <td><strong><Link to="/jobs/db-compiler">Database Compiler Engineer</Link></strong></td>
                    <td>Work on the core compiler technology of DataSQRL which combines database query planning and rewriting with AI optimization.</td>
                    <td>Americas & Europe</td>
                    <td><Link className="button button--secondary" to="/jobs/db-compiler">Learn More & Apply</Link></td>
                  </tr>
                  <tr>
                    <td><strong><Link to="/jobs/flink-engineer">Apache Flink Engineer</Link></strong></td>
                    <td>Make it easier to build streaming applications with Apache Flink by integrating Flink into the DataSQRL compiler.</td>
                    <td>Americas & Europe</td>
                    <td><Link className="button button--secondary" to="/jobs/flink-engineer">Learn More & Apply</Link></td>
                  </tr>
                  <tr>
                    <td><strong><Link to="/jobs/java-engineer">Reactive Java Engineer</Link></strong></td>
                    <td>Build a reactive API server engine with embedded code execution for data products on top of Eclipse Vert.x.</td>
                    <td>Americas & Europe</td>
                    <td><Link className="button button--secondary" to="/jobs/java-engineer">Learn More & Apply</Link></td>
                  </tr>
                  <tr>
                    <td><strong><Link to="/jobs/devops-cloud">DevOps & Cloud Engineer</Link></strong></td>
                    <td>Automate the deployment of DataSQRL applications in the cloud and help developers build data products.</td>
                    <td>Americas & Europe</td>
                    <td><Link className="button button--secondary" to="/jobs/devops-cloud">Learn More & Apply</Link></td>
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
                <ContactForm formURL={APPLY_FORM_URL} messageLabel="What would you like to work on at DataSQRL?" submitText="Apply Now!" context="generic apply" />
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
