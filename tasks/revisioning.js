const { task, series, src, dest } = require('gulp');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');

task('revision', () => {
  return src(['dist/**/app.js', 'dist/**/*.css'])
    .pipe(rev())
    .pipe(dest('dist'))
    .pipe(rev.manifest())
    .pipe(dest('dist'));
});

task('set-revisions', series('revision', () => {
  const manifest = src('dist/rev-manifest.json');

  return src('dist/index.html')
    .pipe(revReplace({manifest}))
    .pipe(dest('dist'));
}));