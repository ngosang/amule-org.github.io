import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

interface BenchV233Entry {
  hostId: string;
  hostDefault: string;
  detailId: string;
  detailDefault: string;
  oldNum: string;
  newNum: string;
  fasterId: string;
  fasterDefault: string;
  breakdownId: string;
  breakdownDefault: string;
}

interface BenchEmuleEntry {
  hostId: string;
  hostDefault: string;
  detailId: string;
  detailDefault: string;
  oldNum: string;
  oldTag: string;
  newNum: string;
  newTag: string;
  fasterId: string;
  fasterDefault: string;
}

const BENCH_V233: BenchV233Entry[] = [
  {
    hostId: 'homepage.bench.macos.host', hostDefault: 'macOS',
    detailId: 'homepage.bench.macos.detail', detailDefault: 'Apple Silicon · Mac Studio',
    oldNum: '0.35', newNum: '135',
    fasterId: 'homepage.bench.macos.faster', fasterDefault: '381× faster',
    breakdownId: 'homepage.bench.macos.breakdown', breakdownDefault: 'seeder fix: 86× · + leecher: 4.5×',
  },
  {
    hostId: 'homepage.bench.linux.host', hostDefault: 'Linux',
    detailId: 'homepage.bench.linux.detail', detailDefault: 'Ubuntu ARM · UTM VM',
    oldNum: '0.34', newNum: '117',
    fasterId: 'homepage.bench.linux.faster', fasterDefault: '345× faster',
    breakdownId: 'homepage.bench.linux.breakdown', breakdownDefault: 'seeder fix: 60× · + leecher: 5.8×',
  },
  {
    hostId: 'homepage.bench.windows.host', hostDefault: 'Windows',
    detailId: 'homepage.bench.windows.detail', detailDefault: 'Windows 11 ARM · UTM VM',
    oldNum: '0.36', newNum: '39',
    fasterId: 'homepage.bench.windows.faster', fasterDefault: '107× faster',
    breakdownId: 'homepage.bench.windows.breakdown', breakdownDefault: 'seeder fix: 19× · + leecher: 5.8×',
  },
];

const BENCH_EMULE: BenchEmuleEntry[] = [
  {
    hostId: 'homepage.bench.upload.host', hostDefault: 'Upload',
    detailId: 'homepage.bench.upload.detail', detailDefault: 'Windows seeds → Mac leecher',
    oldNum: '22', oldTag: 'eMule 0.70b', newNum: '106', newTag: 'aMule 3.0.0',
    fasterId: 'homepage.bench.upload.faster', fasterDefault: '~4.8× faster',
  },
  {
    hostId: 'homepage.bench.download.host', hostDefault: 'Download',
    detailId: 'homepage.bench.download.detail', detailDefault: 'Linux seeds → Windows leeches',
    oldNum: '20', oldTag: 'eMule 0.70b', newNum: '39', newTag: 'aMule 3.0.0',
    fasterId: 'homepage.bench.download.faster', fasterDefault: '~1.9× faster',
  },
];

export default function BenchmarkSection(): React.JSX.Element {
  return (
    <section className={styles.section} id="bench">
      <h2>
        <Translate id="homepage.bench.title">Throughput, measured</Translate>
      </h2>
      <p className={styles.benchLead}>
        <Translate id="homepage.bench.lead">
          3.0.0 vs 2.3.3 on the same hardware. Single eD2k peer downloading a 30 GB file from a
          Linux seeder over a local LAN, sustained over the last 30 s of a 90 s window.
        </Translate>
      </p>
      <div className={styles.benchGrid}>
        {BENCH_V233.map((b) => (
          <div key={b.hostDefault} className={styles.benchCard}>
            <div className={styles.benchHost}>
              <Translate id={b.hostId}>{b.hostDefault}</Translate>
            </div>
            <div className={styles.benchHostDetail}>
              <Translate id={b.detailId}>{b.detailDefault}</Translate>
            </div>
            <div className={styles.benchNumbers}>
              <div className={styles.benchOld}>
                <span className={styles.benchOldNum}>{b.oldNum}</span>
                <span className={styles.benchUnit}>MB/s</span>
                <span className={styles.benchOldTag}>2.3.3</span>
              </div>
              <div className={styles.benchArrow}>→</div>
              <div className={styles.benchNew}>
                <span className={styles.benchNewNum}>{b.newNum}</span>
                <span className={styles.benchUnit}>MB/s</span>
                <span className={styles.benchNewTag}>3.0.0</span>
              </div>
            </div>
            <div className={styles.benchMult}>
              <Translate id={b.fasterId}>{b.fasterDefault}</Translate>
            </div>
            <div className={styles.benchBreakdown}>
              <Translate id={b.breakdownId}>{b.breakdownDefault}</Translate>
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.benchVsHeading}>
        <Translate id="homepage.bench.vsemule.heading">vs eMule 0.70b · Windows</Translate>
      </h3>
      <div className={`${styles.benchGrid} ${styles.benchGridTwo}`}>
        {BENCH_EMULE.map((b) => (
          <div key={b.hostDefault} className={styles.benchCard}>
            <div className={styles.benchHost}>
              <Translate id={b.hostId}>{b.hostDefault}</Translate>
            </div>
            <div className={styles.benchHostDetail}>
              <Translate id={b.detailId}>{b.detailDefault}</Translate>
            </div>
            <div className={styles.benchNumbers}>
              <div className={styles.benchOld}>
                <span className={styles.benchOldNum}>{b.oldNum}</span>
                <span className={styles.benchUnit}>MB/s</span>
                <span className={styles.benchOldTag}>{b.oldTag}</span>
              </div>
              <div className={styles.benchArrow}>→</div>
              <div className={styles.benchNew}>
                <span className={styles.benchNewNum}>{b.newNum}</span>
                <span className={styles.benchUnit}>MB/s</span>
                <span className={styles.benchNewTag}>{b.newTag}</span>
              </div>
            </div>
            <div className={styles.benchMult}>
              <Translate id={b.fasterId}>{b.fasterDefault}</Translate>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.benchFoot}>
        <Translate
          id="homepage.bench.foot"
          values={{
            link: (
              <Link to="https://github.com/amule-org/amule/blob/master/docs/CHANGELOG.md#performance">
                <Translate id="homepage.bench.foot.link">3.0.0 changelog Performance section</Translate>
              </Link>
            ),
          }}
        >
          {'Methodology: identical hardware and network for both versions, peer-to-peer between two daemons (no real-network sources). 2.3.3 is approximated by master at the last commit before the throughput rewrites began; the eD2k wire-level path between that commit and 2.3.3 is unchanged. Per-platform breakdown of the seeder-side and leecher-side contributions in the {link}.'}
        </Translate>
      </p>
    </section>
  );
}
