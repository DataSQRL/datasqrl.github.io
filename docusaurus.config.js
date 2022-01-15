// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataSQRL',
  tagline: 'Build Data Services In Minutes with SQL',
  url: 'https://dataengai.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dataengai', // Usually your GitHub org/user name.
  projectName: 'dataengai.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dataengai/dataengai.github.io/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dataengai/dataengai.github.io/edit/main/blog/',
        },
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
            docId: 'getting-started/overview',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/community', label: 'Community', position: 'left'},
          {to: '/blog', label: 'News', position: 'left'},
          {to: '/support', label: 'Support', position: 'left'},
          {
            href: 'https://github.com/tbd',
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
                to: '/docs/getting-started/overview',
              },
              {
                label: 'Documentation Overview',
                to: '/docs/intro',
              },
              {
                label: 'Reference Docs',
                to: '/docs/reference/overview',
              },
              {
                label: 'Developer Docs',
                to: '/docs/dev/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://slack.com/invite/datasqrl',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/datasqrl',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'Support',
                to: '/support',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tbd',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DataSQRL, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
