/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
      require('postcss-simple-vars'),
    require('postcss-nested'),
      require('postcss-import'),
    ]
  }
  
  module.exports = config