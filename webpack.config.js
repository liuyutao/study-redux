/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/29.
 */
var webpack = require('webpack');
module.exports = {
	entry:"./index.js",
	output:{
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				text:/\.js$/,
				exclude:/node-modules/,
				loader:'babel-loader?presets[]=es2015&presets[]=react'
			}
		]
	}
}