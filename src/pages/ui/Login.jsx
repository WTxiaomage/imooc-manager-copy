import React, { Component } from 'react'
import {Card,Form, Icon, Input, Button, message, Checkbox} from 'antd'
import './ui.less';
const FormItem = Form.Item
 class Login extends Component {

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,values)=>{
            if (!err) {
                message.success(`${userInfo.username}通过react学习，密码为${userInfo.userPWD}`)
            }

        })
    }


  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div >
        <Card title="登录行内表单" className="base-card">
            <Form layout="inline">
                <FormItem>
                    <Input placeholder="请输入账号"></Input>
                </FormItem>
                <FormItem>
                    <Input placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary">login</Button>
                </FormItem>
            </Form>
        </Card>
        <Card title="登录水平表单" className="base-card">
            <Form style={{width:600}} layout="inline">
                <FormItem>
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
                        })( <Input prefix={<Icon type="user"></Icon>}  placeholder="请输入账号"></Input>)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator("userPWD",{
                            initialValue:"",
                            rules:[{
                                required:true,
                                message:"密码不能为空"
                            }]
                        })(<Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"></Input>)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator("remember",{
                            valuePropName: 'checked',
                            initialValue:true,
                        })(<Checkbox>记住密码</Checkbox>)
                    }
                    <a href="#" style={{float:'right'}}>忘记密码</a>
                </FormItem>
                <FormItem>
                    <Button type="primary" onClick={this.handleSubmit}>login</Button>
                </FormItem>
            </Form>
        
        </Card>
      </div>
    )
  }
}

export default Form.create()(Login)
