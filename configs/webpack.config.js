const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin(),
  ],
  loaders: [
    {
      test: /\.js$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
    },
  ],
};
