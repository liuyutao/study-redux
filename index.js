/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/28.
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp);

let rootElement = document.getElementById('root')
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)