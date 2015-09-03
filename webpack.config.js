var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('app'),
  entry: {
    app: './main',
    vendor: [
      'angular', 
      'restangular',
      'jquery-ui',
      'jquery',
      'angular-bootstrap',
      'angular-resource',
      'angular-animate',
      'angular-ui-router'
    ]
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/public/assets/',
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  devtool: 'source-map',
  debug: true,
  devServer: {
    contentBase: './'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
    // the provideplugin is used to shim none-cmd module
    // like restangular, it's not a cmd module, and it require _
    // so use providePlugin to provide _ to it
    // same as jquery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      moment: 'moment'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
      //{
        //test: /jarvis\.widget\.min\.js$/,
        //loader: "imports?jQuery=jquery"
      //}
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
