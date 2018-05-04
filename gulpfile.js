require('dotenv').config();

const { task, series } = require('gulp');
const {
  imageResize,
  imageCompress,
  javascriptBundle,
  stylusCompile,
  pugCompile,
  cssInline,
} = require('./gulp_tasks');

// base tasks
task('image:resize', imageResize);
task('image:compress', imageCompress);
task('js:bundle', javascriptBundle);
task('stylus:compile', stylusCompile);
task('pug:compile', pugCompile);
task('css:inline', cssInline);

task('images', series('image:resize', 'image:compress'));
task('build', series('images', 'js:bundle', 'stylus:compile', 'pug:compile', 'css:inline'));
