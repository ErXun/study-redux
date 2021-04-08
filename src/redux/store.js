/**
 * 该文件用来 export 一个 store 对象，整个应用只有一个 store 对象
 */

import { createStore, applyMiddleware } from 'redux'  //  引用 createStore 创建 store 对象
import thunk from 'redux-thunk'  // 用于支持异步 action
import countReducer from './count_reducers' // 引用为 Count 组件服务的 reducer


export default createStore(countReducer, applyMiddleware(thunk))