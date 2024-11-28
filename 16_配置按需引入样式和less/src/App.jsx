import React, { Component } from 'react'
import { Button } from 'antd';
// import {
//   WechatOutlined,
// } from '@ant-design/icons';

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Button type="primary">Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        {/* <WechatOutlined /> */}
      </div>
    )
  }
}
