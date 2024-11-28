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


  pushShow = (id, title) => {
    // push跳转 + 携带params参数
    // this.props.history.push(`/home/messages/detail/${id}/${title}`)

    // push跳转 + 携带query参数
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`)

    // push跳转 + 携带query参数
    this.props.history.push('/home/messages/detail', { id, title })

  }

  replaceShow = (id, title) => {
    // replace跳转 + 携带params参数
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`)

    // // replace跳转 + 携带query参数
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`)

    // replace跳转 + 携带query参数
    this.props.history.replace('/home/messages/detail', { id, title })
  }

  back = ()=>{
    this.props.history.goBack()
  }

  forward = ()=>{
    this.props.history.goForward()
  }
  go = ()=>{
    // -1,回退一步
    // this.props.history.go(-1)
     // 1,前进一步
    this.props.history.go(1)
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
                  {/* <Link to={`/home/messages/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/messages/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}


                  {/* 向路由组件传递state参数 */}
                  <Link to={{ pathname: "/home/messages/detail", state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>

                  <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push跳转</button> &nbsp;&nbsp;
                  <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace跳转</button> 
              
                </li>
              )
            })
          }
        </ul>
        <hr />
        <button onClick={this.back}>后退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>GO</button>
       
        {/* 声明接收params参数 */}
        {/* <Route path="/home/messages/detail/:id/:title" component={Detail} /> */}

        {/* search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/messages/detail" component={Detail} /> */}

        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/messages/detail" component={Detail} />


      </div>
    )
  }
}
