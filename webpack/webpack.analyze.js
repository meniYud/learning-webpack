const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    devtool: 'source-map', //value recomended by CRA. research the issue deeper
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}