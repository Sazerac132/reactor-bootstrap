const webpack = require('webpack');

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let mode = JSON.stringify(process.env.NODE_ENV);

const webpackConfig = {
    entry: "./src/index.tsx",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'bin')
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /index\.html/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?modules&sourceMap=true&importLoaders=1',
                        'postcss-loader?sourceMap=inline',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[hash].[ext]',
                    limit: 25000
                }
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

module.exports = webpackConfig;