import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useDarkMode } from '@/hook/useDarkMode'
import { Card, Form, Input, Button } from 'antd'
import { message } from '@/utils/AntdGlobal'

const Login = () => {
  const isDarkMode = useDarkMode()
  console.log(isDarkMode, 'isDarkMode')
  const loginFormData = {
    userName: '562168176',
    userPwd: '123456'
  }
  const onFinish = async () => {
    message.success('登录成功')
  }

  return (
    <div className='login-wrapper'>
      <Card className='w-96 rounded-lg border border-gray-300 bg-white/90 backdrop-blur-md backdrop-filter dark:border-transparent dark:bg-black/40'>
        <h2 className='my-6 text-center text-2xl font-bold leading-9 tracking-widest dark:text-white'>React Admin</h2>
        <Form name='login' initialValues={loginFormData} onFinish={onFinish} autoComplete='off' size='large'>
          <Form.Item name='userName' rules={[{ required: true, message: '请输入您的用户名' }]}>
            <Input prefix={<UserOutlined className='site-form-item-icon' />} />
          </Form.Item>
          <Form.Item name='userPwd' rules={[{ required: true, message: '请输入您的密码!' }]}>
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
