import React, { Component } from 'react'
import store from '../../redux/store'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {

  componentDidMount() {
    // store.subscribe,监听 redux 状态的变化。只要变化，就调用 render 
    // store.subscribe(() => {
    //   this.setState({})
    // })
  }

  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value * 1))
  }

  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }

  incrementIfOdd = () => {
    const count = store.getState()
    const { value } = this.selectNumber
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }

  incrementIfAsync = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAsyncAction(value * 1, 500))
  }


  render() {
    return (
      <div>
        <p>和为：{store.getState()}</p>
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
