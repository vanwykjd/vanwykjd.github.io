module.exports = {
  siteMetadata: {
    title: `JOSH VAN WYK`,
    description: `FULL-STACK DEVELOPER`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-antd',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `600`]
          },
          {
            family: `Raleway`,
            variants: [`300`, `700`, `900`]
          },
          {
            family: 'Roboto Condensed',
          },
          {
            family: 'IM Fell Great Primer',
            variants: [`400i`]
          },
          {
            family: 'Playfair Display',
            variants: [`400i`]
          },
          {
            family: 'BenchNine',
            variants: [`300`]
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
