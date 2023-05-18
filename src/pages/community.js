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
                   buttonLink: '/contact',
                   buttonText: 'Join us on Discord',
                   LogoSvg: require('/static/img/generic/undraw_community.svg').default,
                 }


const Support = [
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
    title: 'Discord',
    image: '/img/community/discord.svg',
    link: 'https://discord.gg/49AnhVY2w9',
    linkText: 'Share Your Thoughts',
    description: (
      <>
        If you want to brainstorm with the community or tune into the development process behind DataSQRL,
        join us <Link to="https://discord.gg/49AnhVY2w9">on Discord</Link>. Share your thoughts and feedback while watching how the sausage gets made.
      </>
    ),
  },
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

const Updates = [
  {
    title: 'Twitter',
    image: '/img/community/twitter.svg',
    link: 'https://twitter.com/DataSQRL',
    linkText: 'Follow DataSQRL',
    description: (
      <>
        Follow <Link to="https://twitter.com/DataSQRL">DataSQRL on Twitter</Link> to keep up to date on the latest and greatest.
        We'll share development progress, milestones, and other relevant community news - without
        spamming your twitter feed.
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
        DataSQRL, how to implement data services, and lessons we learned along the way. Great morning reading.
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
