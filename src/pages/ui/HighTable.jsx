import React, { Component } from "react";
import { Card, Table, Badge,Modal,message,Button } from "antd";
import axios from "../../axios/index";

export default class BaseTable extends Component {
  state = {
    flag:0
  };
  params = {
    page: 1
  };
  componentDidMount() {
    this.request();
  }

  // 动态获取mock数据
  request = () => {
    axios
      .ajax({
        url: "/table/high/list",
        data: {
          params: {
            page: 1
          }
          // isShowLoading:false
        }
      })
      .then(res => {
        if (res.code === 0) {
          res.result.map((item, index) => {
            return (item.key = index + this.state.flag.toString());
          });
          this.setState({
            dataSource: res.result,
            flag:this.state.flag++
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 排序
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    });
  };

  // 删除操作
  handleDelete = item => {
    let id = item.id;
    Modal.confirm({
      title: "确认",
      content: "您确认要删除此条数据吗？",
      onOk: () => {
        message.success("删除成功");
        this.request();
      }
    });
  };

  render() {
    // 列信息
    const columns = [
      {
        title: "id",
        width: 80,
        dataIndex: "id"
      },
      {
        title: "用户名",
        width: 80,
        dataIndex: "userName"
      },
      {
        title: "性别",
        width: 80,
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        width: 80,
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        width: 80,
        dataIndex: "interest",
        render(abc) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "骑行",
            "7": "桌球",
            "8": "麦霸"
          };
          return config[abc];
        }
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "地址",
        width: 120,
        dataIndex: "address"
      },
      {
        title: "早起时间",
        width: 80,
        dataIndex: "time"
      }
    ];

    const columns2 = [
      {
        title: "id",
        width: 80,
        fixed: "left",
        dataIndex: "id"
      },
      {
        title: "用户名",
        width: 80,
        fixed: "left",
        dataIndex: "userName"
      },
      {
        title: "性别",
        width: 80,
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        width: 80,
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        width: 80,
        dataIndex: "interest",
        render(abc) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "骑行",
            "7": "桌球",
            "8": "麦霸"
          };
          return config[abc];
        }
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "生日",
        width: 120,
        dataIndex: "birthday"
      },
      {
        title: "地址",
        width: 120,
        fixed: "right",
        dataIndex: "address"
      },
      {
        title: "早起时间",
        width: 80,
        fixed: "right",
        dataIndex: "time"
      }
    ];

    const columns3 = [
      {
        title: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "username"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "年龄",
        dataIndex: "age",

        sorter: (a, b) => {
          return a.age - b.age;
        },
        sortOrder: this.state.sortOrder
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(abc) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "骑行",
            "7": "桌球",
            "8": "麦霸"
          };
          return config[abc];
        }
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "地址",
        dataIndex: "address"
      },
      {
        title: "早起时间",
        dataIndex: "time"
      }
    ];

    const columns4 = [
      {
        title: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "username"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        }
      },
      {
        title: "年龄",
        dataIndex: "age"
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(abc) {
          let config = {
            "1": <Badge status="success" text="成功" />,
            "2": <Badge status="error" text="报错" />,
            "3": <Badge status="default" text="正常" />,
            "4": <Badge status="processing" text="进行中" />,
            "5": <Badge status="warning" text="警告" />
          };
          return config[abc];
        }
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "地址",
        dataIndex: "address"
      },
      {
        title: "操作",
        render: (text, item) => {
          return (
            <Button
              size="small"
              onClick={item => {
                this.handleDelete(item);
              }}
            >
              删除
            </Button>
          );
        }
      }
    ];

    return (
      <div>
        <Card title="头部固定" className="base-card">
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title="左侧固定" className="base-card">
          <Table
            columns={columns2}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
            scroll={{ x: 2640 }}
          />
        </Card>
        <Card title="表格排序" className="base-card">
          <Table
            columns={columns3}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
        <Card title="操作按钮" className="base-card">
          <Table
            columns={columns4}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
