require('dotenv').config();

const { task, series } = require('gulp');
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
} = require('./gulp_tasks');

// base tasks
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

task('images', series('image:resize', 'image:compress'));
task('build', series('pug:compile'));
