var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var critical = require('critical');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var csso = require('gulp-csso');

gulp.task('compressjs', function() {
  gulp.src('js/*.js')
   .pipe(uglify())
   .pipe(rename({
     extname: '.min.js'
   }))
   .pipe(gulp.dest('jsm'));
});

gulp.task('processcss', function () {
  gulp.src('css/bootstrap.css')
        .pipe(uncss({
            html: ['_site/index.html', '_site/**/index.html'],
            ignoreSheets : [/fonts.googleapis/],
            ignore: [
            ".fade",
            ".fade.in",
            ".collapse",
            ".collapse.in",
            ".collapsing",
            ".navbar-collapse.in",
            /\.open/
        ]
        }))
        .pipe(csso())
        .pipe(rename({
          extname: '.min.css'
        }))
        .pipe(gulp.dest('css'));
        gulp.src('css/font-awesome.css')
              .pipe(uncss({
                  html: ['_site/index.html', '_site/**/index.html'],
                  ignoreSheets : [/fonts.googleapis/],
              }))
              .pipe(csso())
              .pipe(rename({
                extname: '.min.css'
              }))
              .pipe(gulp.dest('css'));
        gulp.src('css/style.css')
              .pipe(csso())
              .pipe(rename({
                extname: '.min.css'
              }))
              .pipe(gulp.dest('css'));
        gulp.src('css/syntax.css')
              .pipe(csso())
              .pipe(rename({
                extname: '.min.css'
              }))
              .pipe(gulp.dest('css'));
        gulp.src(['css/font-awesome.min.css', 'css/bootstrap.min.css', 'css/style.min.css', 'css/syntax.min.css'])
              .pipe(concat('main.min.css'))
              .pipe(csso())
              .pipe(gulp.dest('css'));
   critical.generate({
     base: './',
     src: '_site/index.html',
     dest: '_includes/critical.css',
     width: 320,
     height: 480,
     minify: true
   });
 });

gulp.task('default', function() {
  // place code for your default task here
});
