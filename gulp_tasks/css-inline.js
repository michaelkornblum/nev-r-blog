const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const critical = require('critical').stream;
const config = require('../configs/gulp.config').criticalCSS;
const log = require('fancy-log');

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(critical(config.critical))
    .on('error', (err) => {
      log.err(err.message);
    })
    .pipe(dest(config.dest));
