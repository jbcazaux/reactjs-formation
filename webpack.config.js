var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        main: [
            './src/index.tsx'
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },


    devtool: "source-map",

    resolve: {
        root: [path.resolve(__dirname, 'src')],
        extensions: ["", ".webpack.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};