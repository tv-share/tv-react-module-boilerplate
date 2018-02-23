const gulp = require('gulp');
const clean = require('gulp-clean-dest');
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const stylus = require('gulp-stylus');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const pump = require('pump');

gulp.task('build', ['prebuild'], () => {
    gulp.start(['js', 'css']);
});

gulp.task('prebuild', (cb) => {
    const tasks = [
        gulp.src('src/**/*.js'),
        eslint({ fix: true }),
        eslint.format(),
        eslint.failAfterError(),
        gulp.dest('src'),
        clean('dist'),
    ];

    pump(tasks, cb);
});

gulp.task('js', (cb) => {
    const tasks = [
      gulp.src(['src/**/*.js']),
      babel(),
      uglify(),
      gulp.dest('dist')
    ];
  
    pump(tasks, cb);
});

gulp.task('css', (cb) => {
    const tasks = [
        gulp.src(['src/**/*.styl']),
        stylus(),
        concat('style.css'),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('./dist')
    ];

    pump(tasks, cb);
});