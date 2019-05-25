const { task, series, src, dest } = require('gulp');

task('font-awesome', () => {
  return src('node_modules/font-awesome/fonts/**.*')
    .pipe(dest('dist/fonts'));
});

task('copy-images', () => {
  return src('temp/images/**.*')
    .pipe(dest('dist/images'));
});

task('move-binary-assets', series('font-awesome', 'copy-images'));
