const { task } = require('gulp');
const { imageResize } = require('./gulp_tasks');

task('image:resize', imageResize);
