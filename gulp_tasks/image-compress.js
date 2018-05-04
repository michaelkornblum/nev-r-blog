const { src, dest } = require('gulp');
const { plumber, smushit, ifEnv } = require('gulp-load-plugins')();
const config = require('../configs/gulp.config').imageCompress;

module.exports = () =>
  src(config.src)
    .pipe(plumber())
    .pipe(ifEnv('production', smushit(config.smushit)))
    .pipe(dest(config.dest));
