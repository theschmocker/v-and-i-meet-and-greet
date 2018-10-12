module.exports = {
  siteMetadata: {
    title: 'Jacob Schmocker - Vector & Ink',
    description:
      'A listing of projects for a meet-and-greet with Michelle and Heather from Vector & Ink',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jacob Schmocker - Vector & Ink',
        short_name: 'JS - V&I',
        start_url: '/',
        background_color: '#556',
        theme_color: '#556',
        display: 'minimal-ui',
        icon: 'src/images/favicon-1024.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/util/typography.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: '700px',
            },
          },
        ],
      },
    },
  ],
}
