/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/29.
 */
import React,{Component,PropTypes} from 'react'
import Todo from './Todo'

export  default class TodoList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo, index) =>
					<Todo {...todo}
						key={index}
						onClick={()=>this.props.onTodoClick(index)}/>
				)}
			</ul>
		)
	}
}

TodoList.propTypes = {
	onTodoClick: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.toLocaleString.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}