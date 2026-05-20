import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function HeroScreenshot(): React.JSX.Element {
  const screenshotSrc = useBaseUrl('/img/screenshots/downloads.png');
  return (
    <div className={styles.wrapper}>
      <img
        src={screenshotSrc}
        alt="aMule transfers tab"
        className={styles.screenshot}
      />
    </div>
  );
}
