var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass')

gulp.task('sass', function () {
    return gulp.src('build/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch(['build/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass']);
