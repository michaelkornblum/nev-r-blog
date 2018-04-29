const typographic = require('typographic');
const rupture = require('rupture');
const postStylus = require('poststylus');
const rucksack = require('rucksack-css');
const lost = require('lost');
const autoprefixer = require('autoprefixer');
const csswring = require('csswring');

module.exports = {
  use: [
    typographic(),
    rupture(),
    postStylus([
      rucksack,
      lost,
      autoprefixer({ browsers: 'last 2 versions' }),
      csswring,
    ]),
  ],
};
