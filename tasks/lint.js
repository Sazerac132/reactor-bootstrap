const { task, src, series } = require('gulp');
const eslint = require('gulp-eslint');
const csslint = require('gulp-stylelint');
const jsonlint = require('gulp-jsonlint');

task('lint:js', () =>
  src(['**/*.js', '!node_modules/**/*', '!dist/**/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

task('lint:css', () =>
  src(['src/**/*.{css,scss}'])
    .pipe(csslint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))
);

task('lint:json', () =>
  src(['**/*.json', '!node_modules/**/*'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter())
    .pipe(jsonlint.failOnError())
);

task('lint', series('lint:js', 'lint:css', 'lint:json'));
