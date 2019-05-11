import React, { Component } from "react";
import { Row, Col } from "antd";
import utils from "../../utils/utils";
import "./Header.less";
import Axios from "../../axios/index";

export default class Header extends Component {
  state = {};
  componentWillMount() {
    // 显示系统时间
    setInterval(() => {
      const sysTime = utils.formateDate(new Date());
      this.setState({ sysTime });
    }, 1000);
    this.getWeatherAPIData();
  }

  getWeatherAPIData = () => {
    let city = "重庆";
    let url =
      "http://api.map.baidu.com/telematics/v3/weather?location=" +
      encodeURIComponent(city) +
      "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2";
    Axios.jsonp({
      url
    })
      .then(res => {
        const { dayPictureUrl, weather } = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl,
          weather
        });
      })
      .catch(err => {
        console.log("获取天气失败了");
      });
  };

  render() {
    const { sysTime, dayPictureUrl, weather } = this.state;
    return (
      <Row className="header">
        <Col span={24}>
          <div className="header-top">
            <span className="header-top-name">欢迎，微米前端</span>
            <a href="javescript:;" className="header-top-loginout">
              退出
            </a>
          </div>
          <Row className="bread-crumb">
            <Col span={4} className="bread-crumb-title">
              首页
            </Col>
            <Col span={20}  className="weather">
              <span className="weather-time">{sysTime}</span>

              <img src={dayPictureUrl} alt="天气" />

              <span className="weather-detail">{weather}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
