const gulp = require('gulp');
const useref = require('gulp-useref');

gulp.task('useref', function() {
  return gulp.src('bin/index.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});