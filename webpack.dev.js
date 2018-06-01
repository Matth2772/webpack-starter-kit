const merge = require('webpack-merge');
const configCommon = require('./webpack.common.js');

module.exports = merge(configCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
});

