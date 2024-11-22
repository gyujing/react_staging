import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'

// 创建并暴露App组件
export default class App extends Component {

  // 状态在哪里，操作状态的方法就在哪里

  state = {
    todos: [
      { id: nanoid(), name: "吃饭", done: true },
      { id: nanoid(), name: "睡觉", done: true },
    ]
  }

  addTodo = (e) => {
    let { todos } = this.state;
    let newTodo = { id: nanoid(), name: e, done: false };
    this.setState({ todos: [newTodo, ...todos] })
  }

  // 清除选中项
  removeAll = () => {
    let { todos } = this.state;
    let newTodos = todos.filter(v => !v.done);
    console.log("removeAll", newTodos)
    this.setState({ todos: newTodos })
  }

  // 删除某个item
  removeById = (id) => {
    let { todos } = this.state;
    todos.forEach((v,i) => {
      if(v.id === id){
        todos.splice(i,1)
      }
    });
    this.setState({ todos })
  }

  // Error：Footer组件触发，改变todos值，List和Item的props值更新了，组件Item中checkbox没有变化
  selectAll = (e) => {
    if (e) {
      // 全选
      let { todos } = this.state;
      todos.forEach(v => v.done = true);
      console.log("select", todos)
      this.setState({ todos })
    } else {
      // 全不选
      let { todos } = this.state;
      todos.forEach(v => v.done = false);
      console.log("select-no", todos)
      this.setState({ todos })
    }
  }

  // 改变选中状态
  changeCheckById = (id, check) => {
    let { todos } = this.state;
    todos.forEach(v => {
      if (v.id === id) {
        v.done = check
      }
    });
    console.log("changeCheckById", todos)
    this.setState({ todos })
  }
  render() {
    let { todos } = this.state;
    return (
      <div className="App" >
        <Header addTodo={this.addTodo} />
        <List todos={todos} changeCheckById={this.changeCheckById} removeById={this.removeById}/>
        <Footer todos={todos} removeAll={this.removeAll} selectAll={this.selectAll} />
      </div>
    );
  }
}
