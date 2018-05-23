const webpack = require('webpack');

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
        test: /index\.html/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
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
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[hash].[ext]',
          limit: 25000
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  mode: process.env.NODE_ENV
};

module.exports = webpackConfig;