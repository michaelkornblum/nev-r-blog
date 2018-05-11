const { src, dest } = require('gulp');
const {
  plumber,
  metalsmith,
  ifEnv,
  htmlBeautify,
} = require('gulp-load-plugins')();

const config = require('../configs/gulp.config').metalsmithCompile;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(metalsmith(config.metalsmith))
    .pipe(ifEnv('development', htmlBeautify()))
    .pipe(dest(config.dest));
