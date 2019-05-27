const { task } = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gutil = require('gutil');

task('webpack', (done) => {
  process.env.NODE_ENV = 'production';

  const config = require('../webpack.config');

  webpack(config, (err, stats) => {
    if (err) {
      throw err;
    }

    gutil.log('[webpack]', stats.toString());
    done();
  });
});

task('webpack-dev', () => {
  process.env.NODE_ENV = 'development';

  const config = require('../webpack.config');
  const compiler = webpack(config);

  const options = {
    quiet: true
  };
  const protocol = 'http';
  const host = 'localhost';
  const port = process.env.npm_package_config_port || 3001;

  new WebpackDevServer(compiler, options)
    .listen(port, host, (err) => {
      if (err) {
        throw err;
      }

      gutil.log('[webpack dev server]', `listening at ${protocol}://${host}:${port}`);
    });
});
