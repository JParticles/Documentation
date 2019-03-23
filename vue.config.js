const CleanWebpackPlugin = require('clean-webpack-plugin')
const AddLoadingScript = require('./bin/add-loading-script')

const config = {
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
      new AddLoadingScript(),
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack.plugins.push(
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!CNAME']
    })
  )
}

module.exports = config
