import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const LINUX_SVG = 'M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7z';
const MACOS_SVG = 'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701';
const WINDOWS_SVG = 'M0,0H11.377V11.372H0ZM12.623,0H24V11.372H12.623ZM0,12.623H11.377V24H0Zm12.623,0H24V24H12.623';
const SOURCE_SVG = 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z';

const DOWNLOAD_PLATFORMS = [
  {
    svg: LINUX_SVG,
    osId: 'homepage.download.linux.os', osDefault: 'Linux',
    fmtId: 'homepage.download.linux.fmt', fmtDefault: 'AppImage · Flatpak',
    archId: 'homepage.download.linux.arch', archDefault: 'x86_64 · aarch64',
  },
  {
    svg: MACOS_SVG,
    osId: 'homepage.download.macos.os', osDefault: 'macOS',
    fmtId: 'homepage.download.macos.fmt', fmtDefault: 'Universal2 .dmg',
    archId: 'homepage.download.macos.arch', archDefault: 'Apple Silicon · Intel',
  },
  {
    svg: WINDOWS_SVG,
    osId: 'homepage.download.windows.os', osDefault: 'Windows',
    fmtId: 'homepage.download.windows.fmt', fmtDefault: 'portable .zip',
    archId: 'homepage.download.windows.arch', archDefault: 'x64 · ARM64',
  },
  {
    svg: SOURCE_SVG,
    osId: 'homepage.download.source.os', osDefault: 'Source',
    fmtId: 'homepage.download.source.fmt', fmtDefault: 'tar.gz',
    archId: 'homepage.download.source.arch', archDefault: 'build it yourself',
  },
];

