import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '@site/src/components/Hero';
import WhatIsAMule from '@site/src/components/WhatIsAMule';
import DownloadSection from '@site/src/components/DownloadSection';
import HighlightsSection from '@site/src/components/HighlightsSection';
import BenchmarkSection from '@site/src/components/BenchmarkSection';
import ScreenshotsSection from '@site/src/components/ScreenshotsSection';
import FeaturesSection from '@site/src/components/FeaturesSection';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="aMule is a free, all-platform eMule-compatible eD2k/Kad client. Linux, macOS, Windows. Now massively faster: ~100–380× peer-to-peer throughput vs 2.3.3."
    >
      <Hero />
      <main>
        <WhatIsAMule />
        <DownloadSection />
        <HighlightsSection />
        <BenchmarkSection />
        <ScreenshotsSection />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
