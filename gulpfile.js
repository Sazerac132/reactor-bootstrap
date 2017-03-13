const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

requireDir('gulpTasks');

gulp.task('build', function() {
  return runSequence(['webpack'])
});

gulp.task('dev', function() {
  return runSequence(['clean', 'webpack'])
});