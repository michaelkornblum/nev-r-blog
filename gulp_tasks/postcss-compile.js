const { src, dest } = require('gulp');
const { plumber, postcss } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').postcssCompile;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(postcss(config.postcss))
    .pipe(dest(config.dest));
