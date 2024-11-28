import React, { Component } from 'react'
// import qs from 'node:querystring'

// let obj = {name:"tom",age:12}
// console.log(qs.stringify(obj))

export default class Detail extends Component {

  state = {
    detailData: [
      { id: '01', content: "我很快乐" },
      { id: '02', content: "我超级棒" },
      { id: '03', content: "我很牛" }
    ]
  }

  render() {
    console.log(this.props)

    //接收params参数
    // const { id, title } = this.props.match.params; 

    // 接收search参数
    // const search =  this.props.location.search;
    // const param = new URLSearchParams(search);
    // const id = param.get("id");
    // const title = param.get("title");


    // 接收state,清除缓存后，获取不到
    const { id, title } = this.props.location.state || {};

    const detailObj = this.state.detailData.find(o => o.id === id) || {}

    return (
      <div>
        <ul>
          <li>id: {id}</li>
          <li>title: {title}</li>
          <li>content:{detailObj?.content}</li>

        </ul>
      </div>
    )
  }
}
