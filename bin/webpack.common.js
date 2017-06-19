const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ReasonableHTMLPlugin = require('./reasonable-html-webpack-plugin');
const distPath = path.resolve('./docs');

console.log('\x1b[33m%s\x1b[0m', `\n distPath: ${distPath} \n`);

const extractStyles = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css',
    allChunks: true
});

const chunks = ['pageLoading', 'vendor', 'app'];

const config = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
        pageLoading: './src/public/js/loading.js',
        app: ['babel-polyfill', './src/app.js']
    },
    output: {
        path: distPath,
        filename: '[name].[chunkhash:8].js',

        // This file name comes from the require.ensure asynchronously imported files
        chunkFilename: '[name].[chunkhash:8].js'
    },
    module: {
        noParse: /jquery|jparticles/,
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css/,
                use: extractStyles.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: [
                                    require('autoprefixer')({
                                        browsers: ['IE >= 9', 'Firefox > 10', 'chrome > 10', 'Safari > 5']
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: 'file-loader?name=images/[name].[hash:8].[ext]'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: 'file-loader?name=iconfont/[name].[hash:8].[ext]'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(md|txt)$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        extractStyles,

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: 'vendor.[chunkhash:8].js',
            children: true,
            minChunks: Infinity
        }),

        new ChunkManifestPlugin({
            filename: 'chunk-manifest.json',
            manifestVariable: 'webpackManifest'
        }),

        new ReasonableHTMLPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app.html',
            // favicon: './src/favicon.ico',
            inject: 'body',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                trimCustomFragments: true,
                collapseWhitespace: true
            },
            chunks,
            chunksSortMode(chunk1, chunk2) {
                const order1 = chunks.indexOf(chunk1.names[0]);
                const order2 = chunks.indexOf(chunk2.names[0]);
                if (order1 > order2) {
                    return 1;
                } else if (order1 < order2) {
                    return -1;
                } else {
                    return 0;
                }
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            language: path.resolve('./src/language/'),
            public: path.resolve('./src/public/'),
            img: path.resolve('./src/public/img/'),
            js: path.resolve('./src/public/js/'),
            provider: path.resolve('./src/public/provider/'),
            sass: path.resolve('./src/public/sass/'),
            store: path.resolve('./src/public/js/store.js'),
            utils: path.resolve('./src/public/js/utils.js')
        }
    }
};

module.exports = config;