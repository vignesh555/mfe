const HtmlWebpack = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MF = require("webpack/lib/container/ModuleFederationPlugin");
const package = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new MF({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstrap", 
            },
            shared: package.dependencies
        }),
        new HtmlWebpack({
            template: "./public/index.html"
        })
    ]
}

module.exports = merge(commonConfig, devConfig);