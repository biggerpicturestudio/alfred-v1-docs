const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
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
      '/installation',
      '/overview',
      '/content-modules',
      '/components',
      '/headers-and-sections',
      '/imgix',
      '/integrations',
      '/menu',
      '/non-content-modules',
      '/micro-components',
      '/routing',
      '/partials',
      '/settings',
      '/video-tutorials',
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
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
