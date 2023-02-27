const vars = require("./styles/global/_variables")
const functions = require("./styles/global/_cssFunctions")

module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-mixins': {},
      'postcss-nested': {},
      'postcss-simple-vars': {variables: vars},

      'postcss-custom-media': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          
        },
      },
      'postcss-functions': {
        functions
      },
      
    }
  }
  