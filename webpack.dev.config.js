const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve('./src/'),
  entry: './index.js',
  output: {
    filename: './bundle.js',
    publicPath: '/'
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
        loader:'style-loader!css-loader!sass-loader',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    port: 9000,
    historyApiFallback: true
  }
};
