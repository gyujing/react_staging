import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                <Link to='/about' className="list-group-item">About</Link>
                <Link to='/home' className="list-group-item">Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* {注册路由} route.v6*/}‘
                <Routes>{/* route.v5不需要Routes  */}
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
