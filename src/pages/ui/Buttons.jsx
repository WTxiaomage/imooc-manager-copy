import React, { Component } from 'react'
import {Card,Button,Radio} from 'antd'

import  '../../style/common.less'

export default class Buttons extends Component {
  state={
    value:"default"
  }
  handleChange =(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  render() {
    return (
      <div>
      <Card title="基础按钮" className="base-card">
        <Button className="base-button" type="primary">微米</Button>
        <Button className="base-button">微米</Button>
        <Button className="base-button" type="dashed">微米</Button>
        <Button className="base-button" disabled>微米</Button>
        <Button className="base-button" type="danger">微米</Button>
      </Card>
      <Card title="图形按钮" className="base-card"> 
        <Button className="base-button" icon="plus" >  创建</Button>
        <Button className="base-button" icon="edit" >编辑</Button>
        <Button className="base-button" icon="delete">删除</Button>
        <Button className="base-button" shape="circle" icon="search"></Button>
        <Button className="base-button" icon="search" >搜索</Button>
        <Button className="base-button" icon="download">下载</Button>
      </Card>
      <Card title="Loading按钮" className="base-card"> 
        <Button className="base-button" type="primary" icon="loading" >  确定</Button>
        <Button className="base-button" type="primary" icon="loading" shape="circle" ></Button>
        <Button className="base-button" icon="loading">点击加载</Button>
        <Button className="base-button" icon="loading"></Button>
        <Button className="base-button" icon="loading" >关闭</Button>
      </Card>
      <Card title="按钮组" className="base-card"> 
        <Button.Group>
            <Button type="primary" icon="left">返回</Button>
            <Button type="primary" icon="right">前进</Button>
        </Button.Group>
      </Card>
      <Card title="按钮尺寸" className="base-card"> 
      <Radio.Group onChange={this.handleChange} value={this.state.value}>
      <Radio value="small">小</Radio>
      <Radio value="default">中</Radio>
      <Radio value="large">大</Radio>
      </Radio.Group>
      <Button className="base-button" type="primary" size={this.state.value}>微米</Button>
      </Card>
      </div>
    )
  }
}
