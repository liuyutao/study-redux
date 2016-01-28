/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/28.
 */

import React,{Component,PropTypes} from 'react'
export default class AddTodo extends Component{
	render(){
		return (
			<div>
				<input type="text" ref="input" />
				<button onclick={(e)=>this.handleClick(e)} >
					Add
					</button>
			</div>
		)
	}
}