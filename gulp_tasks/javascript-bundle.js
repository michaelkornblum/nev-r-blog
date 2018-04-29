const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('../configs/webpack.config.js');

module.exports = () =>
  src('srcipts/**.js')
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest('build/scripts'));

