const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

requireDir('gulpTasks');

gulp.task('default', ['build']);

gulp.task('build', function() {
  return runSequence(['clean', 'webpack', 'useref']);
});

gulp.task('dev', function() {
  return runSequence(['webpack-dev'])
});