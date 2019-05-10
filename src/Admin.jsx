import React, { Component } from "react";

import { Row, Col } from "antd";

import NavLeft from "./components/NavLeft/Navleft";
import Header from "./components/Header/Header";
import "./Admin.css";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="nav-left" span={4}>
            <NavLeft />
          </Col>
          <Col className="main-content" span={20}>
            <Header />
          </Col>
        </Row>
      </div>
    );
  }
}
