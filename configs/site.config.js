const { setTitle, googleFonts, getYear } = require('../functions/pug-functions');

module.exports = {
  site: {
    url: 'nevrblog',
    title: 'Nev-r-Blog',
    description: 'a one stop static site solution',
    author: 'Michael Kornblum',
    stylesheet: '/styles/main.css',
  },
  helpers: {
    setTitle,
    googleFonts,
    getYear,
  },
};
