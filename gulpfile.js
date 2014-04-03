var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');
var rjs = require('gulp-requirejs');
var jscs = require('gulp-jscs');
var jst = require('gulp-jst');

gulp.task('js-prod', function() {
    gulp.src('./src/**/*.js')
    .pipe(uglify())
    .pipe(jshint())
    .pipe(gulp.dest('./build/src'));

    gulp.src('./lib/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/lib'));
});

gulp.task('html-prod', function() {
  gulp.src('./templates/**/*.html')
    .pipe(jst())
    .pipe(gulp.dest('./build/templates'));
});

gulp.task('requirejs-prod', ['html-prod', 'js-prod'], function() {
    rjs({
        baseUrl: './build/src',
        out: 'deploy.js',
        name: "main",
        paths: {
            jquery: './../lib/jquery/jquery.min',
            underscore: './../lib/underscore/underscore.min',
            backbone: './../lib/backbone/backbone.min',
            localstore: './../lib/backbone/backbone.localStorage',
            text: './../lib/require/text',
            templates: './../templates',
            todoModel: './../src/models/todo',
            todosCollection: './../src/collections/todos',
            todosView: './../src/views/list',
            todoView: './../src/views/todo',
            todoNewView: './../src/views/new',
        },
    })
    .pipe(uglify())
    .pipe(gulp.dest('./deploy/')); // pipe it to the output DIR

    gulp.src('./build/lib/require.js')
    .pipe(gulp.dest('./deploy'));
});

gulp.task('js-cs-fixer', function () {
    gulp.src('./src/**/*.js')
        .pipe(jscs());

    gulp.src('./test/**/*.js')
        .pipe(jscs());
});

gulp.task('default', ['js-prod', 'html-prod', 'requirejs-prod']);