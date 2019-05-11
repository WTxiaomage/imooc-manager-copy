import React, { Component } from "react";

import { Row, Col } from "antd";

import NavLeft from "./components/NavLeft/Navleft";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style/common.less";

import Home from "./pages/Home/Home";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="nav-left" span={4}>
            <NavLeft />
          </Col>
          <Col  span={20}>
            <Header />
            <Row className="main-content">
              <Home />
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
