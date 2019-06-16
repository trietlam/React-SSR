const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './babel.config.js'
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './build/static'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'SKC Operator Console',
  //     template: './template/index.html',
  //     filename: './index.html',
  //     favicon: './template/favicon.ico'
  //   }),
  //   new CopyWebpackPlugin([
  //     { from: './template/protocolFactory.js', to: './protocolFactory.js'}
  //   ], {}),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: './build',
    hot: true
  }
}
