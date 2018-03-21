/**
 * Created by lenovo on 2017/5/23.
 */
var path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: {
    plain: [
        './src/script2.js',
        './src/script1.js'
    ],
    home: './src/home.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // noParse中匹配的文件不会解析，比如require等，直接作为一个模块打包
    // noParse: path.resolve(__dirname, 'src/script2.js'),
    rules: []
  }
};