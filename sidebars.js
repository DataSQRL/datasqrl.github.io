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
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Introduction',
    },
    {
      type: 'doc',
      label: '🚀 Getting Started',
      id: 'getting-started/quickstart',
    },
    {
      type: 'category',
      label: '📔 Tutorials',
      link: {
        type: 'doc',
        id: 'getting-started/tutorials/overview',
      },
      items: [
        {
          type: 'doc',
          label: 'Metrics Processing',
          id: 'getting-started/quickstart',
        }
      ]
    },
    {
      type: 'category',
      label: '❓ Why DataSQRL?',
      link: {
        type: 'doc',
        id: 'getting-started/concepts/datasqrl',
      },
      collapsed: false,
      items: [
        // {
        //   type: 'category',
        //   label: 'DataSQRL Introduction',
        //   link: {
        //     type: 'doc',
        //     id: 'getting-started/intro/overview',
        //   },
        //   items: [
        //     'getting-started/intro/sqrl',
        //     'getting-started/intro/data-sources',
        //     'getting-started/intro/api',
        //     'getting-started/intro/advanced',
        //     'getting-started/intro/deploy',
        //   ],
        // },
        'getting-started/concepts/datasqrl',
        // 'getting-started/concepts/sqrl',
        "getting-started/concepts/why-datasqrl",
        'getting-started/concepts/when-datasqrl',
        {
          type: 'category',
          label: 'DataSQRL Framework',
          link: {
            type: 'doc',
            id: 'process/intro',
          },
          collapsed: true,
          items: [
            'reference/concepts/data-product',
            'process/customer-focused',
            'process/responsive',
            'process/integrated'
          ],
        },
      ],
    },
   {
      type: 'doc',
      label: '💡 How to Use DataSQRL',
      id: 'reference/sqrl/learn'
    },
    {
      type: 'category',
      label: '📖 DataSQRL Reference',
      collapsed: false,
      link: {
        type: 'doc',
        id:  'reference/sqrl/sqrl-spec',
      },
      items: [
        'reference/sqrl/sqrl-spec',
        'reference/sqrl/datasqrl-spec',
        'reference/sqrl/cli',

//        'reference/sources/add-source',
//        'reference/sources/schema',
//        'reference/sources/add-sink',
//        'reference/sqrl/import',
//        'reference/sqrl/export',
//        'reference/sqrl/relationship',
        {
          type: 'category',
          label: 'Functions',
          link: {
            type: 'generated-index',
            title: 'Functions in SQRL',
            description: "Functions make your life so much easier and your SQRL scripts so much shorter. If we could \
            only remember them when we need them. Luckily you have this reference list of SQRL function packages to look them up:"
          },
          items: [
            'reference/sqrl/functions/string',
            'reference/sqrl/functions/time',
            'reference/sqrl/functions/text',
            'reference/sqrl/functions/secure',
            'reference/sqrl/functions/json',
            'reference/sqrl/functions/vector',
            'reference/sqrl/functions/custom-functions',
          ],
        },
        'dev/roadmap',


//          link: {
//            type: 'doc',
//          },
//          items: [
//            'reference/operations/command',
//            'reference/operations/repository',
//            'reference/operations/optimizer',
//            'reference/operations/package-config',
//            {
//              type: 'category',
//              label: 'Deploy',
//              link: {
//                type: 'doc',
//                id: 'reference/operations/deploy/overview',
//              },
//              items: [
//                // 'reference/operations/deploy/docker'
////                'reference/operations/deploy/secrets',
//              ],
//            },
//            {
//              type: 'category',
//              label: 'Engines',
//              link: {
//                type: 'doc',
//                id: 'reference/operations/engines/overview',
//              },
//              items: [
//                'reference/operations/engines/flink',
//                'reference/operations/engines/postgres',
//                'reference/operations/engines/vertx',
//              ],
//            },
//          ],
//        },
//        {
//          type: 'category',
//          label: 'Key Concepts',
//          link: {
//            type: 'generated-index',
//            title: 'Key Concepts in DataSQRL',
//            description: "Knowing the key concepts in DataSQRL is useful for understanding how it works and how to use it. \
//                Think Oxford dictionary for data nerds. Sounds fun? Read on! Doesn't? Then imagine Benedict Cumberbatch reading it to you with a British accent."
//          },
//          items: [
////            'reference/concepts/package',
//
//          ],
//        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Developer Documentation',
    //   link: {
    //     type: 'doc',
    //     id: 'dev/overview',
    //   },
    //   items: [
    //     'dev/architecture',
    //     'dev/roadmap',
    //     'dev/contribute',
    //   ],
    // },
//    {
//      type: 'category',
//      label: 'DataSQRL Process',
//      link: {
//        type: 'doc',
//        id: 'process/intro',
//      },
//      items: [
//        'process/customer-focused',
//        'process/responsive',
//        'process/integrated'
//      ],
//    },
  ],

};

module.exports = sidebars;
