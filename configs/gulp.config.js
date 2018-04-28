const { getSizes } = require('../functions/gulp-functions');

exports.imageResize = {
  src: 'images/resize/**/*',
  dest: 'build/images',
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
  smushit: {
    verbose: true,
  },
};
