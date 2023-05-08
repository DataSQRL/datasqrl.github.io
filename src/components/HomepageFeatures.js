import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

function Feature({image, title, link, linkText, description}) {
  let imageHTML = "";
  if (image) {
    imageHTML = <div className="text--center"><img className={styles.featureSvg} loading="lazy" src={image} alt={title} /></div>;
    //image = <div className="text--center"><Svg className={styles.featureSvg} alt={title} /></div>;
  }
  let linkContent = "";
  if (link) {
    linkContent = <div className="text--center"><Link className="button button--secondary button--sm" to={link}>{linkText}</Link></div>
  }
  let mainContent = "";
  if (description) {
    mainContent = <p className="text--left margin-bottom--sm">{description}</p>
  }
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imageHTML}
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        {mainContent}
        {linkContent}
      </div>
    </div>
  );
}

export default function HomepageFeatures({FeatureList, headline}) {
  let header;
  if (headline) {
    header = <h2 className="margin-bottom--md">{headline}</h2>;
  } else {
    header = "";
  }
  return (
    <section className={styles.features}>
      <div className="container">
        {header}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
