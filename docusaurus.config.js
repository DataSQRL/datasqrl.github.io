// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataSQRL',
  tagline: 'Build Data Services In Minutes',
  url: 'https://datasqrl.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
          editUrl: 'https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/',
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
        defaultMode: 'light',
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
            label: 'Docs',
          },
          {to: '/community', label: 'Community', position: 'left'},
          {to: '/services', label: 'Services', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
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
                label: 'Discord',
                href: 'https://discord.gg/Sz887Xrn5V',
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
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contact Us',
                to: '/contact',
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
