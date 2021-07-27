const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://docs.alfred-cms.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/alfred-logo.svg',
    logoLink: '/',
    title:
      "Alfred v1 Docs",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/getting-started',
      '/overview',
      '/content-modules',
      '/non-content-modules',
      '/headers-and-sections',
      '/micro-components',
      '/components',
      '/integrations',
      '/menu',
      '/routing',
      '/partials',
      '/settings',
      '/code-snippets'
    ],
    collapsedNav: [
    ],
    links: [
      { text: 'Bigger Picture', link: 'https://www.biggerpicture.agency' },
      { text: 'Studio Sidekicks', link: 'https://www.studiosidekicks.com' },
      { text: 'Web Dev Insider', link: 'https://www.webdevinsider.pl' },
    ],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'Alfred v1 documentation',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: '/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Alfred v1 Docs',
      short_name: 'AlfredDocs',
      start_url: '/',
      background_color: '#000000',
      theme_color: '#000000',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        /*{
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },*/
      ],
    },
  },
};

module.exports = config;
