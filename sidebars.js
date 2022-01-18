/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //docs: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/overview',
      },
      collapsed: false,
      items: [
        "install",
        {
          type: 'category',
          label: 'Intro Tutorials',
          link: {
            type: 'generated-index',
            title: 'Introductory Tutorials',
            description: "Following the intro tutorials will get you up and running with DataSQRL in a few minutes. We recommend you work through the tutorials in order:"
          },
          items: [
            'getting-started/tutorials/nutshop-tutorial',
            'getting-started/tutorials/byod-tutorial',
          ],
        },
        "getting-started/why-datasqrl",
        {
          type: 'category',
          label: 'DataSQRL Use Cases',
          link: {
            type: 'generated-index',
            title: 'DataSQRL Use Cases',
            description: "How is DataSQRL used across various verticals and industries? Pick your use case to find out:"
          },
          items: [
            'getting-started/use-cases/telco',
          ],
        },
        {
          type: 'category',
          label: 'Introduction to SQRL',
          link: {
            type: 'doc',
            id: 'getting-started/sqrl/overview',
          },
          items: [
            'getting-started/sqrl/table',
            'getting-started/sqrl/relationship',
            'getting-started/sqrl/nested-table',
            'getting-started/sqrl/subscriptions',
            'getting-started/sqrl/functions',
            'getting-started/sqrl/lifecycle',
            'getting-started/sqrl/sql-primer',
          ],
        },
        {
          type: 'category',
          label: 'DataSQRL Comparison',
          link: {
            type: 'doc',
            id: 'getting-started/comparison/overview',
          },
          items: [
            'getting-started/comparison/database',
            'getting-started/comparison/data-warehouse',
            'getting-started/comparison/data-science',
            'getting-started/comparison/custom',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      link: {
        type: 'doc',
        id: 'guides/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Data Sources',
          link: {
            type: 'generated-index',
            title: 'How to Connect Data Sources to DataSQRL',
            description: "DataSQRL supports a range of data sources. Pick the one you want to connect to learn how:"
          },
          items: [
            'guides/sources/kafka',
            'guides/sources/files',
          ],
        },
        {
          type: 'category',
          label: 'SQRL',
          link: {
            type: 'doc',
            id: 'guides/sqrl/overview',
          },
          items: [
            'guides/sqrl/deduplicate-stream',
          ],
        },
        {
          type: 'category',
          label: 'API',
          link: {
            type: 'doc',
            id: 'guides/api/overview',
          },
          items: [
            'guides/api/graphql-js',
          ],
        },
        {
          type: 'category',
          label: 'Operations',
          link: {
            type: 'generated-index',
            title: 'How to Operate and Maintain DataSQRL',
            description: "These guides help you run DataSQRL in development and production."
          },
          items: [
            'guides/operations/dev-mode',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference Documentation',
      link: {
        type: 'doc',
        id: 'reference/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Key Concepts',
          link: {
            type: 'generated-index',
            title: 'Key Concepts in DataSQRL',
            description: "Knowing the key concepts in DataSQRL is useful for understanding how it works and how to use it. \
                Think Oxford dictionary for data nerds. Sounds fun? Read on! Doesn't? Then imagine Benedict Cumberbatch reading it to you with a British accent."
          },
          items: [
            'reference/concepts/data-service',
            'reference/concepts/view-store',
          ],
        },
        {
          type: 'category',
          label: 'SQRL Language Spec',
          link: {
            type: 'doc',
            id: 'reference/sqrl/overview',
          },
          items: [
            'reference/sqrl/grammar',
          ],
        },
        {
          type: 'category',
          label: 'Functions',
          link: {
            type: 'generated-index',
            title: 'Functions in SQRL',
            description: "Functions make your life so much easier and your SQRL scripts so much shorter. If we could \
            only remember them when we need them. Luckily you have this reference list of functions to look them up:"
          },
          items: [
            'reference/functions/string-fct',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Documentation',
      link: {
        type: 'doc',
        id: 'dev/overview',
      },
      items: [
        'dev/philosophy',
        {
          type: 'category',
          label: 'DataSQRL Architecture',
          link: {
            type: 'doc',
            id: 'dev/architecture/overview',
          },
          items: [
            'dev/architecture/ingest',
          ],
        },
        'dev/contribute'
      ],
    },
  ],

};

module.exports = sidebars;
