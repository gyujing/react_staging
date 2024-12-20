import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "message001" },
      { id: "02", title: "message002" },
      { id: "03", title: "message003" },
    ]
  }
  render() {
    const { messageArr } = this.state;

    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/messages/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/messages/detail/:id/:title" component={Detail} />
      </div>
    )
  }
}
