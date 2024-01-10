const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    task1: './task1.js',
    //task2: './task2.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
  },
};
