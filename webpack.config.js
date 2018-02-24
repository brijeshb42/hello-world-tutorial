const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

const extractScss = new ExtractTextPlugin({
  filename: 'index.css',
  disable: isDev
});

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    extractScss
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /(\.css|\.scss)$/,
      exclude: /node_modules/,
      use: extractScss.extract({
        use:[
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ],
        fallback: 'style-loader'
      })
    }]
  }
};
