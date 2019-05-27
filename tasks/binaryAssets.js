const { task, series, src, dest } = require('gulp');

task('fonts', () =>
  src('temp/fonts/**.*')
    .pipe(dest('dist/fonts'))
);

task('font-awesome', () =>
  src('node_modules/font-awesome/fonts/**.*')
    .pipe(dest('dist/fonts'))
);

task('copy-images', () =>
  src('temp/images/**.*')
    .pipe(dest('dist/images'))
);

task('move-binary-assets', series('fonts', 'font-awesome', 'copy-images'));
