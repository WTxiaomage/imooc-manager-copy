import React, { Component } from "react";
import { Card,message,Button} from "antd";

import "../../style/common.less";

export default class Messages extends Component {
 

  showMessage=(type)=>{
    message[type](
      "恭喜你，学会了message！！！"
    )
  }

  render() {
  
    return (
      <div>
      <Card title="通知提醒框"  className="base-card">
      <Button type="primary" style={{margin:20}} onClick={()=>this.showMessage("success")}>success</Button>
      <Button type="primary" style={{margin:20}} onClick={()=>this.showMessage("error")}>error</Button>
      <Button type="primary" style={{margin:20}} onClick={()=>this.showMessage("warning")}>warning</Button>
      <Button type="primary" style={{margin:20}} onClick={()=>this.showMessage("info")}>info</Button>
      </Card>
      </div>
    );
  }
}
