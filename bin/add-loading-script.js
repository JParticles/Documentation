const fs = require('fs')
const path = require('path')
const util = require('util')
const { map } = require('lodash')
const readFile = util.promisify(fs.readFile)
const { md5 } = require('./md5')
const langDir = path.resolve(__dirname, '../public/languages')
const loadingFilePath = path.resolve(__dirname, '../public/loading.js')

const files = {}

async function getLanguageList() {
  const langs = fs.readdirSync(langDir)
  const languageList = {}

  await Promise.all(
    map(langs, async lang => {
      const filePath = path.resolve(langDir, lang, 'index.json')
      const fileContent = await readFile(filePath)
      languageList[lang] = JSON.parse(String(fileContent))
    })
  )

  files.languageList = languageList
}

async function getLoadingFileContent() {
  const fileContent = await readFile(loadingFilePath)
  files.loadingFileContent = String(fileContent)
}

async function generateFile() {
  await getLanguageList()
  await getLoadingFileContent()
  files.generatedContent = `;(function() {
    const languages = ${JSON.stringify(files.languageList)} \n
    ${files.loadingFileContent}
  )()`
}

async function insertScriptContent(htmlData, compilation) {
  const digest = await md5(files.generatedContent)
  const filename = `loading.${digest}.js`

  const fp = path.resolve(__dirname, `../docs/${filename}`)
  fs.writeFileSync(fp, files.generatedContent)

  // console.log(htmlData, '\n')
  // console.log(htmlData.plugin.options.chunks)

  // htmlData.plugin.addFileToAssets(fp, compilation)

  /*
  const assetJson = JSON.parse(htmlData.assetJson)

  assetJson.splice(1, 0, filename)

  htmlData.assetJson = JSON.stringify(assetJson)

  // htmlData.assets.js.splice(1, 0, filename)
  */

  console.log(htmlData.html)
  const result = `<script src="/${filename}"></script>`
  htmlData.html = htmlData.html.replace(
    /<script src="\/loading\.js"><\/script>/i,
    result
  )

  if (compilation.fileDependencies.add) {
    compilation.fileDependencies.add(filename)
  } else {
    // Before Webpack 4 - fileDepenencies was an array
    compilation.fileDependencies.push(filename)
  }

  compilation.assets[filename] = {
    source: () => files.generatedContent,
    size: () => files.generatedContent.length,
  }
}

const pluginName = 'AddLoadingScript'

class AddLoadingScript {
  apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.compilation.tap(pluginName, compilation => {
        if (compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration) {
          compilation.hooks.htmlWebpackPluginAfterEmit.tapAsync(
            pluginName,
            async (htmlData, callback) => {
              await generateFile()
              await insertScriptContent(htmlData, compilation)
              callback(null, htmlData)
            }
          )
        } else {
          let HtmlWebpackPlugin = require('html-webpack-plugin')
          let hooks = HtmlWebpackPlugin.getHooks(compilation)

          hooks.afterEmit.tapAsync(pluginName, async (htmlData, callback) => {
            await generateFile()
            await insertScriptContent(htmlData, compilation)
            callback(null, htmlData)
          })
        }
      })
    }
  }
}

module.exports = AddLoadingScript
