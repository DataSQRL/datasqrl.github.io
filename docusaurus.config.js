// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataSQRL',
  tagline: 'Build Data Products Efficiently',
  url: 'https://www.datasqrl.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: true,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'datasqrl', // Usually your GitHub org/user name.
  projectName: 'datasqrl.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DataSQRL/datasqrl.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DataSQRL/datasqrl.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-Y4XLW4QZYX',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'DataSQRL',
        logo: {
          alt: 'DataSQRL Logo',
          src: 'img/head_squirrel.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'dropdown',
            label: 'Use Cases',
            position: 'left',
            items: [
              {
                label: 'Data Mesh',
                to: '/usecases/datamesh'
              },
              {
                label: 'Event-Driven Microservice',
                to: '/usecases/microservice'
              },
              {
                label: 'Artifical Intelligence',
                to: '/usecases/ai'
              },
              {
                label: 'Observability & Automation',
                to: '/usecases/observability'
              },
            ],
          },
          {to: '/community', label: 'Community', position: 'left'},
          {to: '/services', label: 'Services', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contact', label: "Contact Us", position: 'right'},
          {
            href: 'https://github.com/DataSQRL/sqrl',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Documentation Overview',
                to: '/docs/intro',
              },
              {
                label: 'Reference Docs',
                to: '/docs/reference/introduction',
              },
              {
                label: 'DataSQRL Process',
                to: '/docs/process/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/datasqrl',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/datasqrlcommunity/shared_invite/zt-2l3rl1g6o-im6YXYCqU7t55CNaHqz_Kg',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DataSQRL/sqrl',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DataSQRL',
              },
            ],
          },
          {
            title: 'DataSQRL',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Services',
                to: '/services',
              },
              {
                label: "Careers",
                to: '/careers',
              },
              {
                label: 'Contact Us',
                to: '/contact',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DataSQRL, Inc.<br /><a href="/docs/attribution">Image Attributions</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/logo.png',
      metadata: [
        {name: 'keywords', content: 'data, API, SQRL, DataSQRL, data product, data pipeline, database, streaming, real-time analytics'},
        {name: 'description', content: 'DataSQRL is a compiler and build tool for streaming data pipelines to build data APIs in minutes.'},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: '@DataSQRL'}
      ],
    }),

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexPages: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }),
    ],
  ],
  stylesheets: [
    {
      rel: 'stylesheet',
      href: '/css/custom.css',
    },
  ],
};

module.exports = config;
