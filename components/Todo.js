/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/29.
 */

import React,{Component,PropTypes} from 'react'

export default class Todo extends Component{
	render(){
		return (
			<li
				onClick={this.props.onClick}
			style={{
                textDecoration:this.props.completed? 'line-through' :'none',
                cursor:this.props.completed?'default':'pointer'
			}}>
				{this.props.text}
			</li>
		)
	}
}

Todo.propTypes={
	onClick:PropTypes.func.isRequired,
	text:PropTypes.toLocaleString.isRequired,
	completed:PropTypes.bool.isRequired
}