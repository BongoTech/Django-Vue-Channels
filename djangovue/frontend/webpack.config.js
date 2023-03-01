const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  context: __dirname,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  },
  entry: {
    main: './src/main.js',
    room: './src/modules/room.js'
  },
  output: {
    path: path.resolve('./assets/webpack_bundles'),
    publicPath: '/static/webpack_bundles/',
    filename: "[name]-[hash].js"
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new VueLoaderPlugin()
  ],
}
