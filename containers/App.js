/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/28.
 */
import React ,{Component,PropTypes} from 'react'
import {connect } from 'react-redux'
import {addTodo,setVisibilityFilter,completeTodo,VisibilityFilters} from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component{
	render(){
		// Injected by connect() call:
		const {dispatch,visibilityTodos,visibilityFilter} = this.props
		return (
			<div>
				<AddTodo
					onAddClick={text=>
                    	dispatch(addTodo(text))
					}
				/>
				<TodoList
					todos={visibleTodos}
				    onTodoClick={index=>
				        dispatch(completeTodo(index))
				    }
				/>

				<Footer
					filter={visibilityFilter}
				    onFilterChange={nextFilter=>
				        dispatch(setVisibilityFilter(nextFilter))
				    } />
			</div>
		)
	}
}

App.propTypes={
	VisibleTodos:PropTypes.arrayOf(PropTypes.shape({
		text:PropTypes.string.isRequired,
		completed:PropTypes.bool.isRequired
	}).isRequired).isRequired,
	VisibilityFilter:PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}


function selectTodos(todos,filter) {
	switch(filter){
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo =>todo.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo=>!todo.completed)
	}
}

function select(state) {
	return {
		visibleTodos:selectTodos(state.todos,state.visibilityFilter),
		visibilityFilter:state.visibilityFilter
	}
}

// 包装

export default connect(select)(App)