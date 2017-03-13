const gulp = require('gulp');
const del = require('del');
const gutil = require('gutil');

gulp.task('clean', function(cb) {

  del(['dist', 'bin']).then(function(cleared) {
    gutil.log('[clean] Deleted', '\n - ' + cleared.join('\n - '));
    cb();
  });

});