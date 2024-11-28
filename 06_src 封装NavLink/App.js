import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

import './App.css'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header>fff</Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 选中高亮，用NavLink 
                activeClassName默认active
              */}
                {/* <NavLink activeClassName="routeActive" to='/about' className="list-group-item">About</NavLink>
                <NavLink activeClassName="routeActive" to='/home' className="list-group-item">Home</NavLink> */}
                <MyNavLink to='/about'>About</MyNavLink>
                <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* {注册路由} */}‘
                  <Route path="/about" component={About } />
                  <Route path="/home" component={Home } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
