import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
      <div className="row">
        <div className={clsx('col col--6')}>
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            <p className="hero__subtitle">
                DataSQRL is an open-source <Link to="/docs/reference/concepts/view-store">view store</Link> for
                building <Link to="docs/reference/concepts/data-service">data services</Link> from existing
                data sources using an <Link to="/docs/getting-started/sqrl/overview">enhanced version of SQL</Link>
                developers call “not awful”.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/tutorials/nutshop-tutorial">
                Get Started in 10 minutes
              </Link>
            </div>
        </div>
        <div className={clsx('col col--6')}>
            <p className={styles.video}> Video goes here
            </p>
        </div>
      </div>
      </div>
    </header>
  );
}

const WhyDataSQRLList = [
  {
    title: 'Saves You Time',
    Svg: require('../../static/img/squirrel_clock.svg').default,
    link: '/docs/getting-started/why/save-time',
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
    Svg: require('../../static/img/nut.svg').default,
    link: '/docs/getting-started/why/easy-to-use',
    linkText: 'Learn More',
    description: (
      <>
        Express your data logic and transformations with the SQL you already know.
        Development with SQL sounds like eating soup with a sword but a bit of syntactic
        sugar makes it productive, easy to debug, and simple to maintain.
      </>
    ),
  },
  {
    title: 'Fast & Efficient',
    Svg: require('../../static/img/head_squirrel.svg').default,
    link: '/docs/getting-started/why/performance',
    linkText: 'Learn More',
    description: (
      <>
        DataSQRL compiles efficient data architectures that optimize partitioning,
        data flows, index selection, and query execution on top of Apache Flink and Postgres.
        There actually is some neat technology behind this buzzword bingo.
      </>
    ),
  },
];

const GettingStartedList = [
  {
    title: 'Customer 360 Tutorial',
    Svg: require('../../static/img/nut.svg').default,
    link: '/docs/getting-started/tutorials/nutshop-tutorial',
    linkText: 'Get Started',
    description: (
      <>
        In this e-commerce tutorial we build a Customer 360 data service step-by-step
        from raw data sources in 10 minutes. What this tutorial lacks in creativity it
        makes up for with some amazing nut trivia.
      </>
    ),
  },
  {
    title: 'BYOD Tutorial',
    Svg: require('../../static/img/full_squirrel.svg').default,
    link: '/docs/getting-started/tutorials/byod-tutorial',
    linkText: 'Get Started',
    description: (
      <>
        If you want to build a custom data service using your own data, this tutorial
        guides you through the steps from start to finish. It’s the more adventurous
        path to learning DataSQRL but if you make it, you get extra bragging rights.
      </>
    ),
  },
  {
    title: 'Why DataSQRL?',
    Svg: require('../../static/img/nut.svg').default,
    link: '/docs/getting-started/why/overview',
    linkText: 'Find Out',
    description: (
      <>
        DataSQRL saves you a lot of time, headache, and cost when building data services.
        But that’s what all data technologies promise and they’ll make you coffee to boot.
        Let us show you how DataSQRL delivers on those fluffy words.
      </>
    ),
  },
];

const LearnMoreList = [
  {
    title: 'DataSQRL Use Cases',
    Svg: require('../../static/img/nut.svg').default,
    link: '/docs/category/datasqrl-use-cases',
    linkText: 'Learn More',
    description: (
      <>
        Let’s take a look at how DataSQRL simplifies and expedites building data services
        across multiple verticals like finance, retail, logistics, telecommunications,
        technology, poetry, self-actualization, and more.
      </>
    ),
  },
  {
    title: 'DataSQRL Comparison',
    Svg: require('../../static/img/nut.svg').default,
    link: '/docs/getting-started/comparison/overview',
    linkText: 'Compare',
    description: (
      <>
        How does DataSQRL compare to a database, a data warehouse, or a data science pipeline?
        We compare DataSQRL to popular data technologies so you don’t end up using the
        proverbial hammer for your data service screw.
      </>
    ),
  },
  {
    title: 'Documentation',
    Svg: require('../../static/img/full_squirrel.svg').default,
    link: '/docs/intro',
    linkText: 'Read the Docs',
    description: (
      <>
        The DataSQRL documentation contains how-to guides to solve your problems,
        in-depth explanations of the components of DataSQRL, and a reference that
        documents all features and capabilities. RTFM, y’all.
      </>
    ),
  },
];

