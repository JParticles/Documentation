const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  lintOnSave: true,
  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_mixins.scss";`
      }
    }
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
