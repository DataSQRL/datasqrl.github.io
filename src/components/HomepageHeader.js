import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './HomepageHeader.module.css';

export default function HomepageHeader({title, tagLine, text, buttonLink, buttonText, LogoSvg, youtubeURL}) {
  let button;
  if (buttonLink) {
    button = <div className={clsx('margin-bottom--lg', styles.buttons)}>
               <Link className="button button--primary button--lg" to={buttonLink}>{buttonText}</Link>
             </div>;
  } else {
    button = "";
  }
  const renderYoutubeEmbed = () => {
    if (youtubeURL) {
      return ( <iframe width="100%" height="100%" src={youtubeURL} title="DataSQRL Introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> );
    } else {
      return <LogoSvg className={styles.bannerSvg} alt="DataSQRL Header Picture" />;
    }
  };

  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
      <div className="row">
        <div className={clsx('col col--8', styles.col)}>
            <h1 className="hero__title">{tagLine}</h1>
            <p className="hero__subtitle">
                {text}
            </p>
            {button}
        </div>
        <div className={clsx('col col--4', styles.pictureCol)}>
          {renderYoutubeEmbed()}
        </div>
      </div>
      </div>
    </header>
  );
}