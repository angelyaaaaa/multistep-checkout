var path = require('path');
// var webpack = require('webpack');

var config = {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname + path.sep + 'src', 'index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        // }, {
        //     test: /\.(png|jpg)$/,
        //     loader: 'url-loader?limit=8192'
        }]
    },
    devServer: {
        proxy: {
            '/dev2': { //change root
                target: 'http://dev2.ci',
                secure: false,
                pathRewrite: { '^/dev2': '' }
            }
        }
    }
};

module.exports = config;