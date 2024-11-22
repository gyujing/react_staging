import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  // 鼠标移入移出
  state = { mouse: false }

  // 移入移出回调
  onMouseLeaveOrEnter = (flag) => {
    return () => {
      if (flag) {
        this.setState({ mouse: true })
      } else {
        this.setState({ mouse: false })
      }
    }
  }

  changeCheckStatus = (id) => {
    return (e) => {
      this.props.changeCheckById(id, e.target.checked)
    }
  }

  removeById = (id) => {
    return () => {
      this.props.removeById(id)
    }
  }

  render() {
    let { id, name, done } = this.props;
    let { mouse } = this.state;
    // console.log("Item0-render",name,done)
    return (
      <li className='item' style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseLeave={this.onMouseLeaveOrEnter(false)} onMouseEnter={this.onMouseLeaveOrEnter(true)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.changeCheckStatus(id)}></input>
          <span>{name}</span>
        </label>
        <button style={{ display: mouse ? "block" : "none" }} onClick={this.removeById(id)}>删除</button>

      </li>
    )
  }
}
