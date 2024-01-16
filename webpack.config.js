const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    script: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
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
