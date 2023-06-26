const dotenv = require('dotenv');
const contentConfig = require('./src/config/content-config');

let activeEnviroment = process.env.GATSBY_ACTIVE_ENV || "development";
console.log(':::::activeEnviroment '+ activeEnviroment);

if (activeEnviroment === "development") {
  dotenv.config({ path: './src/env/.env.development'});
} else {
  (activeEnviroment === "staging")
      ? dotenv.config({path: './src/env/.env.integration'})
      : dotenv.config({path: './src/env/.env'})
}

module.exports ={
  plugins: [contentConfig,`gatsby-plugin-image`,`gatsby-plugin-pnpm`,`gatsby-plugin-sass`],
  jsxRuntime: `automatic`,

}
