import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WepbackDevServerConfiguration } from 'webpack-dev-server'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WepbackDevServerConfiguration
}

const config: Configuration = {
  entry: './client/index.tsx',
  mode: 'development',
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript', // separate TypeScript preset
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        type: 'asset/resource',
        options: {
          outputPath: 'assets/', // Specify the output path for the emitted files
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
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
};

export default config
