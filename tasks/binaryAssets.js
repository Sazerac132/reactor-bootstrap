const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('move-binary-assets', ['font-awesome', 'copy-images']);

gulp.task('font-awesome', function() {
  return gulp.src('node_modules/font-awesome/fonts/**.*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-images', function() {
  return gulp.src('bin/images/**.*')
    .pipe(gulp.dest('dist/images'));
});