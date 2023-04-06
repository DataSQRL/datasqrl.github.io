import React, { useState, useEffect } from 'react';
import styles from './LinkRotation.module.css';

const RotatingLinks = ({teaser, links}) => {
    const [currentLinkIndex, setCurrentLinkIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % links.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [links.length]);

    return (
        <section className={styles.section}>
            <div className="container">
                {teaser}
                <a href={links[currentLinkIndex].url}>
                    {links[currentLinkIndex].text}
                </a>
            </div>
        </section>
    );
};

export default RotatingLinks;
