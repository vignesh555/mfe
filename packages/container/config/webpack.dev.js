const HtmlWebpack = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MF = require("webpack/lib/container/ModuleFederationPlugin");
const package = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new MF({
            name: "container",
            remotes: {
                "marketing": "marketing@http://localhost:8081/remoteEntry.js"
            },
            shared: package.dependencies
        }),
        new HtmlWebpack({
            template: "./public/index.html"
        })
    ]
}

module.exports = merge(commonConfig, devConfig);