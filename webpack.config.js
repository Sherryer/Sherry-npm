const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpackManifestPlugin = require("webpack-manifest-plugin");
// const babel = require('babel-polyfill')


// copy-webpack-plugin

module.exports = {
    entry: {
        boundle: ['./src/app.js'],
        ceshi: './ceshi/test.js'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js',
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['react', 'env', "stage-0"]
                        }

                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /(\.jpg$)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'dist/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new webpackManifestPlugin()
    ]

};