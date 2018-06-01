const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'js/main.min.js': './src/assets/js/main.js',
    'css/main.min.css': './src/assets/scss/main.scss',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[name]',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // creates style nodes from JS strings
          use: [
            'css-loader', // translates CSS into CommonJS
            'sass-loader', // compiles Sass to CSS
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
      },
    ],
  },
};
