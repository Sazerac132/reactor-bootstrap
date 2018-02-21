'use strict';

const gulp = require('gulp');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');

gulp.task('revision', function() {
  return gulp.src(['dist/**/app.js', 'dist/**/*.css'])
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});

gulp.task('set-revisions', ['revision'], function() {
  let manifest = gulp.src('dist/rev-manifest.json');

  return gulp.src('dist/index.html')
    .pipe(revReplace({
      manifest: manifest
    }))
    .pipe(gulp.dest('dist'));
});