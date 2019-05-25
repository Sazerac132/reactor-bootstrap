const { task, series, parallel } = require('gulp');

const requireDir = require('require-dir');

requireDir('tasks');

task('build',
  series('reset', 'webpack',
    parallel('useref', 'move-binary-assets'),
    'set-revisions',
    parallel('minify:js', 'minify:css'),
    'clean'
  )
);

task('dev', series('clean', 'webpack-dev'));

task('quick-build', series('reset', 'webpack', 'move-binary-assets'));

task('default', series('build'));
