import React, { Component } from 'react'
// 引入 connect 用于连接 UI 组件和redux
import { connect } from 'react-redux'
// 引入 redux 的 action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count'

class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  incrementIfAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementIfAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <p>和为：{this.props.count}</p>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>逢奇+</button>&nbsp;
        <button onClick={this.incrementIfAsync}>异步+</button>&nbsp;
      </div>
    )
  }
}

/* 简写 */
export default connect(state => ({ count: state.sum }),
  {
    // mapDispatchToProps 简写(react-redux 自动分发)
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementIfAsync: createIncrementAsyncAction,
  }
)(Count)

