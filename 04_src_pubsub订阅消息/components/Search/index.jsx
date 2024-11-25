import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  sendData = () => {
    let data = {
      users: [1, 2, 3],
      loading: true,
    }
    PubSub.publish('MY TOPIC', data);
  }
  sendData2 = () => {
    let data = {
      error: "失败",
      loading: false,
    }
    PubSub.publish('MY TOPIC', data);
  }

  render() {
    return (
      <div>
        Search
        <button onClick={this.sendData}>发布信息</button>
        <button onClick={this.sendData2}>发布信息2</button>
      </div>
    )
  }
}
