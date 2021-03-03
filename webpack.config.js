const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
	mode: "development",
	context: path.join(__dirname, "client"),
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundler.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(css|scss)$/i,
				use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "ERB",
			template: "./index.html",
		}),
		new ErrorOverlayPlugin(),
	],
	devtool: "cheap-module-source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
};