const SupportList = [
  {
    title: 'Join us on Slack',
    Svg: require('../../static/img/head_squirrel.svg').default,
    link: 'https://slack.com/invite/datasqrl',
    linkText: 'Join Slack Community',
    description: (
      <>
        Join an active, welcoming, and supportive community of developers who use
        DataSQRL to build data services. If you think building with data is “fun”
        you will definitely fit right in with the rest of us weirdos.
      </>
    ),
  },
  {
    title: 'Ask on Stack Overflow',
    Svg: require('../../static/img/nut.svg').default,
    link: 'https://stackoverflow.com/questions/tagged/datasqrl',
    linkText: 'Ask Your Question',
    description: (
      <>
        Do you need an answer to a particular problem you are trying to solve
        in DataSQRL and you cannot find the answer? Post it on Stack Overflow.
        We enjoy answering your questions - even the supposedly “dumb” ones.
      </>
    ),
  },
  {
    title: 'Commercial Support',
    Svg: require('../../static/img/full_squirrel.svg').default,
    link: '',
    linkText: 'Get in Touch',
    description: (
      <>
        Do you plan to use DataSQRL for a production use case and want expert
        support to have your back? Looking for training or consulting services
        to help you build data services? We’d love to help and nerd out about data with you.
      </>
    ),
  },
];

const DeveloperResourcesList = [
  {
    title: 'DataSQRL Architecture',
    Svg: require('../../static/img/nut.svg').default,
    link: '/docs/dev/architecture/overview',
    linkText: 'Learn more about the architecture',
    description: (
      <>
        DataSQRL is an incremental view maintenance and query processing
        engine that uses a declarative optimizer to compile efficient data
        flows and database schemas on top of Apache Flink and Postgres.
      </>
    ),
  },
  {
    title: 'SQRL Language Reference',
    Svg: require('../../static/img/head_squirrel.svg').default,
    link: '/docs/reference/sqrl/overview',
    linkText: 'Learn more about SQRL',
    description: (
      <>
        SQRL is a dialect of SQL that provides syntactic sugar and a few additional
        constructs to make building data services in SQL easy and productive
        for developers. Dive into the nitty-gritties to see what it is all about.
      </>
    ),
  },
  {
    title: 'Contribute on Github',
    Svg: require('../../static/img/full_squirrel.svg').default,
    link: '/docs/dev/contribute',
    linkText: 'Become a Contributor',
    description: (
      <>
        DataSQRL is an open source project that is free to use and free to contribute to.
        If you want to make DataSQRL better we would love your contribution and will
        reward you with the entirely made up $DATA token.
      </>
    ),
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures FeatureList={WhyDataSQRLList} />
        <HomepageFeatures FeatureList={GettingStartedList} headline="Getting Started" />
        <section className={styles.content}>
          <div className="container">
            <h2 className="margin-bottom--md">Start Using DataSQRL</h2>
            <div className="row margin-bottom--md">
              <div className="col col--4 text--center">
                  <Link className="button button--primary button--lg" to="/docs/getting-started/download/binaries">
                    Download Binaries
                  </Link>
              </div>
              <div className="col col--4 text--center">
                  <Link className="button button--primary button--lg" to="/docs/getting-started/download/docker">
                    Get Docker Image
                  </Link>
              </div>
              <div className="col col--4 text--center">
                  <Link className="button button--primary button--lg" to="https://github.com/tbd">
                    Build Yourself
                  </Link>
              </div>
            </div>
            <div className="alert alert--info" role="alert">
            DataSQRL is in its infancy and in developer preview only. Don't use it in production yet.
            We are working on a stable release.
            </div>
          </div>
        </section>
        <HomepageFeatures FeatureList={LearnMoreList} headline="Learn More" />
        <HomepageFeatures FeatureList={SupportList} headline="Support" />
        <HomepageFeatures FeatureList={DeveloperResourcesList} headline="Developer Resources" />
      </main>
    </Layout>
  );
}
