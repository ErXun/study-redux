import { combineReducers } from 'redux'
import countReducer from './count' // 引用为 Count 组件服务的 reducer
import personReducer from './person' // 引用为 Person 组件服务的 reducer


export default combineReducers({
  sum: countReducer,
  userData: personReducer
})