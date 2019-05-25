const { task } = require('gulp');
const del = require('del');
const gutil = require('gutil');

task('reset', (done) => {
  del(['dist', 'temp'])
    .then(function(cleared) {
      gutil.log('[reset] Deleted', '\n - ' + cleared.join('\n - '));
      done();
    });
});

task('clean', (done) => {
  del(['dist/js/app.js', 'dist/css/app.css', 'dist/rev-manifest.json', 'temp'])
    .then(function(cleared) {
      gutil.log('[clean] Deleted', '\n - ' + cleared.join('\n - '));
      done();
    });
});