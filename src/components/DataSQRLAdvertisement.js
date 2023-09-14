import React from "react";
import Link from '@docusaurus/Link';
import styles from "../pages/index.module.css";


export const DataSQRLFeaturesList = [
  {
    title: 'Fully Customizable',
    image: '/img/generic/undraw_building_blocks.svg'
  },
  {
    title: 'Open Source',
    image: '/img/generic/undraw_code.svg',
  },
  {
    title: 'Robust & Scalable',
    image: '/img/generic/undraw_secure_server.svg',
  },
];

export const WhyDataSQRLList = [
  {
    title: 'Saves You Time',
    image: '/img/index/undraw_time_management_sqrl.svg',
    description: (
      <>
        DataSQRL allows you to focus on your data processing by eliminating the data plumbing
        that strangles your data microservice implementation with busywork:
        data mapping, schema management, data modeling, error handling, data serving, API generation, and so on.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    image: '/img/index/undraw_programming_sqrl.svg',
    description: (
      <>
        Implement your data processing with the SQL you already know.
        DataSQRL allows you to focus on the "what" and worry less about the "how". Import your
        functions when SQL is not enough - DataSQRL makes custom code integration easy.
      </>
    ),
  },
  {
    title: 'Fast & Efficient',
    image: '/img/index/undraw_fast_loading_sqrl.svg',
    description: (
      <>
        DataSQRL builds efficient data microservices that optimize data processing,
        partitioning, index selection, view materialization, denormalization, and scalability.
        There actually is some neat technology behind this buzzword bingo.
      </>
    ),
  },
];

export const DataSQRLUseCases = [
  {
    title: 'Data Mesh',
    image: '/img/generic/data_mesh.svg',
    description: (
      <>
        DataSQRL empowers domain teams to develop robust data products autonomously.
        Build a self-service data platform with existing skills.
      </>
    ),
    link: "/usecases/datamesh/",
    linkText: "Build a Data Mesh"
  },
  {
    title: 'Artificial Intelligence',
    image: '/img/generic/ai_squirrel.svg',
    description: (
      <>
        Take your data to another level with AI. DataSQRL supports vector embeddings,
        large language models, and machine learning in SQL.
      </>
    ),
    link: "/usecases/ai/",
    linkText: "Empower your Data with AI"
  },
  {
    title: 'Observability & Automation',
    image: '/img/generic/predictive_analytics.svg',
    description: (
      <>
        Build tailored observability platforms that turn your metrics into insights.
        Automate your processes with custom rules and AIOps.
      </>
    ),
    link: "/usecases/observability/",
    linkText: "Build Smart Monitoring"
  },
];

export function HowDataSQRLWorks() {
  return (
    <div className="row margin-bottom--sm margin-top--lg">
      <div className="col col--6 text--center">
        <img src="/img/index/howDataSQRLWorks.svg" alt="How DataSQRL Works" />
      </div>
      <div className="col col--5 text--left">
        <h2>How DataSQRL Works</h2>
        <p className="hero__subtitle">
          Implement your data processing in SQL and define your data API in GraphQL.<br />
          DataSQRL compiles streaming data microservices that are robust, scalable, and easy to maintain.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/how">
          Show Me How DataSQRL Works Exactly
        </Link>
      </div>
    </div>
  );
}

export function WhyDataSQRL({linkText, linkURL}) {
  return (
    <section className={styles.content}>
      <div className="container">
        <div className="row margin-top--lg">
          <div className="col col--6 text--left">
            <h2>Why DataSQRL?</h2>
            <p className="hero__subtitle">
              To compete, you need to unlock the value of your data by building data products.
              But assembling complex technologies into bespoke microservices wastes most
              of your time on data plumbing, which causes 85% of data products to fail.
              DataSQRL eliminates data plumbing so you can focus on enriching your data to deliver value quickly.
            </p>
            <Link
              className="button button--primary button--lg"
              to={linkURL}>
              {linkText}
            </Link>
          </div>
          <div className="col col--4 text--center hide-small-screens">
            <img src="/img/generic/unlock_data.svg" alt="DataSQRL unlocks the value of your data" />
          </div>
        </div>
      </div>
    </section>
  );
}