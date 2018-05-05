const { getSizes } = require('../functions/gulp-functions');
const webpackConfig = require('./webpack.config');
const stylusConfig = require('./stylus.config');
const postcssConfig = require('../configs/postcss.config');
const siteConfig = require('../configs/site.config');

exports.imageResize = {
  src: 'images/resize/**/*',
  dest: 'build/images',
  watchDir: 'images/resize/**/*',
  responsiveImages: {
    '*.jpg': getSizes(480, 960, 1920),
  },
  smushit: {
    verbose: true,
  },
};

exports.imageCompress = {
  src: 'images/cropped/**/*',
  dest: 'build/images',
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
};

exports.pugCompile = {
  src: 'layouts/*.pug',
  dest: 'build',
  watchDir: 'layouts/**/*',
  pug: {
    locals: siteConfig,
  },
};

exports.cssInline = {
  src: 'build/**/*html',
  dest: 'build',
  critical: {
    base: 'build/',
    inline: true,
    minify: true,
  },
};

exports.postcssCompile = {
  src: 'build/styles/main.css',
  dest: 'build/styles/',
  postcss: postcssConfig,
};

exports.svgProcess = {
  src: 'vectors/*.svg',
  dest: 'layouts/templates/partials',
  watchDir: 'vectors/*.svg',
};
