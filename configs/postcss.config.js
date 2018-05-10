const cssnano = require('cssnano');
const uncss = require('postcss-uncss');

module.exports = [
  uncss({
    html: ['./build/**/*.html'],
  }),
  cssnano(),
];
