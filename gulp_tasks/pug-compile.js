const { src, dest } = require('gulp');
const { plumber, pug } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').pugCompile;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(pug(config.pug))
    .pipe(dest(config.dest));
