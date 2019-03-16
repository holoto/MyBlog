module.exports = {
  siteMetadata: {
    title: 'blog for holoto',
    author: 'holoto',
    description: 'blog for holoto',
    siteUrl: 'https://2147483647.tk',
    social: {
      github: 'holoto'
    },
  },
  plugins: [
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     path: `${__dirname}/content/assets`,
  //     name: 'assets',
  //   },
  // }, 
    {
      resolve: 'gatsby-source-yuque',
      options: {
        login: 'holoto',
        repo: 'blog',
        mdNameFormat: 'slug',
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
        //   {
        //   resolve: 'gatsby-remark-yuque-images',
        //   options: {
        //     maxWidth: 590,
        //   },
        // },
        // {
        //   resolve: 'gatsby-remark-images',
        //   options: {
        //     maxWidth: 590,
        //   },
        // },
        // {
        //   resolve: 'gatsby-remark-responsive-iframe',
        //   options: {
        //     wrapperStyle: 'margin-bottom: 1.0725rem',
        //   },
        // },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135965843-1',
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Blog for holoto',
        short_name: 'holoto',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: `static/128.png`,
        legacy: false,
      },
    },

    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    
    // 'gatsby-plugin-netlify', // make sure to put last in the array
  ],
}