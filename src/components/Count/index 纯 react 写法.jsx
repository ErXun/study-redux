import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 0
  }

  increment = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    this.setState({
      count: count + value * 1
    })

  }
  decrement = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    this.setState({
      count: count - value * 1
    })
  }
  incrementIfOdd = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    if (count % 2 !== 0) {
      this.setState({
        count: count + value * 1
      })
    }
  }
  incrementIfAsync = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    setTimeout(() => {
      this.setState({
        count: count + value * 1
      })
    }, 2000)
  }


  render() {
    return (
      <div>
        <p>和为：{this.state.count}</p>
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
