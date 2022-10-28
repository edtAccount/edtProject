const path = require("path")
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// require("dotenv").config();

// const config = {
//     module : {},
// }

const privateConfig = Object.assign({},{
    mode: 'production',
    entry: {
        main: "./src/client/private/index.ts",
        report: "./src/client/private/report.ts",
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.join(__dirname, "private/js"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: "./src/client/private/index.html",
            inject: false,
            minify: true,
            chunks: ["main"],
            // path: path.join(__dirname, "private"),
          }),
          new HtmlWebpackPlugin({
            filename: "../report.html",
            template: "./src/client/private/report.html",
            inject: false,
            minify: true,
            chunks: ["report"],
            // path: path.join(__dirname, "private"),
          }),
    ],
    resolve:{
        extensions: [".tsx", ".ts", ".js"],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all",
                },
            },    
        },
    },
    devtool: "source-map",
});


const publicConfig = Object.assign({},{
    mode: 'production',
    entry: {
        login: "./src/client/public/login.ts",
        signup: "./src/client/public/signup.ts",
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.join(__dirname, "public/js"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: "../login.html",
            template: "./src/client/public/login.html",
            inject: false,
            minify: true,
            chunks: ["login"],
          }),
          new HtmlWebpackPlugin({
            filename: "../signup.html",
            template: "./src/client/public/signup.html",
            inject: false,
            minify: true,
            chunks: ["signup"],
          }),
    ],
    resolve:{
        extensions: [".tsx", ".ts", ".js"],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all",
                },
            },    
        },
    },
    devtool: "source-map",
});


module.exports = [publicConfig, privateConfig];
