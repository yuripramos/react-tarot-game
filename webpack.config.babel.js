import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'index.html'),
	title: 'Tarot Game',
	filename: 'index.html',
	inject: 'body',
});

const ExtractTextPluginCSS = new ExtractTextPlugin({
	filename: 'style.[chunkhash].css',
	allChunks: true,
	ignoreOrder: true,
});


const FaviconPlugin = new FaviconsWebpackPlugin({
	logo: path.resolve(__dirname, 'app/assets/images/favicon.png'),
	icons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		opengraph: false,
		twitter: false,
		yandex: false,
		windows: false,
	},
});


const CleanPlugin = new CleanWebpackPlugin(['public']);

const DefinePlugin = new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		API_KEY: JSON.stringify(process.env.API_KEY),
		AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
		DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
		STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
	},
})

const config = {
	devServer: {
		inline: true,
		port: 8080,
		host: '0.0.0.0',
		historyApiFallback: true,
	},
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.[hash].js',
		chunkFilename: 'chunk.[hash].js',
	},
	resolve: {
		alias: {
			react: "preact-compat",
			"react-dom": "preact-compat",
		},
		modules: [
			path.resolve(__dirname),
			'node_modules',
			'./app/components',
			'./app/api',
		],
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [['es2015', { modules: false }], 'react'],
					plugins: ['transform-object-rest-spread'],
				},
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
				}),
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
				}),
			},
			{
				test: /.(mp4|png|jpg|woff(2)??|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/,
				use: 'url-loader?limit=100000',
			},
		],
	},
	plugins: [CleanPlugin, HTMLWebpackPluginConfig, ExtractTextPluginCSS, FaviconPlugin],
	devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-source-map',
};

module.exports = config;
