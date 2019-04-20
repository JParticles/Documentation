const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const generateLoadingScript = require('./bin/generate-loading-script')
const path = require('path')

const svgIconPath = path.resolve('./src/svgicons')
const info = generateLoadingScript()

process.env.VUE_APP_LOADING_SCRIPT_URL = `/${info.basename}`

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
    module: {
      rules: [
        {
          include: [svgIconPath],
          test: /\.svg$/,
          use: [
            { loader: 'raw-loader' },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  { removeTitle: true },
                  { removeViewBox: false },
                  { removeDimensions: true },
                ],
              },
            },
          ],
        },
      ],
    },
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(svgIconPath)
      .end()
  },
}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack.plugins.push(
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!CNAME', `!${info.basename}`],
    })
  )
}

module.exports = config
