const {
  markdown,
  excerpts,
  collections,
  permalinks,
  pagination,
  layouts,
  tags,
  metallic,
  feed,
  domTransform,
} = require('load-metalsmith-plugins')();

const config = require('./site.config');

module.exports = {
  metadata: config,
  use: [
    markdown(),
    //domTransform(),
    excerpts(),
    metallic(),
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
    pagination({
      'collections.posts': {
        perPage: 5,
        layout: 'archives.pug',
        first: 'index.html',
        path: 'archives/:num/index.html',
        pageMetadata: {
          title: 'Archive',
        },
      },
    }),
    feed({ collection: 'posts' }),
    tags({
      handle: 'tags',
      path: 'tags/:tag.html',
      layout: 'tag.pug',
      sortBy: 'date',
      reverse: true,
      metadataKey: 'category',
      slug: { mode: 'rfc3986' },
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
