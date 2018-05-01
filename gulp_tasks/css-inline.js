const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const critical = require('critical').stream;
const config = require('../configs/gulp.config').criticalCSS;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(critical(config.critical))
    .pipe(dest(config.dest));
