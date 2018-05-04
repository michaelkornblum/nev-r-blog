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
} = require('./gulp_tasks');

// base tasks
task('image:resize', imageResize);
task('image:compress', imageCompress);
task('js:bundle', javascriptBundle);
task('stylus:compile', stylusCompile);
task('pug:compile', pugCompile);
task('css:inline', cssInline);
task('postcss:compile', postcssCompile);

task('images', series('image:resize', 'image:compress'));
task('build', series('pug:compile'));
