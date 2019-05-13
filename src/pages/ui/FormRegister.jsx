import React, { Component } from 'react'
import {Card,Form,Input,Radio,InputNumber,Select, Switch,DatePicker,TimePicker,Upload, Checkbox,Button,Icon,message} from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option =Select.Option
const TextArea = Input.TextArea
 
class FormRegister extends Component {

    state={
        loading: false
    }
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((errors, values) => {
            if (!errors) {
                message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`) 
            }
        });
    }

    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false,
            }));
        }
    }
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
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
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
                            })(<Input type="password" placeholder="请输入密码"></Input>)
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
                                initialValue:moment("2018-01-03"),
                                rules:[{
                                    required:true,
                                }]
                            })( <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>)
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
                            })( <Upload 
                                listType="picture-card"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                onChange={this.handleChange}
                                >
                                {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                </Upload>)
                        }
                    
                    </FormItem>
                    <FormItem  {...offsetLayout}>
                        {
                            getFieldDecorator("agree",{
                                rules:[{
                                    required:true,
                                }]
                            })( <Checkbox>同意协议</Checkbox>)
                        }
                    </FormItem>
                    <FormItem  {...offsetLayout}>
                        <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                    </FormItem>
                
                </Form>
            </Card>
        </div>
        )
    }
}

export default Form.create()(FormRegister)
