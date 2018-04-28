const { task } = require('gulp');

task('image:resize', require('./image-resize'));
task('image:compress', require('./image-compress'));

