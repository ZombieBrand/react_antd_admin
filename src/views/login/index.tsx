import { useRequest } from 'alova'
import { loginApi } from '@/api/login'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useDarkMode } from '@/hook/useDarkMode'
import { Card, Form, Input, Button } from 'antd'
import { message } from '@/utils/AntdGlobal'
import storage from '@/utils/storage'
import styles from './index.module.css'
import { ILoginData } from '@/types/api/login'
const Login = () => {
  const isDarkMode = useDarkMode()
  const backgroundColor = isDarkMode ? '#252525' : 'white'
  const loginFormData = {
    userName: '562168176',
    userPwd: '123456'
  }
  const { send: handleLogin, loading } = useRequest((loginData) => loginApi(loginData), {
    immediate: false
  })
  const onFinish = async (values: ILoginData) => {
    try {
      const result = await handleLogin(values)
      storage.set('token', result.data.token)
      message.success('登录成功')
    } catch (error) {
      console.log('%c [ error ]-23', 'font-size:13px; background:#10fab9; color:#54fffd;', error)
      message.error('登录失败')
    }
  }

  return (
    <div className={styles.login} style={{ backgroundColor }}>
      <Card className={styles.loginWrapper}>
        <h2 className={styles.loginTitle}>Ant Design Admin</h2>
        <Form name="login" initialValues={loginFormData} onFinish={onFinish} autoComplete="off">
          <Form.Item name="userName" rules={[{ required: true, message: '请输入您的用户名' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item name="userPwd" rules={[{ required: true, message: '请输入您的密码!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" />
          </Form.Item>
          <Form.Item>
            <Button size="large" loading={loading} style={{ width: '100%' }} type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
