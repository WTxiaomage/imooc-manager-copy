import React, { Component } from "react";
import "./Footer.less";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        版权所有：微米前端（推荐使用谷歌浏览器，可以获得更佳操作页面体验）
        技术支持：<a href="https://github.com/WTxiaomage">https://github.com/WTxiaomage</a>
      </div>
    );
  }
}
