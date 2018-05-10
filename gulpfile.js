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
  pugCompile,
  cssInline,
  svgProcess,
  serverStart,
  serverRefresh,
  clean,
} = require('./gulp_tasks');

const config = require('./configs/gulp.config');

// file watchers for dev server
const fileWatchers = (done) => {
  watch(config.imageResize.watchDir, 'image:resize');
  watch(config.imageCompress.watchDir, 'image:compress');
  watch(config.javascriptBundle.watchDir, series('js:bundle', 'server:refresh'));
  watch(config.pugCompile.watchDir, series('pug:compile', 'server:refresh'));
  watch(config.stylusCompile.watchDir, series('stylus:compile', 'server:refresh'));
  watch(config.svgProcess.watchDir, 'svg:process');
  done();
};

// register base tasks
task('image:resize', imageResize);
task('image:compress', imageCompress);
task('js:bundle', javascriptBundle);
task('stylus:compile', stylusCompile);
task('pug:compile', pugCompile);
task('css:inline', cssInline);
task('svg:process', svgProcess);
task('server:start', serverStart);
task('server:refresh', serverRefresh);
task('build:clean', clean);
task('files:watch', fileWatchers);

// register composite task
task('asset:prepare', series(
  'build:clean',
  'svg:process',
  'pug:compile',
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
  'css:inline',
));
