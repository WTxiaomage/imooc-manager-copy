import React, { Component } from "react";
import { Card,notification,Button} from "antd";

import "../../style/common.less";

export default class Notification extends Component {
 

    openNotification = (type,direction)=>{
        notification[type]({
            message:"你会react",
            description:"YES",
            placement:direction
        })
    }

  render() {
  
    return (
      <div>
        <Card title="通知提醒框"  className="base-card">
        <Button type="primary" style={{margin:20}} onClick={()=>this.openNotification("success","topLeft")}>success</Button>
        <Button type="primary" style={{margin:20}} onClick={()=>this.openNotification("error","bottomLeft")}>error</Button>
        <Button type="primary" style={{margin:20}} onClick={()=>this.openNotification("warning","topRight")}>warning</Button>
        <Button type="primary" style={{margin:20}} onClick={()=>this.openNotification("info","bottomRight")}>info</Button>
      
        </Card>
      </div>
    );
  }
}
