import React, { Component } from 'react'
import Count from './containers/Count' // Count 的容器组件
import Person from './containers/Person'





export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Count store={store} /> */}
        <Count />
        <hr/>
        <Person />
      </div>
    )
  }
}

