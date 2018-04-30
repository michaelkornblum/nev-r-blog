const { task, series } = require('gulp');
const {
  imageResize,
  imageCompress,
  javascriptBundle,
  stylusCompile,
  pugCompile,
} = require('./gulp_tasks');

// base tasks
task('image:resize', imageResize);
task('image:compress', imageCompress);
task('js:bundle', javascriptBundle);
task('stylus:compile', stylusCompile);
task('pug:compile', pugCompile);


task('images', series('image:resize', 'image:compress'));

