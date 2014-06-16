var gulp = require('gulp'); 

var concat = require('gulp-concat');
var docco  = require("gulp-docco");
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('docco', function() {
  gulp.src('./src/*.js')
    .pipe(docco())
    .pipe(gulp.dest('./doc'));
});

gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  return gulp.src('src/*.js')
    .pipe(concat('server.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('server.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['lint', 'docco', 'scripts']);
});

gulp.task('default', ['lint', 'docco', 'scripts', 'watch']);
