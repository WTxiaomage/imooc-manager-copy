import React, { Component } from "react";
import { Card, gallery, Row, Col } from "antd";

import "../../style/common.less";

export default class Gallery extends Component {
  render() {
    const imgLists = [
      ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      ["6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
      ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"],
      ["16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"],
      ["21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg"]
    ];

    const imgList = imgLists.map(list =>
      list.map((item,index) => (
        <Card
          style={{ marginBottom: 10 }}
          cover={<img src={"/gallery/" + item} />}
          key={index}
        />
      ))
    );

    return (
      <div>
        <Row gutter={10}>
          <Col span={5}>
            {imgList[0]}
          </Col>
          <Col span={5}>
            {imgList[1]}
          </Col>
          <Col span={5}>
            {imgList[2]}
          </Col>
          <Col span={5}>
            {imgList[3]}
          </Col>
          <Col span={4}>
            {imgList[4]}
          </Col>
        </Row>
      </div>
    );
  }
}
