'use strict';

// Plugins
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    del = require('del');

// Minify Scripts
gulp.task('minify-scripts', function() {
    return gulp.src('src/js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./js'));
});

// Concat CSS
gulp.task('concat-css', function() {
    return gulp.src([
        'src/css/normalize.css',
        'src/css/ramshackle.css',
        'src/css/style.css'
     ])
    .pipe(maps.init())
    .pipe(concat('stylesheet.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

// Minify CSS
gulp.task('minify-css', ['concat-css'], function() {
    return gulp.src('css/stylesheet.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('stylesheet.min.css'))
    .pipe(gulp.dest('css'));
});

// Watch Files
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', 'src/css/*.css' ['concat-scripts','concat-css']);
});

// Clean
gulp.task('clean', function() {
    del(['css','js']);
});

// Build
gulp.task('build', ['minify-scripts', 'minify-css'], function() {
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});