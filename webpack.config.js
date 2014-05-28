var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    path: './build/',
    filename: 'App.js',
    library: 'App',
    libraryTarget: 'this'
  },

  plugins: [
    new webpack.optimize.DedupePlugin() // Dedupe dependencies
  ]
};
