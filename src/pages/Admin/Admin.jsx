import React, { Component } from "react";
import { Row, Col } from "antd";

import NavLeft from "../../components/NavLeft/Navleft";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style/common.less";



export default class Admin extends Component {
  render() {
    return (
      <div>
        <Row className="container">
          <Col className="nav-left" span={4}>
            <NavLeft />
          </Col>
          <Col  span={20}  className="main">
            <Header />
            <Row className="main-content">
              {this.props.children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
