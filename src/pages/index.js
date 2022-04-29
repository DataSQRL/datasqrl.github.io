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
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
      <div className="row">
        <div className={clsx('col col--6')}>
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            <p className="hero__subtitle">
                <Link to="/docs/getting-started/concepts/datasqrl">DataSQRL</Link> is an
                open-source <Link to="/docs/getting-started/concepts/view-store">view store</Link> for
                building <Link to="/docs/getting-started/concepts/data-service">data services</Link> from streaming
                data sources using an <Link to="/docs/getting-started/concepts/sqrl">enhanced version of SQL</Link> developers
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
        <div className={clsx('col col--6')}>
            <CodeExample />
        </div>
      </div>
      </div>
    </header>
  );
}

class CodeExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        stepNo: 0,
    };
    this.setExplicitStep = this.setExplicitStep.bind(this);
  }

  setExplicitStep(idx) {
    clearInterval(this.interval);
    this.setStep(idx);
  }

  nextStep() {
    let stepNo = this.state.stepNo;
    this.setStep((stepNo+1)%ImplementSteps.length);
  }

  setStep(idx) {
    this.setState({stepNo: idx});
  }

  componentDidMount() {
    this.interval = setInterval(() => this.nextStep(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
      let stepNo = this.state.stepNo;
      let stepName = stepNo+1;
      let setStepFct = this.setExplicitStep;
      return (
          <div className={styles.code}>
              <ul className="tabs tabs--block tabs--hero">
                {ImplementSteps.map(function(step, idx){
                    let tabClass = "tabs__item";
                    if (idx==stepNo) tabClass += " tabs__item--active";
                    return <li key={idx} className={tabClass} onClick={() => setStepFct(idx)}>{idx+1}. {step.title}</li>
                })}
              </ul>
              <div className={styles.codeContent}>
                  <CodeBlock language={ImplementSteps[stepNo].language}>
                        {ImplementSteps[stepNo].code}
                  </CodeBlock>
                  <p>Step {stepName}: {ImplementSteps[stepNo].description}</p>
              </div>
          </div>
      );
  }
}

const ImplementSteps = [
    {
      title: "Connect",
      description: "Connect data source and import the data",
      language: "sql",
      code:
`IMPORT nutshop-data.Orders;
IMPORT nutshop-data.Products;


`,
    },
    {
      title: "Implement",
      description: "Implement the logic of your data service in SQRL",
      language: "sql",
      code:
`Customers := SELECT DISTINCT customerid AS id FROM Orders;
-- SQRL extends SQL and supports relationships ...
Customers.purchases := JOIN Orders ON Orders.customerid=_.id
                                  ORDER BY Orders.time DESC;
-- ... and incremental table definitions
Customers.total_purchases := SUM(purchases.total);`,
    },
    {
      title: "Access",
      description: "Access the data service through generated GraphQL API",
      language: "graphql",
      code:
`Customers( id : "101"]) {
     total_purchases
     purchases(time: {after: "2022-02-01"}) {
         total
     }
}`,
    }
];


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

const GettingStartedList = [
  {
    title: 'Customer 360 Tutorial',
    Svg: require('../../static/img/index/undraw_online_shopping_sqrl.svg').default,
    link: '/docs/getting-started/nutshop-tutorial',
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
    title: 'DataSQRL Training',
    Svg: require('../../static/img/index/undraw_personal_training_sqrl.svg').default,
    link: '/docs/getting-started/intro/overview',
    linkText: 'Get Started',
    description: (
      <>
        If you want to build a custom data service using your own data, this training
        guides you through the steps from start to finish. It extends the tutorial,
        covers everything you need to know, and gets you home before dinner.
      </>
    ),
  },
  {
    title: 'Why DataSQRL?',
    Svg: require('../../static/img/index/undraw_questions_sqrl.svg').default,
    link: '/docs/getting-started/why-datasqrl',
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
    Svg: require('../../static/img/index/undraw_use_cases_sqrl.svg').default,
    link: '/',
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
    Svg: require('../../static/img/index/undraw_decide_sqrl.svg').default,
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
    Svg: require('../../static/img/index/undraw_documents_sqrl.svg').default,
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
    Svg: require('../../static/img/index/slack_sqrl.svg').default,
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
    Svg: require('../../static/img/index/stackoverflow_sqrl.svg').default,
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
    Svg: require('../../static/img/index/undraw_active_support_sqrl.svg').default,
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
    Svg: require('../../static/img/index/undraw_architecture_sqrl.svg').default,
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
    Svg: require('../../static/img/index/undraw_nut_document_sqrl.svg').default,
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
    Svg: require('../../static/img/index/undraw_contribute_sqrl.svg').default,
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
                  <Link className="button button--primary button--lg" to="/docs/getting-started/install#binaries">
                    Download Binaries
                  </Link>
              </div>
              <div className="col col--4 text--center">
                  <Link className="button button--primary button--lg" to="/docs/getting-started/install#docker">
                    Get Docker Image
                  </Link>
              </div>
              <div className="col col--4 text--center">
                  <Link className="button button--primary button--lg" to="/docs/getting-started/install#build">
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
