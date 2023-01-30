import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './HomepageHeader.module.css';

export default function HomepageHeader({title, tagLine, text, buttonLink, buttonText, LogoSvg}) {
  let button;
  if (buttonLink) {
    button = <div className={styles.buttons}>
               <Link className="button button--primary button--lg" to={buttonLink}>{buttonText}</Link>
             </div>;
  } else {
    button = "";
  }
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
      <div className="row">
        <div className={clsx('col col--8')}>
            <h1 className="hero__title">{tagLine}</h1>
            <p className="hero__subtitle">
                {text}
            </p>
            {button}
        </div>
        <div className={clsx('col col--4')}>
            <LogoSvg  className={styles.bannerSvg} alt="DataSQRL Header Picture" />
        </div>
      </div>
      </div>
    </header>
  );
}