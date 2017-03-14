const gulp = require('gulp');
const watch = require('gulp-watch');
const replace = require('gulp-replace');

gulp.task('move-binary-assets', ['font-awesome', 'copy-images']);

gulp.task('font-awesome', function() {
  return gulp.src('node_modules/font-awesome/fonts/**.*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-images', function() {
  return gulp.src('bin/images/**.*')
    .pipe(gulp.dest('dist/images'));
});

const componentsPath = 'src/Components';
const imageModule = `${componentsPath}/Image.jsx`;

gulp.task('images-dev', function() {
  gulp.src(imageModule)
    .pipe(replace(/context = ''/, 'context = \'bin\/\''))
    .pipe(gulp.dest(componentsPath));
});

gulp.task('images-build', function() {
  gulp.src(imageModule)
    .pipe(replace(/context = 'bin\/'/, 'context = \'\''))
    .pipe(gulp.dest(componentsPath));
});