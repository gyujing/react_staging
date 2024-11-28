import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
  render() {
    console.log("Home组件收到的props是：", this.props)
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              {/* <a className="list-group-item " href="./home-message.html">Message</a> */}
              <MyNavLink to="/home/messages">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/home/news" component={News} />
            <Route exact path="/home/messages" component={Message} />
            {/* 兜底，所有路由都匹配不上，导航到/about */}
            <Redirect to="/home/news" /> 
          </Switch>

        </div>
      </div>
    )
  }
}
