import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'aMule',
  tagline: 'All-platform eMule-compatible eD2k/Kad client',
  url: 'https://amule-org.github.io',
  baseUrl: '/',
  organizationName: 'amule-org',
  projectName: 'amule-org.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  favicon: 'img/aMule-icon.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'English'},
      es: {label: 'Español'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          blogTitle: 'Blog',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          feedOptions: {
            type: 'all',
            copyright: 'aMule developers',
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'es'],
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
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
        {to: '/#download', label: 'Download', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
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
            {label: 'Blog', to: '/blog'},
            {label: 'Documentation', to: '/docs/'},
            {label: 'Source code', href: 'https://github.com/amule-org/amule'},
            {label: 'Releases', href: 'https://github.com/amule-org/amule/releases'},
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
            {label: 'Discussions', href: 'https://github.com/amule-org/amule/discussions'},
            {label: 'Issues', href: 'https://github.com/amule-org/amule/issues'},
          ],
        },
      ],
      copyright:
        'aMule is free software released under the GNU GPL v2. The aMule developers have no control over what other peers transfer through eD2k/Kad and cannot be held liable for non-personal copyright infringement or other illegal activity by third parties. Share responsibly.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
