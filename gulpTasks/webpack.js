const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gutil = require('gutil');

gulp.task('webpack', function(cb) {
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
  let config = require('../webpack.config');
  let compiler = webpack(config);

  let options = {
    publicPath: '/bin/',
    stats: {
      colors: true
    },
    quiet: true
  };
  let protocol = 'http', host = 'localhost', port = 8080;

  let server = new WebpackDevServer(compiler, options)
    .listen(port, host, function(err) {
      if (err) {
        throw err;
      }

      gutil.log('[webpack dev server]', `listening at ${protocol}://${host}:${port}`);
    });
});