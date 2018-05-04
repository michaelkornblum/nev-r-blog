const { init, reload } = require('browser-sync').create();

exports.open = (done) => {
  init({
    server: {
      baseDir: './build',
    },
  });
  done();
};

exports.refresh = (done) => {
  reload();
  done();
};
