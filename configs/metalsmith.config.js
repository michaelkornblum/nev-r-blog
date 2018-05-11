const {
  markdown,
  collections,
  permalinks,
  layouts,
} = require('load-metalsmith-plugins')();

const config = require('./site.config');

module.exports = {
  metadata: config,
  use: [
    markdown(),
    collections({
      posts: {
        pattern: 'posts/**.html',
        sortBy: 'date',
        reverse: true,
      },
      pages: {
        pattern: 'pages/**.html',
      },
    }),
    permalinks({
      relative: false,
      linksets: [
        {
          match: { collection: 'posts' },
          pattern: 'posts/:date/:title',
        },
        {
          match: { collection: 'pages' },
          pattern: ':title',
        },
      ],
    }),
    layouts({
      engine: 'pug',
      default: 'default.pug',
    }),
  ],
};
