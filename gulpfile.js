const { task, series } = require('gulp');
const { imageResize } = require('./gulp_tasks');

task('image:resize', imageResize);
