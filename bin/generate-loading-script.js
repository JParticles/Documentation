const fs = require('fs')
const path = require('path')
const { forEach } = require('lodash')
const { md5 } = require('./md5')
const langDir = path.resolve(__dirname, '../public/languages')
const loadingFilePath = path.resolve(__dirname, '../public/loading.js')
const outputDir = path.resolve(__dirname, '../docs')

const storage = {}

function getLanguageList() {
  const langs = fs.readdirSync(langDir)
  const languageList = {}

  forEach(langs, lang => {
    const filePath = path.resolve(langDir, lang, 'index.json')
    const fileContent = fs.readFileSync(filePath)
    languageList[lang] = JSON.parse(String(fileContent))
  })

  storage.languageList = languageList
}

function getLoadingFileContent() {
  const fileContent = fs.readFileSync(loadingFilePath)
  storage.fileContent = String(fileContent)
}

function generateLoadingScript() {
  getLanguageList()
  getLoadingFileContent()
  const wrappedContent = `;(function() {
    const languages = ${JSON.stringify(storage.languageList)} \n
    ${storage.fileContent}
  })()`

  const hash = md5(wrappedContent)
  const basename = `loading.${hash}.js`
  const filePath = path.resolve(outputDir, `./${basename}`)

  fs.writeFileSync(filePath, wrappedContent)

  return {
    filePath,
    basename,
    hash,
  }
}

module.exports = generateLoadingScript