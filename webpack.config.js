const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'./public'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			},
			{
				test: /\.js$/i,
				use: {
					loader: 'babel-loader',
					options: {
						exclude: ['node_modules'],
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png)$/i,
				use: 'file-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Javascript Router',
		}),
		new MiniCssExtractPlugin(),
	]
}
