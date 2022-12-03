const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
    },
    devtool: 'cheap-module-source-map', //value recomended by CRA. research the issue deeper
    plugins: [
        new webpack.DefinePlugin({
            'process.env.exampleEnvVariable': JSON.stringify('This is dev mode'),
        }),
    ]
}