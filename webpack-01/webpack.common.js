const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const basePath = __dirname;


module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: {
        app: './index.tsx',
        appStyles: ['./site.scss']
      },
    output: {
        filename: '[name].[chunkhash].js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /..\/node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.css$/,
                exclude: /..\/node_modules/, // No tengo estilos vendor así que dejo fuera a node_modules
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                          import: false,
                          modules: {
                            exportLocalsConvention: "camelCase",
                            localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            localIdentContext: path.resolve(__dirname, "src"),
                            localIdentHashPrefix: "my-custom-hash",
                          },
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                        implementation: require("sass"),
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "index.html",
          hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
        }),
    ],
};