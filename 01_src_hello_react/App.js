import React, { Component } from "react";
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <Hello />
        <Welcome />
      </div>
    );
  }
}
