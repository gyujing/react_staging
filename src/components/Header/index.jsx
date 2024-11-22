import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  // 对接收prop类型进行限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  // 键盘事件回调
  handleConfirm = (e) => {
    if(e.keyCode !== 13) return
    this.props.addTodo(e.target.value);
    e.target.value = ""

  }
  render() {
    return (
      <div className='header'>
        <input onKeyUp={this.handleConfirm} placeholder='请输入您的任务名，请按回车键确认'></input>
      </div>
    )
  }
}
