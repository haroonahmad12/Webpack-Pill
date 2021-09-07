const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

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
    ],

    module: {
        rules: [{
            test: /\.js$/,

            exclude: /node_modules/,

            use: ["babel-loader"],
        }, ],
    },
};