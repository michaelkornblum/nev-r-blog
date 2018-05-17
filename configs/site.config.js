const {
  setTitle,
  googleFonts,
  getYear,
  cssBackgroundImage,
  getImageSize,
} = require('../functions/pug-functions');

module.exports = {
  site: {
    url: 'nevrblog',
    title: 'Nev-r-Blog',
    description: 'a one stop static site solution',
    author: 'Michael Kornblum',
    stylesheet: '/styles/main.css',
    breakpoints: [
      320,
      480,
      768,
      992,
      1200,
    ],
  },
  helpers: {
    setTitle,
    googleFonts,
    getYear,
    cssBackgroundImage,
    getImageSize,
  },
};
