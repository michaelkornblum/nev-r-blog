require('dotenv').config();

const {
  task,
  series,
  watch,
  parallel,
} = require('gulp');

const {
  imageResize,
  imageCompress,
  javascriptBundle,
  stylusCompile,
  metalsmithCompile,
  htmlPostprocess,
  svgProcess,
  serverStart,
  serverRefresh,
  clean,
} = require('./gulp_tasks');

const config = require('./configs/gulp.config');

// file watchers for dev server
const fileWatchers = (done) => {
  watch(config.imageResize.watchDir, series('image:resize'));
  watch(config.imageCompress.watchDir, series('image:compress'));
  watch(config.javascriptBundle.watchDir, series('js:bundle', 'server:refresh'));
  watch(config.stylusCompile.watchDir, series('stylus:compile', 'server:refresh'));
  watch(config.svgProcess.watchDir, series('svg:process'));
  watch(config.metalsmithCompile.watchdir, series('metalsmith:compile', 'server:refresh'));
  done();
};

// register base tasks
task('image:resize', imageResize);
task('image:compress', imageCompress);
task('js:bundle', javascriptBundle);
task('stylus:compile', stylusCompile);
task('html:postprocess', htmlPostprocess);
task('svg:process', svgProcess);
task('server:start', serverStart);
task('server:refresh', serverRefresh);
task('build:clean', clean);
task('files:watch', fileWatchers);
task('metalsmith:compile', metalsmithCompile);

// register composite task
task('asset:prepare', series(
  'build:clean',
  'svg:process',
  'metalsmith:compile',
  parallel(
    'image:resize',
    'image:compress',
    'js:bundle',
    'stylus:compile',
  ),
));

// register dev server task
task('serve', series(
  'asset:prepare',
  'server:start',
  'files:watch',
));

// register build task
task('build', series(
  'asset:prepare',
  'html:postprocess',
));
