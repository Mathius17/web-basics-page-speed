const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/javascripts')
  },
  plugins: [
    new CleanWebpackPlugin(['public/javascripts']),
  ]
};