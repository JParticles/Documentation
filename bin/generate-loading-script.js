const fs = require('fs')
const path = require('path')
const { forEach } = require('lodash')
const XXH = require('xxhashjs')
const babel = require('@babel/core')

const langDir = path.resolve(__dirname, '../public/i18n')
const loadingFilePath = path.resolve(__dirname, '../src/loading.js')
const outputDir = path.resolve(__dirname, '../docs')

const isProdEnv = process.env.NODE_ENV === 'production'
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
  let wrappedContent = `;(function() {
    const languages = ${JSON.stringify(storage.languageList)} \n
    ${storage.fileContent}
  })()`

  // babel parse
  wrappedContent = babel.transformSync(wrappedContent, {
    minified: isProdEnv,
    comments: !isProdEnv,
    configFile: false,
    presets: [['@babel/preset-env']],
  }).code

  const hash = XXH.h32(wrappedContent, 0xabcd).toString(16)
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
