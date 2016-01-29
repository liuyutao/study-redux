/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/29.
 */
import React,{Component,PropTypes} from 'react'
export default class Footer extends Component {
	renderFilter(filter, name) {
		if (filter === this.props.filter) {
			return name
		}

		return (
			<a href="#" onClick={e=>{
                e.preventDefault()
                this.props.onFilterChange(filter)
			}}>
				{name}
			</a>
		)
	}

	render() {
		return (
			<p>
				Show:
				{' '}
				{this.renderFilter('SHOW_ALL', 'ALL')}
				{', '}
				{this.renderFilter('SHOW_COMPLETED', 'Completed')}
				{', '}
				{this.renderFilter('SHOW_ACTIVE', 'Active')}
				.
			</p>
		)
	}
}


Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}