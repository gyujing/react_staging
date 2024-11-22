import React, { Component } from 'react'

export default class Footer extends Component {
  removeAll = ()=>{
    this.props.removeAll()
  }
  changeCheckbox = (e)=>{
    this.props.selectAll(e.target.checked)
  }
  render() {
    let { todos } = this.props;
    let total = todos.length;
    let finish = todos.filter(v => v.done);
    let finishNum = finish.length
    return (
      <div>
        <input type='checkbox' onChange={this.changeCheckbox}></input>
        已完成 {finishNum}/ 全部 {total}
        <button style={{ marginLeft: "10px" }} onClick={this.removeAll}>删除已完成任务</button>
      </div>
    )
  }
}
