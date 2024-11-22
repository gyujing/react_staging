import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  // 对接收prop类型进行限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeCheckById: PropTypes.func.isRequired,
    removeById: PropTypes.func.isRequired
  }

  render() {
    let { todos, changeCheckById, removeById } = this.props;
    // console.log("List-render",todos)
    return (
      <ul className='list'>
        {
          todos.map(todo => <Item {...todo} key={todo.id} changeCheckById={changeCheckById} removeById={removeById} />)
        }
      </ul>
    )
  }
}
