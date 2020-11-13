const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {  
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CopyPlugin({
            patterns: [{ from: './src/assets/img', to: './img' }],
          }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename:'[id].css'
        })
    ],
    module: {
        rules: [        // массив объектов
          {
            test: /\.css$/i,                                    // расширение, на которое webpack должен обращать внимание при переборе файлов при сборке
            use: [MiniCssExtractPlugin.loader, 'css-loader'],   // что делать при нашёл
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: ['file-loader']
          }
        ]
      }
    }