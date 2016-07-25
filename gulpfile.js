//gulpfile.js
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');


gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

gulp.task('scripts', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./js/**/*.js', './css/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});