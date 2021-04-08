//  引入 Count 的 UI 组件
import CountUI from "../../components/Count";

// 引入 connect 用于连接 UI 组件和redux
import { connect } from 'react-redux'

// 引入 redux 的 action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

/* 简写 */
export default connect(state => ({ count: state }),
  {
    // mapDispatchToProps 简写(react-redux 自动分发)
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementIfAsync: createIncrementAsyncAction,
  }
)(CountUI)


/* 一般写法 */
// 映射状态
// const mapStateToProps = state => ({ count: state })
//  映射操作状态的方法
// const mapDispatchToProps = dispatch => ({
//   increment: (value) => dispatch(createIncrementAction(value)),
//   decrement: (value) => dispatch(createDecrementAction(value)),
//   incrementIfAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time)),
// })
// 使用 connect()()连接 UI 组件, 创建并暴露一个 Count 的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

