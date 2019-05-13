import React, { Component } from 'react'
import {Card,Form,Input,Radio,InputNumber,Select, Switch,DatePicker,TimePicker,Upload, Checkbox,Button} from 'antd'


const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option =Select.Option
const TextArea = Input.TextArea
 
class FormRegister extends Component {

  render() {
    const {getFieldDecorator} =this.props.form
    const formItemLayout = {
        labelCol:{
            xs:24,
            sm:4
        },
        wrapperCol:{
            xs:24,
            sm:12
        },
        
    }
    return (
      <div>
        <Card title="注册表单" className="base-card">
            <Form>
                <FormItem label="用户名" {...formItemLayout}>
                    {
                        getFieldDecorator("username",{
                            initialValue:"",
                            rules:[
                                {
                                    required:true,
                                    message:"用户名不能为空"
                                },
                                {
                                    min:6,
                                    max:11,
                                    message:"长度不再范围内" 
                                },
                                {
                                    pattern:/^\w+$/g,
                                    message:"必须是数字字母下划线"
                                }
                            ]
                        })(<Input placeholder="请输入用户名"></Input>)
                    }
                </FormItem>
                <FormItem label="密码" {...formItemLayout}>
                    {
                        getFieldDecorator("userPWD",{
                            initialValue:"",
                            rules:[{
                                required:true,
                                message:"密码不能为空"
                            }]
                        })(<Input placeholder="请输入密码"></Input>)
                    }
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                    {
                        getFieldDecorator("sex",{
                            initialValue:"1",
                            rules:[{
                                required:true,
                            }]
                        })(<RadioGroup>
                                <Radio value="1">男</Radio>
                                <Radio value="2">女</Radio>
                            </RadioGroup>)
                    }
                </FormItem>
                <FormItem label="年龄" {...formItemLayout}>
                    {
                        getFieldDecorator("age",{
                            initialValue:18,
                            rules:[{
                                required:true,
                            }]
                        })(<InputNumber></InputNumber>)
                    }
                </FormItem>
                <FormItem label="当前状态" {...formItemLayout}>
                    {
                        getFieldDecorator("state",{
                            initialValue:"2",
                            rules:[{
                                required:true,
                            }]
                        })( <Select >
                                <Option value="1">react</Option>
                                <Option value="2">vue</Option>
                                <Option value="3">angular</Option>
                                <Option value="4">js</Option>
                            </Select>)
                    }
                </FormItem>
                <FormItem label="爱好" {...formItemLayout}>
                    {
                        getFieldDecorator("interest",{
                            initialValue:["2","4"],
                            rules:[{
                                required:true,
                            }]
                        })( <Select mode="multiple">
                                <Option value="1">吃饭</Option>
                                <Option value="2">睡觉</Option>
                                <Option value="3">打豆豆</Option>
                                <Option value="4">撸代码</Option>
                            </Select>)
                    }
                </FormItem>
                <FormItem label="是否已婚" {...formItemLayout}>
                    {
                        getFieldDecorator("isMarried",{
                            valuePropName:'checked',
                            initialValue:true,
                            rules:[{
                                required:true,
                            }]
                        })( <Switch></Switch>)
                    }
                </FormItem>
                <FormItem label="生日" {...formItemLayout}>
                    {
                        getFieldDecorator("birthday",{
                            rules:[{
                                required:true,
                            }]
                        })( <DatePicker></DatePicker>)
                    }
                </FormItem>
                <FormItem label="联系地址" {...formItemLayout}>
                    {
                        getFieldDecorator("address",{
                            rules:[{
                                required:true,
                            }]
                        })( <TextArea></TextArea>)
                    }
                </FormItem>
                <FormItem label="早起时间" {...formItemLayout}>
                    {
                        getFieldDecorator("time",{
                            rules:[{
                                required:true,
                            }]
                        })( <TimePicker></TimePicker>)
                    }
                </FormItem>
                <FormItem label="头像" {...formItemLayout}>
                    {
                        getFieldDecorator("userImg",{
                            rules:[{
                                required:true,
                            }]
                        })( <Upload></Upload>)
                    }
                </FormItem>
                <FormItem label="" {...formItemLayout}>
                    {
                        getFieldDecorator("agree",{
                            rules:[{
                                required:true,
                            }]
                        })( <Checkbox>同意协议</Checkbox>)
                    }
                </FormItem>
                <FormItem label="" {...formItemLayout}>
                    <Button type="primary">注册</Button>
                </FormItem>
               
            </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormRegister)
