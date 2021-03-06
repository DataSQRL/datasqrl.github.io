import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

function Feature({Svg, title, link, linkText, description}) {
  let image;
  if (Svg) {
    image = <div className="text--center"><Svg className={styles.featureSvg} alt={title} /></div>;
  } else {
    image = "";
  }
  return (
    <div className={clsx('col col--4')}>
      {image}
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        <p className="text--left margin-bottom--sm">{description}</p>
        <div className="text--center">
          <Link
            className="button button--secondary button--sm"
            to={link}>
            {linkText}
          </Link>
        </div>
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
