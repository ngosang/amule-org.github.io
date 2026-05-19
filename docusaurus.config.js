// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'aMule',
  tagline: 'All-platform eMule-compatible eD2k/Kad client',
  url: 'https://amule-org.github.io',
  baseUrl: '/',
  organizationName: 'amule-org',
  projectName: 'amule-org.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',
  favicon: 'img/aMule-icon.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: { label: 'English' },
      es: { label: 'Español' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'aMule',
        logo: {
          alt: 'aMule logo',
          src: 'img/aMule-icon.png',
        },
        items: [
          { to: '/#download', label: 'Download', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://github.com/amule-org/amule/releases',
            label: 'Releases',
            position: 'left',
          },
          {
            href: 'https://github.com/amule-org/amule/discussions',
            label: 'Discussions',
            position: 'left',
          },
          {
            href: 'https://github.com/amule-org/amule',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              { label: 'Documentation', to: '/docs/' },
              { label: 'Source code', href: 'https://github.com/amule-org/amule' },
              { label: 'Releases', href: 'https://github.com/amule-org/amule/releases' },
              {
                label: 'Changelog',
                href: 'https://github.com/amule-org/amule/blob/master/docs/CHANGELOG.md',
              },
              {
                label: 'Build & install',
                href: 'https://github.com/amule-org/amule/blob/master/docs/INSTALL.md',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Wiki', href: 'https://github.com/amule-org/amule/wiki' },
              { label: 'Discussions', href: 'https://github.com/amule-org/amule/discussions' },
              { label: 'Issues', href: 'https://github.com/amule-org/amule/issues' },
            ],
          },
        ],
        copyright:
          'aMule is free software released under the GNU GPL v2. The aMule developers have no control over what other peers transfer through eD2k/Kad and cannot be held liable for non-personal copyright infringement or other illegal activity by third parties. Share responsibly.',
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
