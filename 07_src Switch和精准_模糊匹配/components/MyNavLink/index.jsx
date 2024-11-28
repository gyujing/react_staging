import React, { Component } from 'react'
import { NavLink, } from 'react-router-dom'
import './index.module.css'

export default class MyNavLink extends Component {
  render() {
    console.log(this.props)
    return (
      <NavLink activeClassName="routeActive" to={this.props.to} className="list-group-item">{this.props.children}</NavLink>
    )
  }
}
