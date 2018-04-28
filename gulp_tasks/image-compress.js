const { src, dest } = require('gulp');
const { plumber, smushit } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').imageCompress;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(smushit(config.smushit))
    .pipe(dest(config.dest));
