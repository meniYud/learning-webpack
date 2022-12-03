const webpack = require('webpack')

module.exports = {
    mode: 'production',
    devtool: 'source-map', //value recomended by CRA. research the issue deeper
    plugins: [
        new webpack.DefinePlugin({
            'process.env.exampleEnvVariable': JSON.stringify('This is prod mode'),
        }),
    ]
}