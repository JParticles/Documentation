const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const config = merge({}, commonConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        })
    ],
    devtool: 'source-map',
    devServer: {
        host: 'localhost',
        port: 8000,
        compress: true,
        inline: true,
        noInfo: false,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        stats: {
            colors: true
        }
    }
});

module.exports = config;