var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compressjs', function() {
  gulp.src('js/*.js')
   .pipe(uglify())
   .pipe(rename({
     extname: '.min.js'
   }))
   .pipe(gulp.dest('jsm'));
});

gulp.task('default', function() {
  // place code for your default task here
});
