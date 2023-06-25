const dotenv = require(`dotenv`);



module.exports = {
    resolve: `gatsby-source-contentful`,
    options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enviroment: 'master'
    },
};