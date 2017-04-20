var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  paths: {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'lib')
  },
  files: {
    js: {
      entry: path.join(__dirname, 'src/js/HelloWorld.js'),
      output: 'js/HelloWorld.min.js'
    },
    css: {
      output: 'css/HelloWorld.min.css'
    }
  }
}

module.exports = {
  entry: config.files.js.entry,
  output: {
    path: config.paths.dist,
    filename: config.files.js.output
  },
  devtool: false,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css-loader!autoprefixer-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.(woff|woff2|ttf|eot)$/,
      loader: 'file?name=fonts/[name].[ext]&publicPath=../'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file?name=images/[name].[ext]&publicPath=../'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  plugins: [
    new ExtractTextPlugin(config.files.css.output, {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};