import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import { useDarkMode } from '@/hook'
import './index.less'

const Login = () => {
    const isDarkMode = useDarkMode()
    const backgroundColor = isDarkMode ? '#252525' : 'white'
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }
    return (
        <div className='login' style={{ backgroundColor }}>
            <Card className='login-wrapper'>
                <h2 className='login-title'>Ant Design Admin</h2>
                <Form name='login' initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
                    <Form.Item name='username' rules={[{ required: true, message: '请输入您的用户名' }]}>
                        <Input prefix={<UserOutlined className='site-form-item-icon' />} />
                    </Form.Item>
                    <Form.Item name='password' rules={[{ required: true, message: '请输入您的密码!' }]}>
                        <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' />
                    </Form.Item>
                    <Form.Item>
                        <Button size='large' style={{ width: '100%' }} type='primary' htmlType='submit'>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login
