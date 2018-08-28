module.exports = {
  siteMetadata: {
    title: 'MB.',
  },
    plugins: [
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Kosugi Maru']
                }
            }

        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        },
    ]
}
