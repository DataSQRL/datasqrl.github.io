import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './FeatureGrid.module.css';

function Feature({image, title, link}) {
  let textHTML;
  if (link) {
    textHTML = <Link to={link}>{title}</Link>;
  } else {
    textHTML = <span>{title}</span>;
  }
  return (
    <div className="text--center">
      <div><img className={styles.featureSvg} src={image} alt={title} /></div>
      <div className={styles.featureText}>
        {textHTML}
      </div>
    </div>
  );
}

export default function FeatureGrid({FeatureList, header, columnBase}) {
  let headerHTML;
  if (header) {
      headerHTML = <h2 className="margin-bottom--md">{header}</h2>;
  } else {
      headerHTML = "";
  }

  const perRow = 12/columnBase;
  const renderGrid = () => {
    const gridItems = FeatureList.map((item, index) => (
      <div className={clsx('col col--'+columnBase, styles.feature)}>
        <Feature key={index} {...item} />
      </div>
    ));

    const gridRows = [];
    for (let i = 0; i < gridItems.length; i += perRow) {
      gridRows.push(
        <div key={i} className="row">
          {gridItems.slice(i, i + perRow)}
        </div>
      );
    }
    return gridRows;
  };


  return (
      <div className="container">
        {headerHTML}
        {renderGrid()}
      </div>
  );
}
