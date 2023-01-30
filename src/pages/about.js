import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import featureStyles from '../components/HomepageFeatures.module.css';
import HomepageHeader from '../components/HomepageHeader';

const header =  {
                   title: 'About DataSQRL',
                   tagLine: 'We Are DataSQRL',
                   text: (
                     <>
                Our mission is to help developers and organizations build with data.
                And show the world that data is fun … isn’t it?
                     </>
                   ),
                   buttonLink: '/services',
                   buttonText: 'See How We Can Help You',
                   LogoSvg: require('/static/img/generic/undraw_data.svg').default,
                 }

const Founders = [
  {
    name: 'Matthias Broecheler',
    pic: '/img/headshots/matthias1.png',
    bio: (
      <>
        Matthias is the former Chief Technologist at DataStax, the company behind the NoSQL Cassandra database.
        He invented the JanusGraph database (formerly TitanDB) and is an author of O’Reilly’s “Practitioner’s Guide to Graph Data”. <br />
        He is a founder of the database company Aurelius which was acquired by DataStax in 2015. <br />
        Matthias holds a PhD in database systems and machine learning from the University of Maryland where he developed the PSL machine learning framework.<br />
        Matthias is too short to be a competitive rower but loves it anyways.
      </>
    ),
  },
  {
    name: 'Daniel Henneberger',
    pic: '/img/headshots/daniel1.png',
    bio: (
      <>
        Daniel has worked on data services for most of his career in the tech industry. He previously worked for companies such as
         Oracle, Datastax (the company behind Apache Cassandra), and Datakin (the company behind LFAI OpenLineage). <br />
        Daniel has worked on a number of open-source projects and (streaming) data systems. He is equally excited about
        index selection as fine-tuning engineering development processes. <br />
        Daniel's passion for hiking and fermented foods adds a unique perspective to his work.
      </>
    ),
  },
];

function Profile({name, pic, bio}) {
  return (
    <div className={clsx('col col--5')}>
      <div className="text--center"><img className={featureStyles.featureProfile} src={pic} alt={name} /></div>
      <div className="padding-horiz--md">
        <h3 className="text--center">{name}</h3>
        <p className="text--left margin-bottom--sm">{bio}</p>
      </div>
    </div>
  );
}


export default function About() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--3"></div>
              <div className="col col--6">
                  <h2>Why DataSQRL?</h2>
                  <p>
                  We have worked with companies of all shapes and sizes - from startups to Fortune 500 -
                  to build data services with their data and realized that it’s too darn hard with existing
                  technologies and processes. Companies are leaving a lot of value on the table because
                  extracting it from their data is difficult, time consuming, and expensive.
                  </p>

                  <p>
                  We started DataSQRL to empower developers and organizations to build with data and
                  unlock the value they are sitting on. We believe that we need&nbsp;
                  <Link to="/docs/getting-started/concepts/datasqrl">better technology</Link> and <Link to="/docs/process/intro">better processes</Link>.
                  We don’t have all the answers yet, but we are committed to figuring it out.
                  </p>

                  <p>
                  Please join our <Link to="/community">community</Link> or our <Link to="/contact">company</Link> if you
                  care about empowering developers to build with data and help us find a better approach.<br />
                  <Link to="/services">Work with us</Link> if you want to enable your organization to build successful data services quickly and efficiently.
                  We’d love to help you.
                  </p>

                  <div className="text--center">
                    <Link className="button button--secondary" to="/services">How We Can Help</Link>
                  </div>
              </div>
              <div className="col col--3"></div>
            </div>
          </div>
        </section>
        <section className={featureStyles.features}>
          <div className="container">
            <h2 className="text--center">Meet the Founders</h2>
            <div className="row">
              <div className="col col--1"></div>
              {Founders.map((props, idx) => (
                <Profile key={idx} {...props} />
              ))}
              <div className="col col--1"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
