import React from 'react';
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
  {
    title: 'Stack Overflow',
    Svg: require('/static/img/community/stackoverflow_sqrl.svg').default,
    link: 'https://stackoverflow.com/questions/tagged/datasqrl',
    linkText: 'Ask a Question',
    description: (
      <>
        If you have an implementation question or need somebody to point you in the right direction, <Link to="">Stack Overflow</Link> is the place
        to ask your question and get help from the community. Even the supposedly "stupid" questions.
      </>
    ),
  },
  {
    title: 'Discord',
    Svg: require('/static/img/community/discord.svg').default,
    link: 'https://discord.gg/Sz887Xrn5V',
    linkText: 'Share Your Thoughts',
    description: (
      <>
        If you want to brainstorm with the community or tune into the development process behind DataSQRL,
        join us <Link to="">on Discord</Link>. Share your thoughts and feedback while watching how the sausage gets made.
      </>
    ),
  },
  {
    title: 'GitHub',
    Svg: require('../../static/img/community/github.svg').default,
    link: 'https://github.com/DataSQRL/sqrl',
    linkText: 'Contribute to DataSQRL',
    description: (
      <>
        <Link to="">GitHub</Link> is where all open-source development on DataSQRL takes place. <Link to="">File a bug</Link>,&nbsp;
        <Link to="">request a new feature</Link>, or contribute to the codebase. That's the beauty of open-source: when
        everybody contributes a little, something great can happen.
      </>
    ),
  },
];

const Updates = [
  {
    title: 'Twitter',
    Svg: require('../../static/img/community/twitter.svg').default,
    link: 'https://twitter.com/DataSQRL',
    linkText: 'Follow DataSQRL',
    description: (
      <>
        Follow <Link to="">DataSQRL on Twitter</Link> to keep up to date on the latest and greatest.
        We'll share development progress, milestones, and other relevant community news - without
        spamming your twitter feed.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('/static/img/generic/undraw_blog.svg').default,
    link: '/blog',
    linkText: 'Read the Blog',
    description: (
      <>
        The <Link to="/blog">DataSQRL blog</Link> regularly publishes articles on the development of
        DataSQRL, how to implement data services, and lessons we learned along the way. Great morning reading.
      </>
    ),
  },
  {
    title: 'Youtube',
    Svg: require('../../static/img/community/youtube.svg').default,
    link: 'https://www.youtube.com/@datasqrl',
    linkText: 'Subscribe',
    description: (
      <>
        We publish tutorial videos, DataSQRL examples, and how-tos on the <Link to="">DataSQRL Youtube channel</Link>.
        If you like to learn by watching, this is the place to go.
        And yes, we are too uncool for TikTok.
      </>
    ),
  },
];

export default function Community() {
  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <HomepageFeatures FeatureList={Support} />
        <HomepageFeatures FeatureList={Updates} />
      </main>
    </Layout>
  );
}
