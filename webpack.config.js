const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");

module.exports = {
    mode: "development",

    devServer: {
        historyApiFallback: true,

        port: 4000,

        open: true,

        compress: true,

        hot: true,
    },

    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },

    output: {
        path: path.resolve(__dirname, "./dist"),

        filename: "[name].bundle.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Workshop Test",

            template: path.resolve(__dirname, "./src/index.html"),

            filename: "index.html",
        }),

        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [{
                test: /\.js$/,

                exclude: /node_modules/,

                use: ["babel-loader"],
            },

            {
                test: /\.(scss|css)$/,

                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};