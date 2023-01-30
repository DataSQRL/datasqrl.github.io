import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageHeader from '../components/HomepageHeader';

const header =  {
                   title: 'Contact DataSQRL',
                   tagLine: 'Get in Touch',
                   text: (
                     <>
                We help developers and organizations build data services that deliver value. <br />
                Use the form below to contact us and we look forward to building with you.
                     </>
                   ),
                   LogoSvg: require('../../static/img/generic/undraw_contact.svg').default,
                 }


export default function Contact() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.closer}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3">
              </div>
              <div className="col col--6">
                <h2 className="margin-bottom--md">Contact Form</h2>
                <p>
                Want to work with us, get a job at DataSQRL, or have a question about the company, then use this
                form to get in touch with us. <br />
                If you have a coding question, feature request, or bug report, please check out
                the <Link to="/community">community page</Link> to direct you to the right place.
                </p>
                <p>
                Enter your name, email, and message in the form below and we will get back to you shortly.
                </p>

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
