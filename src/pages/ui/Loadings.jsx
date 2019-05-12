import React, { Component } from "react";
import { Card, Spin,Icon,Alert} from "antd";

import "../../style/common.less";

export default class Loadings extends Component {
  state = {
    value: "default"
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const loading = <Icon type="loading"></Icon>
    return (
      <div>
        <Card title="Spin用法" className="base-card">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin size="large" indicator={loading} tip="加载中。。。"/>
        </Card>
        <Card title="内容遮罩" className="base-card">
         <Alert message="你是最棒的！" description="你会react"></Alert>
          <Spin>
            <Alert message="你是最棒的！" description="你会react"></Alert>
          </Spin>    
          <Spin tip="加载中...">
            <Alert message="你是最棒的！" description="你会react"></Alert>
          </Spin>        
          <Spin indicator={loading}>
            <Alert message="你是最棒的！" description="你会react"></Alert>
          </Spin>        
        </Card>
      </div>
    );
  }
}
