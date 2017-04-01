var path = require('path'),
	webpack = require('webpack'),
	px2rem = require('postcss-px2rem')
	HtmlWebpackPlugin = require('html-webpack-plugin');
	ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
        app: './app.js',
        vendor: [
            'react'
        ]
    },	output: {
    	filename: 'bundle.js', //注意这里，用[name]可以自动生成路由名称对应的js文件
		path: path.join(__dirname, './__build__'),
	},
	devServer: {
		inline: true,
		port: 3002,
		host: '0.0.0.0'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			include: __dirname,
			query: {
				presets: ['es2015', 'react','stage-1']
			}
		},
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			include: __dirname,
			query: {
				presets: ['es2015', 'react','stage-1']
			}
		},
		{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!postcss-loader!less-loader"})
       	},
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!postcss-loader!less-loader"})
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!postcss-loader!less-loader"})
        },
        {
        	test: /\.(jpg|png|jpeg)$/,
			loader: 'url-loader',
			query: {
		    limit: 8192,
		    name: 'images/[name].[ext]'
			}
		},
		{test: /\.(eot|woff|svg|ttf)$/,
		 loader: "file-loader"
		  }
		]
	},
	plugins: [
		new ExtractTextPlugin({ filename: 'app.css', disable: false, allChunks: true }),
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: false,
		}),
		new webpack.optimize.CommonsChunkPlugin({
		    names: ['vendor'],
		    filename: 'vendor.js'
		}),
		new webpack.LoaderOptionsPlugin({
            devServer: {
                colors: true, //终端中输出结果为彩色
                historyApiFallback: true, //不跳转
                inline: true //实时刷新
            } ,
            options: {
                postcss: function() {
                return [px2rem({remUnit: 64})];
            }
            }  
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor",filename: "vendor.bundle.js"}),
		new webpack.HotModuleReplacementPlugin()
	]
};