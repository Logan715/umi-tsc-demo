const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './dist/es/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist', 'browser'),
    library: 'print',
    libraryExport: 'default',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // will inject the main bundle to index.html
      scriptLoading: 'blocking',
    }),
  ],
};
