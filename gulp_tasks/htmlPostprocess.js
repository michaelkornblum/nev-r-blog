const { src, dest } = require('gulp');
const { plumber, htmlmin } = require('gulp-load-plugins')();
const critical = require('critical').stream;
const config = require('../configs/gulp.config').htmlPostprocess;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(critical(config.critical))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(config.dest));
