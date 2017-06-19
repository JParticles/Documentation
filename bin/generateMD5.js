const crypto = require('crypto');
const fs = require('fs');

function generateMD5(filename) {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(filename);
        const hash = crypto.createHash('md5');
        const content = [];

        stream.on('data', (chunk) => {
            hash.update(chunk, 'utf8');
            content.push(chunk);
        });

        stream.on('end', () => {
            resolve({
                hash: hash.digest('hex'),
                content: content.join('').toString()
            });
        });
    });
}

module.exports = generateMD5;