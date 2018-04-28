const { task, series } = require('gulp');
const { imageResize, imageCompress } = require('./gulp_tasks');

task('image:resize', imageResize);
task('image:compress', imageCompress);

task('images', series('image:compress', 'image:resize'));
