import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';


const header =  {
                   title: 'DataSQRL',
                   tagLine: 'Build Data APIs In Minutes',
                   text: (
                     <>
                <Link to="/docs/getting-started/concepts/datasqrl">DataSQRL</Link> is a compiler
                for building data services from data streams
                and data stores using an <Link to="/docs/getting-started/concepts/sqrl">enhanced version of SQL</Link> developers
                call “not awful”.
                     </>
                   ),
                   buttonLink: '/docs/getting-started/quickstart',
                   buttonText: 'Get Started in 5 minutes',
                   LogoSvg: require('../../static/img/full_squirrel.svg').default,
                 };

const WhyDataSQRLList = [
  {
    title: 'Saves You Time',
    image: '/img/index/undraw_time_management_sqrl.svg',
    link: '/docs/getting-started/concepts/why-datasqrl',
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
    image: '/img/index/undraw_programming_sqrl.svg',
    link: '/docs/getting-started/concepts/why-datasqrl',
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
    image: '/img/index/undraw_fast_loading_sqrl.svg',
    link: '/docs/getting-started/concepts/why-datasqrl',
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
`IMPORT datasqrl.seedshop.Orders;  -- Import orders stream
IMPORT time.endOfWeek;            -- Import time function
/* Augment orders with total price */
Orders.items.total := quantity * unit_price - discount?0.0;
Orders.totals := SELECT sum(total) as price,
                  sum(discount?0.0) as saving FROM @.items;
/* Create new table of unique customers */
Users := SELECT DISTINCT customerid AS id FROM Orders;
/* Create relationship between customers and orders */
Users.purchases := JOIN Orders ON Orders.customerid = @.id;
/* Aggregate the purchase history for each user by week */
Users.spending := SELECT endOfWeek(p.time) AS week,
         sum(t.price) AS spend, sum(t.saving) AS saved
      FROM @.purchases p JOIN p.totals t
      GROUP BY week ORDER BY week DESC;`;

const graphqlScript =
`type Query {
  Customers(id: Int!): Customers
}

type Customers {
  id: Int!
  purchases: [Orders]
  spending(week: String): [spending]
}

type spending {
  week: String!
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
      title={header.title}
      description={header.tagline}>
      <HomepageHeader {...header} />
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
                 <Link to="/docs/getting-started/concepts/datasqrl">DataSQRL</Link> compiles your
                 SQRL script and API specification into a fully integrated
                 data pipeline and API server.
                 </p>
                 <p className="hero__subtitle">
                 Seriously, that's all there is to it.
                 </p>
                 <div className={styles.buttons}>
                   <Link
                     className="button button--primary button--lg"
                     to="/docs/getting-started/quickstart">
                     Run this Example
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
