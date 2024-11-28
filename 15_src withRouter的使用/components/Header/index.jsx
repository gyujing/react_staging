import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    // -1,回退一步
    // this.props.history.go(-1)
    // 1,前进一步
    this.props.history.go(1)
  }
  render() {
    // console.log("header的props",this.props)
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>后退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>GO</button>
      </div>
    )
  }
}

export default withRouter(Header)
