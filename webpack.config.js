const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bin')
  },
  devtool: 'sourcemap',
  module: {
    rules: [
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&sourceMap=true&importLoaders=1',
            'postcss-loader?sourceMap=inline',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};

module.exports = webpackConfig;