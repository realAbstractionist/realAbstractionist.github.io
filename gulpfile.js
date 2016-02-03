var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('less', function() {
  gulp.src('public/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('serve', function() {
  // Init the server
  browserSync.init({
    server: "public/"
  });

  gulp.watch('public/less/*.less', ['less']);
  gulp.watch('public/css/*.css').on('change', reload);
  gulp.watch('public/index.html').on('change', reload);
});

// Task for developing
gulp.task('dev', ['serve']);





//var gzip = require('gulp-gzip');
var rename = require("gulp-rename");
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var imageminOptipng = require('imagemin-optipng');
var imageminMozjpeg = require('imagemin-mozjpeg');

// Minifying HTML
gulp.task('minify-html', function() {
  return gulp.src('public/*.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest('public-build/'));
});

// Minifying CSS
gulp.task('compress-css', function() {
  gulp.src('public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
    .pipe(minifyCSS())
//    .pipe(gzip({ threshold: '1kb' }))
    .pipe(rename({ extname: '.min.css'}))
    .pipe(gulp.dest('public-build/css'));
});

// Minifying JS
gulp.task('minify-js', function() {
  return gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public-build/js'));
});

// Optimizing PNG
gulp.task('opti-png', function () {
  return gulp.src('public/img/*.png')
    .pipe(imageminOptipng({optimizationLevel: 3})())
    .pipe(gulp.dest('public-build/img'));
});

// Optimizing JPG
gulp.task('opti-jpg', function () {
	return gulp.src('public/img/*.jpg')
		.pipe(imageminMozjpeg({quality: 80})())
		.pipe(gulp.dest('public-build/img'));
});

// Tasks for production
gulp.task('build', ['minify-html', 'compress-css', 'minify-js', 'opti-png', 'opti-jpg']);
gulp.task('build-fast', ['minify-html', 'compress-css', 'minify-js']);