const cssnano = require('cssnano');
const uncss = require('postcss-uncss');
const autoprefixer = require('autoprefixer');

module.exports = [
  autoprefixer({ browsers: 'last 2 versions' }),
  uncss({
    html: ['./build/**/*.html'],
  }),
  cssnano(),
];
