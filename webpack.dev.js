const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const dist = path.resolve(__dirname, 'dist')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: dist
  }
})
