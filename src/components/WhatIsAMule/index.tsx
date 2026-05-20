import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function WhatIsAMule(): React.JSX.Element {
  return (
    <section className={styles.section}>
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
              'After years of quiet, the project is back under active maintenance. The 3.0.0 release brings a modernized build system, fresh native packages for every major desktop, and an updated codebase ready for current systems — without breaking the protocol compatibility that lets aMule work alongside any eMule-based client.',
          }),
        }}
      />
    </section>
  );
}
