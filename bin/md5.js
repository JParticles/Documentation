const crypto = require('crypto')
const fs = require('fs')

function md5ByFilePath(filePath) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath)
    const hash = crypto.createHash('md5')
    const content = []

    stream.on('data', chunk => {
      hash.update(chunk, 'utf8')
      content.push(chunk)
    })

    stream.on('end', () => {
      resolve({
        hash: hash.digest('hex'),
        content: content.join('').toString(),
      })
    })

    stream.on('error', reject)
  })
}

function md5(content) {
  const MD5 = crypto.createHash('md5')
  return MD5.update(content, 'utf8').digest('hex')
}

module.exports = {
  md5,
  md5ByFilePath,
}
