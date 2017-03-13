const gulp = require('gulp');
const useref = require('gulp-useref');

gulp.task('useref', function() {
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});