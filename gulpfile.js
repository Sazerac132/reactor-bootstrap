const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

requireDir('tasks');

gulp.task('default', ['build']);

gulp.task('build', ['reset'], function() {
  return runSequence('webpack', ['useref', 'move-binary-assets'], 'set-revisions', ['minify:js', 'minify:css'], 'clean');
});

gulp.task('dev', function() {
  return runSequence(['webpack-dev'])
});

gulp.task('quick-build', function() {
  return runSequence('reset', 'webpack');
});