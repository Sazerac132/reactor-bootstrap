const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify:js', function() {
  return gulp.src('dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify:css', function() {

});

