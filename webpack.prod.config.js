const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  context: path.resolve('./src/'),
  entry: {
    main: './index.js',
  },
  output: {
    path: path.resolve(__dirname,'./dist/'),
    filename: './bundle.js',
    // filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["react"]
        },
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader!sass-loader',
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.scss$/,
        // loader:'style-loader!css-loader!sass-loader',
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        }),
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["react"]
        },
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin('./style/main.css'),
    new UglifyJSPlugin(),
    new FileManagerPlugin({
      onEnd: [
        {
          delete: [
            "./dist/public"
          ]
        },
        {
          copy: [
            { source: "./src/public/*", destination: "./dist/public" }
          ]
        }
      ]
    })
  ],
};
