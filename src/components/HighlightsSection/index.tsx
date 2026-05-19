import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

interface Highlight {
  num: string;
  labelId: string;
  labelDefault: string;
  detailId: string;
  detailDefault: string;
  isMajor: boolean;
}

const HIGHLIGHTS: Highlight[] = [
  {
    num: '~100–380×',
    labelId: 'homepage.highlights.hl1.label', labelDefault: 'Peer-to-peer download throughput',
    detailId: 'homepage.highlights.hl1.detail',
    detailDefault: 'Disk I/O off the main thread, ASIO/EPOLLET races fixed, throttlers replaced with proper token-bucket limiters. <a href="#bench">See the numbers →</a>',
    isMajor: true,
  },
  {
    num: '~4.8×',
    labelId: 'homepage.highlights.hl2.label', labelDefault: 'vs eMule 0.70b on Windows',
    detailId: 'homepage.highlights.hl2.detail',
    detailDefault: 'aMule 3.0.0 sustains ~106 MB/s on upload (vs 22 MB/s eMule) and ~39 MB/s on download (vs 20 MB/s eMule), same UTM hardware.',
    isMajor: true,
  },
  {
    num: 'CMake',
    labelId: 'homepage.highlights.hl3.label', labelDefault: 'Modern build system',
    detailId: 'homepage.highlights.hl3.detail',
    detailDefault: 'Autotools removed entirely. Single CMake build, minimum CMake 3.10, minimum wxWidgets 3.2.0.',
    isMajor: false,
  },
  {
    num: 'Native',
    labelId: 'homepage.highlights.hl4.label', labelDefault: 'Binaries for every desktop',
    detailId: 'homepage.highlights.hl4.detail',
    detailDefault: 'AppImage, Flatpak, macOS Universal2 .dmg, Windows portable .zip — x86_64 and ARM64 where the platform supports it.',
    isMajor: false,
  },
  {
    num: 'HTTPS',
    labelId: 'homepage.highlights.hl5.label', labelDefault: 'Server lists, version checks',
    detailId: 'homepage.highlights.hl5.detail',
    detailDefault: 'Hand-rolled TLS replaced with <code>wxWebRequest</code>. Server-met downloads from modern HTTPS endpoints work again.',
    isMajor: false,
  },
  {
    num: 'Real caps',
    labelId: 'homepage.highlights.hl6.label', labelDefault: 'Bandwidth limiting that works',
    detailId: 'homepage.highlights.hl6.detail',
    detailDefault: 'Both upload and download throttlers rewritten as proper token-bucket limiters. <code>MaxUpload=0</code> finally means literal unlimited.',
    isMajor: false,
  },
];

export default function HighlightsSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <h2>
        <Translate id="homepage.highlights.title">3.0.0 highlights</Translate>
      </h2>
      <div className={styles.hlGrid}>
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.labelDefault}
            className={`${styles.hlCard} ${h.isMajor ? styles.hlMajor : ''}`}
          >
            <div className={styles.hlNum}>{h.num}</div>
            <div className={styles.hlLabel}>
              <Translate id={h.labelId}>{h.labelDefault}</Translate>
            </div>
            <div
              className={styles.hlDetail}
              dangerouslySetInnerHTML={{
                __html: translate({id: h.detailId, message: h.detailDefault}),
              }}
            />
          </div>
        ))}
      </div>
      <p className={styles.hlLink}>
        <Link to="https://github.com/amule-org/amule/blob/master/docs/CHANGELOG.md">
          <Translate id="homepage.highlights.changelog">Full 3.0.0 changelog →</Translate>
        </Link>
      </p>
    </section>
  );
}
