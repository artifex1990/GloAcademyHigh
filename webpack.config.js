const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
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
