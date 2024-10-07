import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '../index.module.css';
import HomepageHeader from '../../components/HomepageHeader';


const header =  {
  title: 'Legal Information',
  tagLine: 'Legal Information',
  text: (
    <>
      Find important legal information about DataSQRL
    </>
  ),
  LogoSvg: require('/static/img/generic/undraw_data.svg').default,
}

export default function Legal() {
  return (
    <Layout
      title={header.title}
      >
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3"></div>
              <div className="col col--6">
                <h2>Information Security Policy</h2>
                <p>
                  Our most recent information security policy can be downloaded as a PDF document. <br />
                  <a href={require('/static/docs/legal/infosec_policy.pdf').default} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </p>
              </div>
              <div className="col col--3"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
