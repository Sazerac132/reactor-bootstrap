const { task, src, dest } = require('gulp');
const useref = require('gulp-useref');

task('useref', () =>
  src('temp/index.html')
    .pipe(useref())
    .pipe(dest('dist'))
);
