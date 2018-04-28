exports.imageResize = {
  src: 'images/resize/**/*',
  dest: 'build/images',
  responsiveImages: {
    '*.jpg': [
      {
        width: 1920,
        suffix: '-lg',
      },
      {
        width: 960,
        suffix: '-med',
      },
      {
        width: 480,
        suffix: '-sm',
      },
      {
        width: 480,
        suffix: '-lofi',
        quality: 25,
      },
      {
        quality: 100,
      },
    ],
  },
  smushit: {
    verbose: true,
  },
};
