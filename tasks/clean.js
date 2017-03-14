const gulp = require('gulp');
const del = require('del');
const gutil = require('gutil');

gulp.task('reset', function(cb) {
  del(['dist', 'bin'])
    .then(function(cleared) {
      gutil.log('[reset] Deleted', '\n - ' + cleared.join('\n - '));
      cb();
    });
});

gulp.task('clean', function(cb) {
  del(['dist/js/app.js', 'dist/css/app.css', 'dist/rev-manifest.json', 'bin'])
    .then(function(cleared) {
      gutil.log('[clean] Deleted', '\n - ' + cleared.join('\n - '));
      cb();
    });
});

gulp.task('clean:image-context', function(cb) {
  del(['src/Components/Image/imageContext.js'])
    .then(function() {
      cb();
    });
});