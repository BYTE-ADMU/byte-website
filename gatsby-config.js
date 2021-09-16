module.exports = {
  siteMetadata: {
    title: `BYTE Website`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@byte-admu`,
    siteUrl: `https://byteadmu.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BYTE Website`,
        short_name: `BYTE`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#FAFAFA`,
        display: `minimal-ui`,
        icon: `src/assets/img/byte-icon-without-text.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    
    // Gatsby Strapi Setup
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: "https://byte-website.herokuapp.com",
    //     queryLimit: 1000, // default is 100
    //     collectionTypes: [
    //       "category",
    //       "projects",
    //     ],
    //   },
    // },

    // Gatsby Sass
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,    
  ],
}
