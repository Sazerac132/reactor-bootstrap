const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function(cb) {

  // always cleans out dist; only situationally cleans src.
  let directories = ['dist'];
  if (env === 'dev') {
    directories.push('src/js/app.js');
  }

  del(directories).then(function(cleared) {
    console.log('Cleaned up these files:\n -', cleared.join('\n - '));
    cb();
  });

});