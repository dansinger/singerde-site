module.exports = {
  siteMetadata: {
    title: `dan singer`,
    siteUrl: `https://www.singerde.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/work`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `karla`,
          `inconsolata`
        ],
        display: 'swap'
      }
    }
  ],
}
