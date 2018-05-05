const { src, dest } = require('gulp');
const { plumber, stylus } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').stylusCompile;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(stylus(config.stylus))
    .pipe(dest(config.dest));
