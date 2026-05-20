import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Hero(): React.JSX.Element {
  const logoSrc = useBaseUrl('/img/aMule-icon.png');
  const screenshotSrc = useBaseUrl('/img/screenshots/downloads.png');
  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <img src={logoSrc} alt="aMule logo" className={styles.heroIcon} />
        <h1 className={styles.heroTitle}>aMule</h1>
        <p className={styles.tagline}>
          <Translate id="homepage.tagline">All-platform eMule-compatible eD2k/Kad client</Translate>
        </p>
        <div className={styles.ctaRow}>
          <Link
            className="button button--primary button--lg"
            to="/download"
          >
            <Translate id="homepage.hero.cta.download">Download</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs"
          >
            <Translate id="homepage.hero.cta.docs">Documentation</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/amule-org/amule"
          >
            <Translate id="homepage.hero.cta.github">GitHub</Translate>
          </Link>
        </div>
      </div>
      <div className={styles.heroScreenshot}>
        <img
          src={screenshotSrc}
          alt="aMule transfers tab"
          className={styles.screenshotImg}
        />
      </div>
    </header>
  );
}
