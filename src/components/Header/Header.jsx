import React, { Component } from "react";
import { Row, Col } from "antd";
import utils from '../../utils/utils'
import  './Header.less';

export default class Header extends Component {
  state={

  }
  componentWillMount() {
   
    // 显示系统时间
    setInterval(() => {
      const sysTime = utils.formateDate(new Date())
      this.setState({sysTime})
    }, 1000);

  }

  render() {
    const {sysTime} =this.state
    return (
      <Row>
        <Col span={24}>
          <div className="header-top">
            <span className="header-top-name">欢迎，微米前端</span>
            <a href="javescript:;" className="header-top-loginout">退出</a>
          </div>
          <Row className="bread-crumb">
            <Col span={4} className="bread-crumb-title">
            首页
            </Col>
            <Col span={20} className="weather">
              <span className="weather-time">
              {sysTime}
              </span>
              <span className="weather-img">
                <img src="/public/assets/user_location.png" alt="天气"/>
              </span>
              <span className="weather-detail">
                多云
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
