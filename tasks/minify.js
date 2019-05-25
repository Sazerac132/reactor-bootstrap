const { task, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const minify = require('gulp-clean-css');

task('minify:js', () => {
  return src('dist/**/*.js')
    .pipe(uglify())
    .pipe(dest('dist'));
});

task('minify:css', () => {
  return src('dist/**/*.css')
    .pipe(minify())
    .pipe(dest('dist'));
});
