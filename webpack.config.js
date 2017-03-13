const path = require('path');

const webpackConfig = {
  entry: './src/js/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = webpackConfig;