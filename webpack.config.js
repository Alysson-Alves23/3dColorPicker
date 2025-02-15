const path = require('path');
const webpack = require('webpack');
const { config } = require('dotenv');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        index: ['./src/index.ts'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public', 'dist'),
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8080,
        hot: true,
    },
    plugins: [
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(config().parsed || {}),
    }),
    new webpack.HotModuleReplacementPlugin(),
],
};
