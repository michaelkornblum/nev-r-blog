const { getSizes } = require('../functions/gulp-functions');
const webpackConfig = require('./webpack.config');
const stylusConfig = require('./stylus.config');
const postcssConfig = require('../configs/postcss.config');
const siteConfig = require('../configs/site.config');

exports.imageResize = {
  src: 'images/resize/*',
  dest: 'build/images',
  responsiveImages: {
    '*.jpg': getSizes(480, 960, 1920),
  },
  smushit: {
    verbose: true,
  },
};

exports.imageCompress = {
  src: 'images/cropped/*',
  dest: 'build/images',
  smushit: {
    verbose: true,
  },
};

exports.javascriptBundle = {
  src: 'scripts/main.js',
  dest: 'build/scripts',
  webpackStream: webpackConfig,
};

exports.stylusCompile = {
  src: 'styles/main.styl',
  dest: 'build/styles',
  stylus: stylusConfig,
};

exports.pugCompile = {
  src: 'layouts/**/*.pug',
  dest: 'build',
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
};
