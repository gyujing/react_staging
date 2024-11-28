import React, { Component } from 'react'

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
    const { id, title } = this.props.match.params;
    const detailObj = this.state.detailData.find(o => o.id === id)
    return (
      <div>
        <ul>
          <li>id: {id}</li>
          <li>title: {title}</li>
          <li>content:{detailObj.content}</li>
          <li>content:{detailObj.content}</li>

        </ul>
      </div>
    )
  }
}
