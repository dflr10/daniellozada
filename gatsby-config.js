const contentConfig = require('./src/config/content-config');

module.exports ={
  plugins: [contentConfig,`gatsby-plugin-image`,`gatsby-plugin-pnpm`,`gatsby-plugin-sass`],
  jsxRuntime: `automatic`,
}