import React, { Component } from 'react'
import { Card,Tabs,Button,Icon} from "antd";

import "../../style/common.less";

export default class Tabs1 extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
    }

    componentWillMount() {
        const panes = [
            {
                title:'Tab 1',
                content: 'Tab 1',
                key:'1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })

    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
     }
     add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      }
    


  render() {
    const  TabPane = Tabs.TabPane;
    return (
      <div>
        <Card title="Tab页签"  className="base-card">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
                <TabPane tab="Tab 2" key="2" disabled>Tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
            </Tabs>
        </Card>
        <Card title="Tab带图的页签"  className="base-card">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1" tab={<span><Icon type="android" />Tab 2</span>}>Tab 1</TabPane>
                <TabPane tab="Tab 2" key="2" tab={<span><Icon type="apple" />Tab 2</span>}>Tab 2</TabPane>
                <TabPane tab="Tab 3" key="3" tab={<span><Icon type="android" />Tab 2</span>}>Tab 3</TabPane>
            </Tabs>
        </Card>

        <Card title="新增和关闭页签"  className="base-card">
            <Tabs defaultActiveKey="1"
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {this.state.panes.map((pane)=>{
                    return (
                        <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
                    )
                })}
            </Tabs>
        </Card>
      </div>
    )
  }
}
