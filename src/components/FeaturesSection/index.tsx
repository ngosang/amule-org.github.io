import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

interface Feature {
  id: string;
  default: string;
}

const FEATURES: Feature[] = [
  {id: 'homepage.features.f1', default: '<strong>eD2k + Kademlia</strong> — both networks supported, full eMule wire compatibility.'},
  {id: 'homepage.features.f2', default: '<strong>Multi-platform</strong> — same engine on Linux, macOS, Windows; same on-disk state.'},
  {id: 'homepage.features.f3', default: '<strong>Headless variants</strong> — <code>amuled</code> daemon for NAS / VPS, with a remote GUI (<code>amulegui</code>), web UI (<code>amuleweb</code>), and CLI (<code>amulecmd</code>).'},
  {id: 'homepage.features.f4', default: '<strong>Free software</strong> — GPL-2.0; no telemetry, no upsells, no built-in ads.'},
  {id: 'homepage.features.f5', default: '<strong>Modern packaging</strong> — AppImage and Flatpak on Linux; macOS .app bundle; Windows portable .zip.'},
  {id: 'homepage.features.f6', default: '<strong>HTTPS server lists, MaxMindDB country flags</strong> — modernized stack, no legacy GeoIP dependency.'},
];

export default function FeaturesSection(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <h2>
        <Translate id="homepage.features.title">Features</Translate>
      </h2>
      <ul className={styles.ftList}>
        {FEATURES.map((f) => (
          <li
            key={f.id}
            dangerouslySetInnerHTML={{
              __html: translate({id: f.id, message: f.default}),
            }}
          />
        ))}
      </ul>
    </section>
  );
}
