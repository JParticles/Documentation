const generateMD5 = require('./generateMD5');

const files = {
    jquery: 'node_modules/jquery/dist/jquery.min.js',
    jparticles: 'node_modules/jparticles/production/jparticles.all.js'
};

function replaceContent(htmlData, compilation, name) {
    return generateMD5(files[name]).then(res => {
        const filename = `${name}.${res.hash}.js`;

        htmlData.assets.js.splice(1, 0, filename);

        compilation.assets[filename] = {
            source() {
                return res.content;
            },
            size() {
                return res.content.length;
            }
        };
    });
}

function ReasonableHTML(options) {
    // Configure your plugin with options...
}

ReasonableHTML.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-generation', (htmlData, callback) => {
            replaceContent(htmlData, compilation, 'jquery')
                .then(() => {
                    return replaceContent(htmlData, compilation, 'jparticles');
                })
                .then(() => {
                    callback(null, htmlData);
                });
        });
    });
};

module.exports = ReasonableHTML;