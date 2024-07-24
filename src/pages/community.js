import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';

const header =  {
                   title: 'DataSQRL Community',
                   tagLine: 'Let\'s build with data together',
                   text: (
                     <>
                DataSQRL is a friendly, supportive, and inclusive community of data developers.
                We would love for you to nerd out with us and join our open-source community.
                     </>
                   ),
                   buttonLink: 'https://join.slack.com/t/datasqrlcommunity/shared_invite/zt-2l3rl1g6o-im6YXYCqU7t55CNaHqz_Kg',
                   buttonText: 'Join us on Slack',
                   LogoSvg: require('/static/img/generic/undraw_community.svg').default,
                 }


const Support = [
  {
    title: 'Slack',
    image: '/img/community/slack_sqrl.svg',
    link: 'https://join.slack.com/t/datasqrlcommunity/shared_invite/zt-2l3rl1g6o-im6YXYCqU7t55CNaHqz_Kg',
    linkText: 'Share Your Thoughts',
    description: (
      <>
        If you want to talk to the community, ask questions, brainstorm on your problem or tune into the development process behind DataSQRL,
        join us <Link to="https://join.slack.com/t/datasqrlcommunity/shared_invite/zt-2l3rl1g6o-im6YXYCqU7t55CNaHqz_Kg">on Slack</Link>. Get help and share your thoughts while watching how the sausage gets made.
      </>
    ),
  },
  // {
  //   title: 'Stack Overflow',
  //   image: '/img/community/stackoverflow_sqrl.svg',
  //   link: 'https://stackoverflow.com/questions/tagged/datasqrl',
  //   linkText: 'Ask a Question',
  //   description: (
  //     <>
  //       If you have an implementation question or need somebody to point you in the right direction, <Link to="https://stackoverflow.com/questions/tagged/datasqrl">Stack Overflow</Link> is the place
  //       to ask your question and get help from the community. Even the supposedly "stupid" questions.
  //     </>
  //   ),
  // },
  {
    title: 'GitHub',
    image: '/img/community/github.svg',
    link: 'https://github.com/DataSQRL/sqrl',
    linkText: 'Contribute to DataSQRL',
    description: (
      <>
        <Link to="https://github.com/DataSQRL/sqrl">GitHub</Link> is where all open-source development on DataSQRL takes place.&nbsp;
        <Link to="https://github.com/DataSQRL/sqrl/issues">File a bug</Link>, star DataSQRL, or contribute to the codebase. That's the beauty of open-source: when
        everybody contributes a little, something great can happen.
      </>
    ),
  },
  {
    title: 'Blog',
    image: '/img/generic/undraw_blog.svg',
    link: '/blog',
    linkText: 'Read the Blog',
    description: (
      <>
        The <Link to="/blog">DataSQRL blog</Link> regularly publishes articles on the development of
        DataSQRL, how to implement data products, and lessons we learned along the way. Great morning reading.
      </>
    ),
  },
];

const Updates = [

  {
    title: 'LinkedIn',
    image: '/img/community/linkedin_sqrl.svg',
    link: 'https://www.linkedin.com/company/89940086',
    linkText: 'Follow DataSQRL',
    description: (
      <>
        Follow <Link to="https://www.linkedin.com/company/89940086">DataSQRL on LinkedIn</Link> to keep up to date on the latest and greatest.
        We'll share development progress, milestones, and other relevant community news - without
        spamming your feed.
      </>
    ),
  },
  {
    title: 'Youtube',
    image: '/img/community/youtube.svg',
    link: 'https://www.youtube.com/@datasqrl',
    linkText: 'Subscribe',
    description: (
      <>
        We publish tutorial videos, DataSQRL examples, and how-tos on the <Link to="https://www.youtube.com/@datasqrl">DataSQRL Youtube channel</Link>.
        If you like to learn by watching, this is the place to go.
        And yes, we are too uncool for TikTok.
      </>
    ),
  },


];


const FORMSPARK_ACTION_URL = "https://submit-form.com/G3sDjB0p";

function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (e) => {
    setFeedback("Adding your email to list...")
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
      <label for="email">Enter your email for monthly updates (no spam guaranteed): </label>
      <input type="email" id="email" name="email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Subscribe</button>
      { feedback ? feedback : null }
    </form>
  );
}

export default function Community() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <HomepageFeatures FeatureList={Support} />
        <HomepageFeatures FeatureList={Updates} />
        <section>
          <div className="container">
            <h2 className="margin-bottom--md">Email List</h2>
            <div className="row">
              <div className={clsx('col col--12 margin-bottom--lg')}>
                <EmailSubscribe />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
