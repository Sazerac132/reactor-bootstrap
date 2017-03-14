const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minify = require('gulp-clean-css');

gulp.task('minify:js', function() {
  return gulp.src('dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify:css', function() {
  return gulp.src('dist/**/*.css')
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});

