const { setTitle, googleFonts } = require('../functions/pug-functions');

module.exports = {
  site: {
    title: 'Nev-r-Blog',
    description: 'a one stop static site solution',
    author: 'Michael Kornblum',
    stylesheet: '/styles/main.css',
  },
  helpers: {
    setTitle,
    googleFonts,
  },
};
