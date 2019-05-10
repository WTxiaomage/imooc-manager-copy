import React, { Component } from "react";
import { Col, Menu, SubMenu } from "antd";

import menuConfig from "../../config/menuConfig";

import "./Navleft.less";

export default class Navleft extends Component {
  // 菜单渲染
  renderMenu = data => {
    const { Item, SubMenu } = Menu;
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Item title={item.title} key={item.key}>
          {item.title}
        </Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/cherrytree.png" alt="logo" />
          <h1>共享单车</h1>
        </div>
        <Menu theme="dark">{this.renderMenu(menuConfig)}</Menu>
      </div>
    );
  }
}
