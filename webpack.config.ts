import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WepbackDevServerConfiguration } from 'webpack-dev-server';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();


interface Configuration extends WebpackConfiguration {
  devServer?: WepbackDevServerConfiguration;
}

const config: Configuration = smp.wrap({
    entry: './client/index.tsx',
    mode: 'development',
    target: process.env.NODE_ENV !== 'production' ? 'web' : 'browserslist',
    output: {
        path: path.resolve(__dirname, 'build/client'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript', // separate TypeScript preset
                                ['@babel/preset-react', { runtime: 'automatic' }],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            publicPath: '/client',
            directory: path.resolve(__dirname, 'client'),
        },
        historyApiFallback: true,
        proxy: {
            '/': 'http://localhost:3000',
        },
        port: 8080,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
        }),
        new Dotenv(),
        new ReactRefreshWebpackPlugin(),
    ],
    devtool: 'source-map',
});

export default config;
