const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = merge({}, commonConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(['docs'], {
            root: path.resolve(__dirname, '../'),
            exclude: ['CNAME']
        })
    ]
});

module.exports = config;