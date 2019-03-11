const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV !== 'production',
  },
  devServer: {
    port: 8000,
  },
  configureWebpack: {
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!CNAME']
      })
    ]
  }
}
