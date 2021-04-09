/**
 * 该文件用来 export 一个 store 对象，整个应用只有一个 store 对象
 */
// applyMiddleware,专用于异步 action
import { createStore, applyMiddleware, combineReducers } from 'redux'  //  引用 createStore 创建 store 对象
import thunk from 'redux-thunk'  // 用于支持异步 action

import countReducer from './reducers/count' // 引用为 Count 组件服务的 reducer
import personReducer from './reducers/person' // 引用为 Count 组件服务的 reducer

import { composeWithDevTools } from 'redux-devtools-extension'



export default createStore(combineReducers({
  sum: countReducer,
  userData: personReducer
}), composeWithDevTools(applyMiddleware(thunk)))