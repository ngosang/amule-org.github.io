import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function Hero(): React.JSX.Element {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <img src="/img/aMule-icon.png" alt="aMule logo" className={styles.heroIcon} />
        <h1 className={styles.heroTitle}>aMule</h1>
        <p className={styles.tagline}>
          <Translate id="homepage.tagline">All-platform eMule-compatible eD2k/Kad client</Translate>
        </p>
        <p className={styles.aliveBanner}>
          <span className={styles.badge}>3.0.0</span>{' '}
          <strong>
            <Translate id="homepage.hero.alive">aMule is alive again.</Translate>
          </strong>{' '}
          <span
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.alive.detail',
                message: 'First major release in five years — and up to <strong>~380&times;</strong> faster.',
              }),
            }}
          />
        </p>
        <div className={styles.ctaRow}>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/amule-org/amule/releases/latest"
          >
            <Translate id="homepage.hero.cta.download">Download latest release</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/amule-org/amule"
          >
            <Translate id="homepage.hero.cta.github">View on GitHub</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}
