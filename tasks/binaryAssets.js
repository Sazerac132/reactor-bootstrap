const gulp = require('gulp');
const watch = require('gulp-watch');
const replace = require('gulp-replace');
const fs = require('fs');

gulp.task('move-binary-assets', ['font-awesome', 'copy-images']);

gulp.task('font-awesome', function() {
  return gulp.src('node_modules/font-awesome/fonts/**.*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-images', function() {
  return gulp.src('bin/images/**.*')
    .pipe(gulp.dest('dist/images'));
});


const imageModule = 'src/Components/Image/imageContext.js';

gulp.task('images-dev', ['clean:image-context'], function() {
  fs.writeFileSync(imageModule, 'export default \'dev\';');
});

gulp.task('images-build', ['clean:image-context'], function() {
  fs.writeFileSync(imageModule, 'export default \'build\';');
});