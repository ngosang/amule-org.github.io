import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '@site/src/components/Hero';
import WhatIsAMule from '@site/src/components/WhatIsAMule';
import HeroScreenshot from '@site/src/components/HeroScreenshot';
import HighlightsSection from '@site/src/components/HighlightsSection';
import FeaturesSection from '@site/src/components/FeaturesSection';
import ScreenshotsSection from '@site/src/components/ScreenshotsSection';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="aMule is a free, all-platform eMule-compatible eD2k/Kad client for Linux, macOS, and Windows."
    >
      <Hero />
      <main className={styles.homepageMain}>
        <WhatIsAMule />
        <HeroScreenshot />
        <HighlightsSection />
        <FeaturesSection />
        <ScreenshotsSection />
      </main>
    </Layout>
  );
}