const HIGHLIGHTS = [
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

const BENCH_V233 = [
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

const BENCH_EMULE = [
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

const SCREENSHOTS = [
  {
    src: '/img/screenshots/networks.png',
    altId: 'homepage.screenshots.networks.alt', altDefault: 'Networks tab — server list and Kademlia status',
    captionId: 'homepage.screenshots.networks.caption', captionDefault: 'Networks — eD2k servers and Kad status',
  },
  {
    src: '/img/screenshots/search.png',
    altId: 'homepage.screenshots.search.alt', altDefault: 'Search tab with results',
    captionId: 'homepage.screenshots.search.caption', captionDefault: 'Search — eD2k + Kad search results',
  },
  {
    src: '/img/screenshots/downloads.png',
    altId: 'homepage.screenshots.downloads.alt', altDefault: 'Transfers tab with active downloads',
    captionId: 'homepage.screenshots.downloads.caption', captionDefault: 'Transfers — per-file progress with availability bars',
  },
  {
    src: '/img/screenshots/shared.png',
    altId: 'homepage.screenshots.shared.alt', altDefault: 'Shared files tab',
    captionId: 'homepage.screenshots.shared.caption', captionDefault: 'Shared files',
  },
];

const FEATURES = [
  { id: 'homepage.features.f1', default: '<strong>eD2k + Kademlia</strong> — both networks supported, full eMule wire compatibility.' },
  { id: 'homepage.features.f2', default: '<strong>Multi-platform</strong> — same engine on Linux, macOS, Windows; same on-disk state.' },
  { id: 'homepage.features.f3', default: '<strong>Headless variants</strong> — <code>amuled</code> daemon for NAS / VPS, with a remote GUI (<code>amulegui</code>), web UI (<code>amuleweb</code>), and CLI (<code>amulecmd</code>).' },
  { id: 'homepage.features.f4', default: '<strong>Free software</strong> — GPL-2.0; no telemetry, no upsells, no built-in ads.' },
  { id: 'homepage.features.f5', default: '<strong>Modern packaging</strong> — AppImage and Flatpak on Linux; macOS .app bundle; Windows portable .zip.' },
  { id: 'homepage.features.f6', default: '<strong>HTTPS server lists, MaxMindDB country flags</strong> — modernized stack, no legacy GeoIP dependency.' },
];

function Hero() {
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

function WhatIsAMule() {
  return (
    <section className={styles.block}>
      <h2>
        <Translate id="homepage.whatisamule.title">What is aMule?</Translate>
      </h2>
      <p
        dangerouslySetInnerHTML={{
          __html: translate({
            id: 'homepage.whatisamule.p1',
            message:
              "aMule is a free, GPL-licensed peer-to-peer file-sharing client for the <strong>eD2k</strong> and <strong>Kademlia</strong> networks. It's compatible with eMule and runs natively on Linux, macOS, and Windows. The same on-disk state, the same protocol, one binary per major desktop.",
          }),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translate({
            id: 'homepage.whatisamule.p2',
            message:
              'After a long quiet period, the project is back under active maintenance — focused not just on bug fixes and modernization, but on dramatic <strong>throughput improvements</strong> that matter directly for any P2P client.',
          }),
        }}
      />
    </section>
  );
}

function DownloadSection() {
  return (
    <section className={`${styles.block} ${styles.downloads}`} id="download">
      <h2>
        <Translate id="homepage.download.title">Download</Translate>
      </h2>
      <p className={styles.dlLead}>
        <Translate id="homepage.download.lead">
          3.0.0 ships native binaries for every major desktop. Pick your platform:
        </Translate>
      </p>
      <div className={styles.dlGrid}>
        {DOWNLOAD_PLATFORMS.map((p) => (
          <Link
            key={p.osDefault}
            className={styles.dlCard}
            to="https://github.com/amule-org/amule/releases/latest"
          >
            <svg className={styles.dlIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d={p.svg} />
            </svg>
            <div className={styles.dlOs}>
              <Translate id={p.osId}>{p.osDefault}</Translate>
            </div>
            <div className={styles.dlFmt}>
              <Translate id={p.fmtId}>{p.fmtDefault}</Translate>
            </div>
            <div className={styles.dlArch}>
              <Translate id={p.archId}>{p.archDefault}</Translate>
            </div>
          </Link>
        ))}
      </div>
      <p className={styles.dlFoot}>
        <Translate
          id="homepage.download.foot"
          values={{
            a: (chunks) => (
              <Link to="https://github.com/amule-org/amule/releases/latest">{chunks}</Link>
            ),
          }}
        >
          {'All artifacts on the <a>latest release page</a>.'}
        </Translate>
      </p>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className={styles.block}>
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
                __html: translate({ id: h.detailId, message: h.detailDefault }),
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

function BenchmarkSection() {
  return (
    <section className={styles.block} id="bench">
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
            a: (chunks) => (
              <Link to="https://github.com/amule-org/amule/blob/master/docs/CHANGELOG.md#performance">
                {chunks}
              </Link>
            ),
          }}
        >
          {'Methodology: identical hardware and network for both versions, peer-to-peer between two daemons (no real-network sources). 2.3.3 is approximated by master at the last commit before the throughput rewrites began; the eD2k wire-level path between that commit and 2.3.3 is unchanged. Per-platform breakdown of the seeder-side and leecher-side contributions in the <a>3.0.0 changelog Performance section</a>.'}
        </Translate>
      </p>
    </section>
  );
}

function ScreenshotsSection() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const open = useCallback((index) => setLightbox({ open: true, index }), []);
  const close = useCallback(() => setLightbox((s) => ({ ...s, open: false })), []);
  const prev = useCallback(
    () =>
      setLightbox((s) => ({
        open: true,
        index: (s.index - 1 + SCREENSHOTS.length) % SCREENSHOTS.length,
      })),
    [],
  );
  const next = useCallback(
    () =>
      setLightbox((s) => ({
        open: true,
        index: (s.index + 1) % SCREENSHOTS.length,
      })),
    [],
  );

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox.open, close, prev, next]);

  const current = SCREENSHOTS[lightbox.index];

  return (
    <section className={styles.block}>
      <h2>
        <Translate id="homepage.screenshots.title">Screenshots</Translate>
      </h2>
      <p
        className={styles.ssLead}
        dangerouslySetInnerHTML={{
          __html: translate({
            id: 'homepage.screenshots.lead',
            message:
              'aMule 3.0.0 GUI — same look on Linux, macOS, and Windows. Click any screenshot to enlarge; use <kbd>←</kbd> <kbd>→</kbd> to navigate, <kbd>Esc</kbd> to close.',
          }),
        }}
      />
      <div className={styles.ssGrid}>
        {SCREENSHOTS.map((s, i) => (
          <figure
            key={s.src}
            className={styles.ssFigure}
            onClick={() => open(i)}
          >
            <img
              src={s.src}
              alt={translate({ id: s.altId, message: s.altDefault })}
              loading="lazy"
              className={styles.ssImg}
            />
            <figcaption className={styles.ssCaption}>
              <Translate id={s.captionId}>{s.captionDefault}</Translate>
            </figcaption>
          </figure>
        ))}
      </div>

      {lightbox.open && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            className={`${styles.modalBtn} ${styles.modalClose}`}
            onClick={close}
            aria-label="Close (Esc)"
          >
            ×
          </button>
          <button
            className={`${styles.modalBtn} ${styles.modalPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous (←)"
          >
            ❮
          </button>
          <button
            className={`${styles.modalBtn} ${styles.modalNext}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next (→)"
          >
            ❯
          </button>
          <figure
            className={styles.modalFigure}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={translate({ id: current.altId, message: current.altDefault })}
              className={styles.modalImg}
            />
            <figcaption className={styles.modalCaption}>
              <Translate id={current.captionId}>{current.captionDefault}</Translate>
            </figcaption>
          </figure>
          <div className={styles.modalCounter}>
            {lightbox.index + 1} / {SCREENSHOTS.length}
          </div>
        </div>
      )}
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.block}>
      <h2>
        <Translate id="homepage.features.title">Features</Translate>
      </h2>
      <ul className={styles.ftList}>
        {FEATURES.map((f) => (
          <li
            key={f.id}
            dangerouslySetInnerHTML={{
              __html: translate({ id: f.id, message: f.default }),
            }}
          />
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
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
