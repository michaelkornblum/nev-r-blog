const { setTitle } = require('../functions/pug-functions');

module.exports = {
  site: {
    title: 'Nev-r-Blog',
    descripttion: 'a one stop static site solution',
    author: 'Michael Kornblum',
    mode: process.env.NODE_ENV,
    stylesheet: '/styles/main.css',
    stylesheetURL: undefined,
  },
  helpers: {
    setTitle,
  },
};
