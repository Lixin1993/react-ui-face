// use posecss plugins
const autoprefixer = require('autoprefixer')

module.exports = {
  // autoprefixer
  plugins: [
    autoprefixer({
      // browsers: ['Android > 4.0', 'IOS > 7']
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8'
      ]
    })
  ]
}