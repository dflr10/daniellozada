const dotenv = require("dotenv");
  
let activeEnviroment = process.env.GATSBY_ACTIVE_ENV || "development";
console.log('!!!activeEnviroment: '+ activeEnviroment);

if (activeEnviroment === "development") {
  dotenv.config({ path: './src/env/.env.development'});
} else {
  (activeEnviroment === "staging")
    ? dotenv.config({path: './src/env/.env.integration'})
    : dotenv.config({path: './src/env/.env'})
}

module.exports = {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          enviroment: 'master',
        },  
  };