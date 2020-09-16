module.exports = {
  pathPrefix: "/dsc-website-template",
  siteMetadata: {
    title: `Developer Student Club`,
    description: `Developer Student Clubs(DSC) is a Google Developers program for university students to acquire technical skills and solve problems`,
    university: `SCET`,
    lang: `en`,
    register: `https://dsc.community.dev/sarvajanik-college-of-engineering-technology/`,
    mail: `dsc@scet.ac.in`,
    social: {
      whatsapp: `https://chat.whatsapp.com/GC80n4zkiPV4w3TqS0hmML`,
      instagram: `https://www.instagram.com/dscscet/`,
      linkedin: `https://www.linkedin.com/company/dscscet/`,
      email: `mailto:dsc@scet.ac.in`,
    }
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./teams/`,
        name: 'teams',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dsc-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
