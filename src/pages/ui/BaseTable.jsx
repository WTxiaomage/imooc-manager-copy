import React, { Component } from 'react'
import {Card,Table} from 'antd';
import axios from '../../axios/index';

export default class BaseTable extends Component {
    state={
        dataSource2:[]
    }

  componentDidMount() {
      const dataSource=[
          {
              id:"0",
              username:"jack",
              sex:"1",
              state:"1",
              interest:"1",
              birthday:"2000-1-1",
              address:"重庆市渝中区解放碑",
              time:"09:00"
          },
          {
              id:"1",
              username:"jack",
              sex:"1",
              state:"1",
              interest:"1",
              birthday:"2000-1-1",
              address:"重庆市渝中区解放碑",
              time:"09:00"
          }
      ]
      dataSource.map((item,index)=>{
          return item.key = index
      })
      this.setState({dataSource})
      this.request()
  }
     
 request=()=>{
    axios.ajax({
        url:"/table/list",
        data:{
            params:{
                page:1
            },
            // isShowLoading:false
        }
    }).then((res)=>{
        if (res.code===0) {
            res.result.map((item,index)=>{
                return item.key = index
            })
            this.setState({
                dataSource2:res.result
            })
        }
    }).catch((err)=>{
        console.log(err)
    })
    
 }

 onRowClick=(record,index)=>{
    let selectKey =[index]
    this.setState({
        selectedRowKeys:selectKey,
        selectedItem: record
    })
 }
//  onRowClick2=(record,index)=>{
//     let selectKey =[index]
//     this.setState({
//         selectedRowKeys2:selectKey,
//         selectedItem2: record
//     })
//  }


  render() {
    const columns = [
        {
            title:"id",
            key:"id",
            dataIndex:"id"
        },
        {
            title:"用户名",
            key:"username",
            dataIndex:"username"
        },
        {
            title:"性别",
            key:"sex",
            dataIndex:"sex",
            render(text) {
               return (text === 1) ? "男" :"女"
            }
        },
        {
            title:"状态",
            key:"state",
            dataIndex:"state"
        },
        {
            title:"爱好",
            key:"interest",
            dataIndex:"interest",
            render(h) {
                let config ={
                    "1":"吃饭",
                    "2":"睡觉",
                    "3":"打豆豆",
                    "4":"撸代码",
                    "5":"看美女"
                }
                return config[h]
            }
        },
        {
            title:"生日",
            key:"birthday",
            dataIndex:"birthday"
        },
        {
            title:"地址",
            key:"address",
            dataIndex:"address"
        },
        {
            title:"早起时间",
            key:"time",
            dataIndex:"time"
        },
    ]
    const rowSelection ={
        type:"radio",
        selectedRowKeys:this.state.selectedRowKeys
    }
    const rowCheckSelection={
        type:"checkbox",
        selectedRowKeys:this.state.selectedRowKeys2,
        onChange:(selectedRowKeys,selectedRows)=>{
            this.setState({
                selectedRowKeys2:selectedRowKeys,
                selectedRows2:selectedRows
            })
        }
    }


    return (
      <div>
        <Card title="基础表格" className="base-card">
            <Table 
                columns={columns} 
                dataSource={this.state.dataSource}
                bordered
                pagination={false}
            />
        </Card>
        <Card title="动态数据表格" className="base-card">
            <Table 
                columns={columns} 
                dataSource={this.state.dataSource2}
                bordered
                pagination={false}
            />
        </Card>
        <Card title="动态数据表格-单选" className="base-card">
            <Table 
                columns={columns} 
                dataSource={this.state.dataSource2}
                bordered
                pagination={false}
                rowSelection={rowSelection}
                onRow={(record,index) => {
                    return {
                      onClick: () => {
                          this.onRowClick(record,index)
                      }, // 点击行
                    };
                  }}
            />
        </Card>
        <Card title="动态数据表格-复选" className="base-card">
            <Table 
                columns={columns} 
                dataSource={this.state.dataSource2}
                bordered
                pagination={false}
                rowSelection={rowCheckSelection}
              
            />
        </Card>


      </div>
    )
  }
}
