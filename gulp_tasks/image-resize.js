const { src, dest } = require('gulp');
const { plumber, responsiveImages, smushit } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').imageResize;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(responsiveImages(config.responsiveImages))
    .pipe(smushit(config.smushit))
    .pipe(dest(config.dest));
