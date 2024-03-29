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
        Matthias is the former Chief Technologist at <Link to="https://www.datastax.com/">DataStax</Link>, the company behind the
        NoSQL <Link to="https://cassandra.apache.org/">Cassandra</Link> database.
        He invented the <Link to="https://janusgraph.org/">JanusGraph</Link> database (formerly TitanDB) and is an author of
        O’Reilly’s <Link to="https://www.oreilly.com/library/view/the-practitioners-guide/9781492044062/">“Practitioner’s Guide to Graph Data”</Link>. <br />
        He is a founder of the database company Aurelius which was acquired by DataStax in 2015. <br />
        Matthias holds a PhD in database systems and machine learning from the University of Maryland where he developed the <Link to="https://psl.linqs.org/">PSL machine learning</Link> framework.<br />
        Matthias is too short to be a competitive rower but loves it anyways.
      </>
    ),
  },
  {
    name: 'Daniel Henneberger',
    pic: '/img/headshots/daniel1.png',
    bio: (
      <>
        Daniel has worked on data products for most of his career in the tech industry. He previously worked for companies such
         as <Link to="https://www.oracle.com/">Oracle</Link>, <Link to="https://www.datastax.com/">DataStax</Link> (the company behind Apache Cassandra), and <Link to="https://datakin.com/">Datakin</Link> (the
         company behind <Link to="https://openlineage.io/">LFAI OpenLineage</Link>). <br />
        Daniel has worked on a number of open-source projects and (streaming) data systems. He is equally excited about
        index selection as fine-tuning engineering development processes. <br />
        Daniel's passion for hiking and fermented foods adds a unique perspective to his work.
      </>
    ),
  },
  {
    name: 'Michael Canzoneri',
    pic: '/img/headshots/canz1.png',
    bio: (
      <>
        <Link to="https://www.linkedin.com/in/canz">Canz</Link>, a 3x Silicon Valley Unicorn veteran with IPO experience, has introduced to and guided
        companies with Artificial Intelligence, Cloud, and Real-time Distributed Computing.
        He has grown companies from zero to 8-figures in revenue and global teams from single-digit to hundreds of people several times.
        He also serves as an advisor for several startups in Artificial Intelligence, Data, and Green Technologies. <br />

        Canz has attended M.I.T., Harvard, Villanova, and Penn State.  He's written an award-winning screenplay,
        several books on Philosophy and Religion, and blog posts on the intersection of Quantum Computing,
        Artificial Intelligence, and Event Streaming.  He has also written and produced several independent movies,
        but his favorite subject is college football.
      </>
    ),
  },
];

function Profile({name, pic, bio}) {
  return (
    <div className={clsx('col col--4')}>
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
                  to build data products with their data and realized that it’s too darn hard with existing
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
                  <Link to="/services">Work with us</Link> if you want to enable your organization to build successful data products quickly and efficiently.
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
              {Founders.map((props, idx) => (
                <Profile key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
