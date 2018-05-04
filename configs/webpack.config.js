const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
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
