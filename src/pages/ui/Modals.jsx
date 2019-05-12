import React, { Component } from 'react'
import {Card,Modal,Button} from 'antd'


import  '../../style/common.less'
import  './ui.less'
export default class Modals extends Component {
  state={
    modal1:false,
    modal2:false,
    modal3:false,
    modal4:false
  }
  handleClick=(type,val)=>{
    this.setState({[type]:!val})
  }
  handleConfirm=(type)=>{
    Modal[type]({
      title:"确认",
      content:"你确定吗？"
    })
  }
  render() {
    return (
      <div>
      <Card title="基础模态框"  className="base-card">
      <Button type="primary" className="base-button" onClick={()=>this.handleClick("modal1",this.state.modal1)} >Open</Button>
      <Button type="primary" className="base-button" onClick={()=>this.handleClick("modal2",this.state.modal2)}>自定义页脚</Button>
      <Button type="primary" className="base-button" onClick={()=>this.handleClick("modal3",this.state.modal3)}>顶部20px弹框</Button>
      <Button type="primary" className="base-button" onClick={()=>this.handleClick("modal4",this.state.modal4)}>水平垂直居中</Button>
      </Card>
      <Card title="信息确认框" className="base-card">
      <Button type="primary" className="base-button" onClick={()=>this.handleConfirm("confirm")}>Confirm</Button>
      <Button type="primary" className="base-button" onClick={()=>this.handleConfirm("info")}>info</Button>
      <Button type="primary" className="base-button" onClick={()=>this.handleConfirm("success")}>Success</Button>
      <Button type="primary" className="base-button" onClick={()=>this.handleConfirm("warning")}>Warning</Button>
      </Card>
      <Modal title="react" visible={this.state.modal1}  onOk={()=>this.handleClick("modal1",this.state.modal1)} >
        欢迎来到共享单车
      </Modal>
      <Modal title="react" visible={this.state.modal2}  onOk={()=>this.handleClick("modal2",this.state.modal2)} 
        okText="确定" cancelText="取消" 
      >
        欢迎来到共享单车
      </Modal>
      <Modal title="react" visible={this.state.modal3}  onOk={()=>this.handleClick("modal3",this.state.modal3)}  style={{top:20}}>
        欢迎来到20px
      </Modal>
      <Modal title="react" visible={this.state.modal4}  onOk={()=>this.handleClick("modal4",this.state.modal4)}  wrapClassName="vertical-center-modal">
      水平垂直居中
    </Modal>
      </div>
    )
  }
}
