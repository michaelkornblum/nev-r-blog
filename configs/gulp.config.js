const { getSizes } = require('../functions/gulp-functions');
const webpackConfig = require('./webpack.config');
const stylusConfig = require('./stylus.config');
const metalsmithConfig = require('./metalsmith.config');
const postcssConfig = require('./postcss.config');
const { breakpoints } = require('./site.config').site;

exports.imageResize = {
  src: 'images/resize/**/*',
  dest: 'build/images/resized',
  watchDir: 'images/resize/**/*',
  responsiveImages: {
    '*.jpg': getSizes(breakpoints),
    '*.jpeg': getSizes(breakpoints),
  },
  smushit: {
    verbose: true,
  },
};

exports.imageCompress = {
  src: 'images/cropped/**/*',
  dest: 'build/images/cropped',
  watchDir: 'images/cropped/**/*',
  smushit: {
    verbose: true,
  },
};

exports.javascriptBundle = {
  src: 'scripts/main.js',
  dest: 'build/scripts',
  watchDir: 'scripts/**/*.js',
  webpackStream: webpackConfig,
};

exports.stylusCompile = {
  src: 'styles/main.styl',
  dest: 'build/styles',
  watchDir: 'styles/**/*.styl',
  stylus: stylusConfig,
  postcss: postcssConfig,
};

exports.htmlPostprocess = {
  src: 'build/**/*.html',
  dest: 'build',
  critical: {
    base: 'build/',
    inline: true,
    minify: true,
  },
};

exports.svgProcess = {
  src: 'vectors/*.svg',
  dest: 'layouts/templates/partials',
  watchDir: 'vectors/*.svg',
};

exports.metalsmithCompile = {
  src: 'src/**/*',
  dest: 'build',
  watchdir: [
    'src/**/*',
    'layouts/**/*',
  ],
  metalsmith: metalsmithConfig,
};
