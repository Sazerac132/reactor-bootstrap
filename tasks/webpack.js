'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gutil = require('gutil');

gulp.task('webpack', function(cb) {
  process.env.NODE_ENV = 'production';

  let config = require('../webpack.config');

  webpack(config, function(err, stats) {
    if (err) {
      throw err;
    }

    gutil.log('[webpack]', stats.toString());
    cb();
  });
});

gulp.task('webpack-dev', function() {
  process.env.NODE_ENV = 'development';

  let config = require('../webpack.config');
  let compiler = webpack(config);

  let options = {
    quiet: true
  };

  let protocol = 'http', host = 'localhost', port = process.env['npm_package_config_port'] || 3001;

  let server = new WebpackDevServer(compiler, options)
    .listen(port, host, function(err) {
      if (err) {
        throw err;
      }

      gutil.log('[webpack dev server]', `listening at ${protocol}://${host}:${port}`);
    });
});