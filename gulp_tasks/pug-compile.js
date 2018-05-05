const { src, dest } = require('gulp');
const {
  plumber,
  pug,
  ifEnv,
  htmlBeautify,
} = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').pugCompile;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(pug(config.pug))
    .pipe(ifEnv('development', htmlBeautify()))
    .pipe(dest(config.dest));
