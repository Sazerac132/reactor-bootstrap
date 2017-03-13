const path = require('path');

const webpackConfig = {
  entry: './src/js/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};

module.exports = webpackConfig;