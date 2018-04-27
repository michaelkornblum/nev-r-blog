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
          overwrite: true,
        },
        {
          width: 960,
          suffix: '-med',
          overwrite: true,
        },
        {
          width: 480,
          suffix: '-sm',
          overwrite: true,
        },
        {
          width: 480,
          suffix: '-lofi',
          quality: 20,
          overwrite: true,
        },
      ],
    }))
    .pipe(smushit({
      verbose: true,
    }))
    .pipe(dest('./build/images/'));
