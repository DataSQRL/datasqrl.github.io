import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '../index.module.css';
import HomepageHeader from '../../components/HomepageHeader';


const header =  {
  title: 'DataSQRL Sub-processors',
  tagLine: 'DataSQRL Sub-processors',
  text: (
    <>
      Effective Starting October 1st, 2024
    </>
  ),
  LogoSvg: require('/static/img/generic/undraw_data.svg').default,
}

const subprocessors = [
  {
    name: "Amazon Web Services, Inc.",
    products: "DataSQRL Cloud",
    purpose: "Cloud hosting provider",
    location: "USA",
  },
  {
    name: "Google, LLC",
    products: "All Products",
    purpose: "Maintaining customer data and providing customer service",
    location: "USA",
  },
  {
    name: "Vercel, Inc.",
    products: "DataSQRL Cloud",
    purpose: "Cloud hosting provider",
    location: "USA",
  },
  {
    name: "Formspark (owned by Trampoline Software SRL)",
    products: "DataSQRL Website",
    purpose: "Form-based data collection",
    location: "USA",
  }
];

const FORMSPARK_ACTION_URL = "https://submit-form.com/3ziakjvz2";

function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (e) => {
    setFeedback("Adding your email to subscription...")
    e.preventDefault();
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "email" : email,
      }),
    });
    setFeedback("You are subscribed!");
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className={styles.emailForm}>
      <label for="email">Enter your email for updates to sub-processors: </label>
      <input type="email" id="email" name="email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Subscribe</button>
      { feedback ? feedback : null }
    </form>
  );
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
              <div className="col col--1"></div>
              <div className="col col--10">
                <h2>Overview</h2>
                <p>
                  DataSQRL uses certain platform sub-processors, infrastructure suppliers, and other third-party
                  partners to provide DataSQRL Services to its customers. <br/>
                  The table below contains the list of sub-processors.
                </p>
                <h2>Subscribe to updates to DataSQRL's sub-processor list</h2>
                <p>
                  DataSQRL will update the DataSQRL sub-processor lists via this website. To be notified of changes to
                  the sub-processor list,
                  please subscribe to changes by entering your email below.
                </p>
                <p>
                  <EmailSubscribe/>
                </p>
                <h2>Sub-processors</h2>
                <table>
                  <thead>
                  <tr>
                    <th>Sub-processor</th>
                    <th>Applicable Products</th>
                    <th>Nature and Purpose of Processing</th>
                    <th>Location of Processing</th>
                  </tr>
                  </thead>
                  <tbody>
                  {subprocessors.map((row, index) => (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td>{row.products}</td>
                      <td>{row.purpose}</td>
                      <td>{row.location}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
              <div className="col col--1"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
