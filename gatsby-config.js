module.exports = {
  siteMetadata: {
    title: `システムDXメディア`,
    description: `業務システムを中心に企業のDXを支援する情報を発信`,
    author: ``,
    siteUrl: `https://systemdx.net`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_TRACKING_ID],
      },
    },
    {
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "ca-pub-9862632130449490",
        head: false // Optional
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://systemdx.net`,
        sitemap: `https://systemdx.net/sitemap/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    {
      resolve: 'gatsby-source-microcms',
       options: { 
         apiKey: 'b4da6fbc4fba44e79ebba7ea5b9b1ee7a7ce',
         serviceId: 'lp3lq8282q',
         apis: [{ 
           endpoint: 'information',
           }],
         },
       },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
