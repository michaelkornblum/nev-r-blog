const { task, series } = require('gulp');
require('./gulp_tasks');

task('images', series('image:resize', 'image:compress'));
