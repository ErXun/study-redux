import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addNewUserAction } from '../../redux/actions/person'

class Person extends Component {

  addUser = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value * 1
    const data = {
      id: nanoid(),
      name,
      age
    }
    this.props.addUser(data)
    this.nameNode.value = null
    this.ageNode.value = null
  }

  render() {
    return (
      <div>
        <h2>Person 组件,和为{this.props.sum}</h2>
        <input type="text" ref={c => this.nameNode = c} placeholder="姓名" />
        <input type="text" ref={c => this.ageNode = c} placeholder="年龄" />
        <button onClick={this.addUser}>添加</button>
        <ul>
          {
            this.props.userData.map(ele =>
              <li key={ele.id}>{ele.name}---{ele.age}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
export default connect(state => ({ userData: state.userData, sum: state.sum }), {
  addUser: addNewUserAction
})(Person)
