import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

  componentDidMount() {
    this.token = PubSub.subscribe('MY TOPIC', (msg, data) => {
      console.log(msg, data)
    });
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    return (
      <div>
        lIST
      </div>
    )
  }
}
