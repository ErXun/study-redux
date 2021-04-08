/**
 * 创建一个为 Count 组件服务的 reducer;
 * reducer 的本质是一个函数，接受两个参数: preState(之前的状态)，action(动作对象) ;
 * 作用： 初始化状态，加工状态
 * redux 只负责管理状态，至于状态的改变驱动着页面的重新渲染，需额外编写
 */
import { INCREMENT, DECREMENT } from './constant'


const initState = 0
export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}



