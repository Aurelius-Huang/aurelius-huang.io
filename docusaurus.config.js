// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '三余知行',
  tagline: '冬者岁之余，夜者日之余，阴雨者时之余也',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://threefish.site',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aurelius Huang', // Usually your GitHub org/user name.
  projectName: 'threefish.site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        language: ['zh'],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/aurelius-huang/aurelius-huang.github.io',
        },
        blog: {
          path: 'trends',
          blogTitle: '动态',
          routeBasePath: 'trend',
          showReadingTime: true,
          postsPerPage: 5,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/aurelius-huang/aurelius-huang.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // ["docusaurus-plugin-umami"],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ml',
        path: './articles/ml',
        routeBasePath: 'ml',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dl',
        path: './articles/dl',
        routeBasePath: 'dl',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'aigc',
        path: './articles/aigc',
        routeBasePath: 'aigc',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'practice',
        path: './articles/practice',
        routeBasePath: 'practice',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'communication',
        path: './articles/communication',
        routeBasePath: 'communication',
        sidebarPath: './sidebars.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '三余知行',
        logo: {
          alt: '冬者岁之余，夜者日之余，阴雨者时之余也',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/trend',
            label: '动态',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            to: '/ml',
            label: '机器学习',
            docId: 'index',
            type: 'doc',
            position: 'right',
            docsPluginId: 'ml',
          },
          {
            to: '/dl',
            label: '深度学习',
            docId: 'index',
            type: 'doc',
            position: 'right',
            docsPluginId: 'dl',
          },
          {
            to: '/aigc',
            label: 'AIGC',
            docId: 'index',
            type: 'doc',
            position: 'right',
            docsPluginId: 'aigc',
          },
          {
            type: 'dropdown',
            label: '应用篇',
            position: 'right',
            items: [
              {
                to: '/practice',
                label: '工程实践',
                docId: 'index',
                docsPluginId: 'practice',
              }
            ],
          },
          {
            type: 'dropdown',
            label: '读写听说',
            position: 'right',
            items: [
              {
                to: '/communication',
                label: '人际方法',
                docId: 'index',
                docsPluginId: 'communication',
              }
            ]
          },
          {
            type: 'search',
            position: 'right'
          },
          {
            href: 'https://github.com/aurelius-huang',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '知识体系',
            items: [
              {
                label: '机器学习',
                to: '/ml',
              },
              {
                label: '深度学习',
                to: '/dl',
              },
              {
                label: 'AIGC',
                to: '/aigc',
              },
            ],
          },
          {
            title: '场景应用',
            items: [
              {
                label: 'NLP',
                to: '/practice',
              },
              {
                label: '搜索引擎',
                to: '/practice',
              },
              {
                label: '推荐系统',
                to: '/practice',
              },
            ],
          },
          {
            title: '编程语言',
            items: [
              {
                label: 'Java',
                to: '/practice',
              },
              {
                label: 'Python',
                to: '/practice',
              },
              {
                label: 'Go',
                to: '/practice',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: 'CSDN',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'BiliBili',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aurelius-huang',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Threefish K. A. 保留所有权利。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
