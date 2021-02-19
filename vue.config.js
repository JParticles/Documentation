const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const generateLoadingScript = require('./bin/generate-loading-script')
const path = require('path')
const webpack = require('webpack')
const { toPairs, forEach } = require('lodash')

const svgIconPath = path.resolve('./src/assets/icons')
const info = generateLoadingScript()

process.env.VUE_APP_LOADING_SCRIPT_URL = `/js/${info.basename}`

const vendors = {
  vue: 'vue|vue-router|vuex',
  utils: 'marked|highlight.js|apisauce|axios',
  jparticles: 'jparticles',
  gitalk: 'gitalk',
}

const cacheGroups = {}

forEach(toPairs(vendors), ([key, value]) => {
  cacheGroups[key] = {
    test: new RegExp(`[\\/]node_modules[\\/](${value})[\\/]`),
    name: key,
  }
})

const config = {
  outputDir: 'docs',
  productionSourceMap: false,
  lintOnSave: true,
  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_mixins.scss";`,
      },
    },
  },
  devServer: {
    port: 8000,
    disableHostCheck: true,
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        cacheGroups,
      },
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new CopyWebpackPlugin([{ from: info.filePath, to: './js' }]),
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
      cleanAfterEveryBuildPatterns: ['loading*.js'],
    })
  )
}

module.exports = config
