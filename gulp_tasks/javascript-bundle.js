const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const vinylNamed = require('vinyl-named');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const config = require('../configs/gulp.config').javascriptBundle;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(vinylNamed())
    .pipe(webpackStream(config.webpackStream, webpack))
    .pipe(dest(config.dest));

