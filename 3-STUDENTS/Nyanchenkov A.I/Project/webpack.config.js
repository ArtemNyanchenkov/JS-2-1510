const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    mode: 'development', //вместо --mode production
    plugins: [
        new HtmlWebpackPlugin({
            // template: './public/index.html'
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CopyPlugin({
            patterns: [{ from: './src/assets/img', to: './img' }],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.vue$/i,
                use: [MiniCssExtractPlugin.loader, 'vue-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: ['file-loader']
            }
        ]
    }
}