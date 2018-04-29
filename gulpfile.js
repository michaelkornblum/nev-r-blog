const { task, series } = require('gulp');
const {
  imageResize,
  imageCompress,
  javascriptBundle,
} = require('./gulp_tasks');

// base tasks
task('image:resize', imageResize);
task('image:compress', imageCompress);
task('js:bundle', javascriptBundle);


task('images', series('image:resize', 'image:compress'));

