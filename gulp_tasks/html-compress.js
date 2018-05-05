const { src, dest } = require('gulp');
const { plumber, htmlmin } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').htmlCompress;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(htmlmin(config.htmlmin))
    .pipe(dest(config.dest));
