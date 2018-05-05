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
  postcssCompile,
  svgProcess,
  serverStart,
  serverRefresh,
  clean,
  htmlCompress,
} = require('./gulp_tasks');

const config = require('./configs/gulp.config');

// register base tasks
task('image:resize', imageResize);
task('image:compress', imageCompress);
task('js:bundle', javascriptBundle);
task('stylus:compile', stylusCompile);
task('pug:compile', pugCompile);
task('css:inline', cssInline);
task('postcss:compile', postcssCompile);
task('svg:process', svgProcess);
task('server:start', serverStart);
task('server:refresh', serverRefresh);
task('html:compress', htmlCompress);
task('build:clean', clean);

// file watchers for dev server
const fileWatchers = () => {
  watch(config.imageResize.watchDir, series('image:resize', 'server:refresh'));
  watch(config.imageCompress.watchDir, series('image:compress', 'server:refresh'));
  watch(config.javascriptBundle.watchDir, series('js:bundle', 'server:refresh'));
  watch(config.pugCompile.watchDir, series('pug:compile', 'server:refresh'));
  watch(config.stylusCompile.watchDir, series('stylus:compile', 'server:refresh'));
  watch(config.svgProcess.watchDir, series('svg:process'));
};

// register watch task
task('files:watch', fileWatchers);

// register composite task
task('asset:prepare', series( 
  'build:clean',
  parallel(
    'image:resize',
    'image:compress',
    'js:bundle',
    'stylus:compile',
    'svg:process',
  ),
  'pug:compile',
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
  'postcss:compile',
  'html:compress',
));
