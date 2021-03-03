module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `An opinionated gatsbyjs starter`,
    author: `@brandonpetty`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter`,
        short_name: `gatsby-starter`,
        description: `The application does cool things and makes your life better.`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
     `gatsby-plugin-offline`,
  ],
}
