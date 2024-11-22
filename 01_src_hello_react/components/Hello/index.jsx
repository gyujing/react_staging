import React, { Component } from "react";
import hello from './index.module.css'; //防止冲突

export default class Hello extends Component {
  render() {
    return (
      <h2 className={hello.title}>Hello,React</h2>
    )
  }
}
