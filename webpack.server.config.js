const path = require("path")
const webpack = require("webpack")
const webpackNodeExternals = require("webpack-node-externals")
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  target: "node",
  node: {
    __dirname: true
  },
  entry: "./src/server/index.js",

  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: "./babel.config.js"
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
    filename: "server.js"
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'SKC Operator Console',
    //   template: './template/index.html',
    //   filename: './index.html',
    //   favicon: './template/favicon.ico'
    // }),
    new CopyWebpackPlugin([{ from: "./db.json", to: "./db.json" }], {})
    // new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: "./build",
    hot: true
  }
}
