/**
 * 为 Count 组件生成 action 对象
 */
import { INCREMENT, DECREMENT } from './constant'


// 同步 action ,返回值为一个对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 异步 action,返回值为一个函数。一般还是调用同步action 
export const createIncrementAsyncAction = (data, time) => dispatch => {
  setTimeout(() => {
    dispatch(createIncrementAction(data))
  }, time)
}
