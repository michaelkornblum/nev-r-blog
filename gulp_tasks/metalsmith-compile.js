const { src, dest } = require('gulp');
const {
  plumber,
  metalsmith,
  ifEnv,
  htmlBeautify,
  htmlmin,
} = require('gulp-load-plugins')();

const config = require('../configs/gulp.config').metalsmithCompile;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(metalsmith(config.metalsmith))
    .pipe(ifEnv('development', htmlBeautify()))
    .pipe(ifEnv('production', htmlmin({ collapseWhitespace: true })))
    .pipe(dest(config.dest));
