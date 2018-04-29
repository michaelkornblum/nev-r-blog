const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },
};
