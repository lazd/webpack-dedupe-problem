var webpack = require('webpack');
var LibraryTemplatePlugin = require('webpack/lib/LibraryTemplatePlugin');

module.exports = {
  entry: './index.js',

  output: {
    path: './build/',
    filename: 'App.js'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(), // Dedupe dependencies
    function() {  // Define as a library
      this.plugin('after-plugins', function(compiler) {
        compiler.apply(new LibraryTemplatePlugin('App', 'this'));
      });
    }
  ]
};
