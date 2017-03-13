const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  entry: './src/js/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bin')
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};

module.exports = webpackConfig;