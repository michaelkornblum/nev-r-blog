const { src, dest } = require('gulp');

const {
  plumber,
  responsiveImages,
  smushit,
} = require('gulp-load-plugins')();

module.exports = () =>
  src('./images/cropped/**/*')
    .pipe(plumber())
    .pipe(responsiveImages({
      '*.jpg': [
        {
          suffix: '-lofi',
          quality: 1,
        },
      ],
    }))
    .pipe(smushit({
      verbose: true,
    }))
    .pipe(dest('./build/images/'));
