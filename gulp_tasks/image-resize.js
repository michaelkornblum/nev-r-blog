const { src, dest } = require('gulp');

const {
  plumber,
  responsiveImages,
  smushit,
} = require('gulp-load-plugins')();

module.exports = () =>
  src('./images/resized/**/*')
    .pipe(plumber())
    .pipe(responsiveImages({
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
    }))
    .pipe(smushit({
      verbose: true,
    }))
    .pipe(dest('./build/images/'));
