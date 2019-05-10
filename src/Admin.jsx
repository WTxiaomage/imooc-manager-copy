import React, { Component } from "react";

import { Row, Col } from "antd";

import NavLeft from "./components/NavLeft/Navleft";
import "./Admin.css";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Row>
          <NavLeft />
          <Col className="main-content" span={20}>
            main-content
          </Col>
        </Row>
      </div>
    );
  }
}
