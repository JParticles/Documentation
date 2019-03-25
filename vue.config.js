const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const generateLoadingScript = require('./bin/generate-loading-script')

const info = generateLoadingScript()

const config = {
  outputDir: 'docs',
  productionSourceMap: false,
  lintOnSave: true,
  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_mixins.scss";`,
      },
    },
  },
  devServer: {
    port: 8000,
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{ from: info.filePath }]),
      new HtmlWebpackIncludeAssetsPlugin({
        assets: [info.basename],
        append: false,
      }),
    ],
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
  },
}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack.plugins.push(
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!CNAME'],
    })
  )
}

module.exports = config
