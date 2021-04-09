import { ADD_USER } from '../constant';

const userData = [{ name: 'li', age: 18, id: 1 }]

export default function addUser(preState = userData, action) {
  const { type, data } = action
  switch (type) {
    case ADD_USER:
      return [data, ...preState]
    default:
      return preState
  }
}