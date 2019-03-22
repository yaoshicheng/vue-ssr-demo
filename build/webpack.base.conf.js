const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = false;

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // enable CSS extraction
        extractCSS: isProduction
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: isProduction
      // 确保添加了此插件！
      ? [new ExtractTextPlugin({ filename: 'common.[chunkhash].css' })]
      : []
};
