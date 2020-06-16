const path = require('path');
const package = require("./package.json")
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/webuploader.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webuploader.js',
    library: 'WebUploader',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({ 'version': package.version })
  ]
};