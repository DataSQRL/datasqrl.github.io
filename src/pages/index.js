import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const LogoSvg = require('../../static/img/full_squirrel.svg').default;
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
      <div className="row">
        <div className={clsx('col col--8')}>
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            <p className="hero__subtitle">
                <Link to="/docs/getting-started/concepts/datasqrl">DataSQRL</Link> is a compiler
                for building data services from data streams
                and data stores using an <Link to="/docs/getting-started/concepts/sqrl">enhanced version of SQL</Link> developers
                call “not awful”.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/nutshop-tutorial">
                Get Started in 10 minutes
              </Link>
            </div>
        </div>
        <div className={clsx('col col--4')}>
            <LogoSvg  className={styles.bannerSvg} alt="DataSQRL logo" />
        </div>
      </div>
      </div>
    </header>
  );
}

const WhyDataSQRLList = [
  {
    title: 'Saves You Time',
    Svg: require('../../static/img/index/undraw_time_management_sqrl.svg').default,
    link: '/docs/getting-started/why-datasqrl#save-time',
    linkText: 'Learn More',
    description: (
      <>
        DataSQRL allows you to focus on your data logic because it handles all the annoying
        parts of building data services that make you want to choke on your keyboard:
        pipeline plumbing, schema management, error handling, data serving, API generation, and so on.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/index/undraw_programming_sqrl.svg').default,
    link: '/docs/getting-started/why-datasqrl#easy-to-use',
    linkText: 'Learn More',
    description: (
      <>
        Express your data logic, transformations, and analytics with the SQL you already know.
        Development with SQL sounds like eating soup with a sword but a bit of syntactic
        sugar makes it productive, easy to debug, and simple to maintain. <br />&nbsp;
      </>
    ),
  },
  {
    title: 'Fast & Efficient',
    Svg: require('../../static/img/index/undraw_fast_loading_sqrl.svg').default,
    link: '/docs/getting-started/why-datasqrl#performance',
    linkText: 'Learn More',
    description: (
      <>
        DataSQRL compiles efficient data architectures that optimize partitioning,
        data flows, index selection, and query execution on top of Apache Flink and Postgres.
        There actually is some neat technology behind this buzzword bingo. <br />&nbsp;
      </>
    ),
  },
];

const sqrlScript =
`IMPORT nutshop-small.Orders;  -- Import orders data stream
IMPORT time.round_to_month;   -- Import time function

/* Create new table of unique customers */
Customers := SELECT DISTINCT customerid AS id FROM Orders;
/* Augment orders with aggregate calculations */
Orders.items.total := quantity * unit_price - discount;
Orders.totals := SELECT sum(total) as price,
                        sum(discount) as savings FROM @.items;
/* Create relationship between customers and orders */
Customers.purchases := JOIN Orders ON Orders.customerid = @.id
                                      ORDER BY Orders.time DESC;
/* Aggregate the purchase history for each customer by month */
Customers.spending_by_month :=
    SELECT round_to_month(p.timestamp) AS month,
           sum(t.price) AS spend, sum(t.savings) AS saved
    FROM @.purchases p JOIN p.totals t
    GROUP BY month ORDER BY month DESC;`;

const graphqlScript =
`type Query {
  Customers(id: Int!): Customers
}

type Customers {
  id: Int!
  purchases: [Orders]
  spending_by_month(month: String): [spending_by_month]
}

type spending_by_month {
  month: String!
  spend: Float!
  saved: Float!
}
...
`;

const PipelineSvg = require('../../static/img/index/pipeline.svg').default;

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--6">
              <CodeBlock language="sql">
                {sqrlScript}
              </CodeBlock>
              </div>
              <div className="col col--5 text--left">
                 <h2>Step 1</h2>
                 <p className="hero__subtitle">
                 Import the data and functions you need. <br />
                 Integrate, transform, and analyze the data to get the results you want.
                 </p>
                  <p className="hero__subtitle">
                  The <Link to="/docs/getting-started/concepts/sqrl">SQRL language</Link> extends SQL
                  to support streams of data, relationships, nested data, and other knick-knacks.
                  </p>
              </div>
            </div>
            <div className="row margin-bottom--md">
              <div className="col col--1"></div>
              <div className="col col--5 text--left">
                 <h2>Step 2</h2>
                 <p className="hero__subtitle">
                 Fine-tune your data API by customizing the GraphQL schema.
                 </p>
                 <p className="hero__subtitle">
                 Or get a triple-shot of espresso and let DataSQRL generate it for you.
                 </p>
              </div>
              <div className="col col--6">
              <CodeBlock language="graphql">
                {graphqlScript}
              </CodeBlock>
              </div>
            </div>
            <div className="row margin-bottom--md">
              <div className="col col--6">
              <PipelineSvg className={styles.pipelineSvg} alt="DataSQRL compiled pipeline" />
              </div>
              <div className="col col--5 text--left">
                 <h2>Step 3</h2>
                 <p className="hero__subtitle">
                 DataSQRL compiles your SQRL script and API specification into a fully integrated
                 data pipeline and API server.
                 </p>
                 <p className="hero__subtitle">
                 Seriously, that's all there is to it.
                 </p>
                 <div className={styles.buttons}>
                   <Link
                     className="button button--primary button--lg"
                     to="/docs/getting-started/nutshop-tutorial">
                     See Running Example
                   </Link>
                 </div>
              </div>
            </div>
          </div>
        </section>



        <HomepageFeatures FeatureList={WhyDataSQRLList} />
      </main>
    </Layout>
  );
}
