const { src, dest } = require('gulp');
const { plumber, svgo } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').svgProcess;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(svgo())
    .pipe(dest(config.dest));
