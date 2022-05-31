module.exports = {
  siteMetadata: {
    title: `Dan Singer`,
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
  ],
}
