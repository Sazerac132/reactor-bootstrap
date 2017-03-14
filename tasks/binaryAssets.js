const gulp = require('gulp');

gulp.task('move-binary-assets', ['font-awesome']);

gulp.task('font-awesome', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});