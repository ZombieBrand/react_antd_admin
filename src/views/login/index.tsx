import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Form, Input, Button } from 'antd'
import { loginApi } from '@/api/users/login'
import { useRequest } from 'ahooks'
import { ILoginParams } from '@/types/api/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/modules/user'

const Login = () => {
  const setToken = useUserStore(state => state.updateToken)
  const navigate = useNavigate()
  const loginFormData = {
    userName: '562168176',
    userPwd: '123456'
  }
  const { loading, run } = useRequest(loginApi, {
    manual: true,
    onSuccess: (result, params) => {
      console.log(result, 'result', params, 'params')
      toast.success('登录成功')
      setToken(result.token)
      const urlParams = new URLSearchParams(location.search)
      navigate(urlParams.get('redirect') || '/')
    },
    onError: error => {
      console.log('%c [ error ]-24', 'font-size:13px; background:#cf1322; color:#ffef50;', JSON.stringify(error))
    }
  })
  const onFinish = async (values: ILoginParams) => {
    console.log('%c [ values ]-14', 'font-size:13px; background:#5713f9; color:#9b57ff;', JSON.stringify(values))
    run(values)
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
            <Button size='large' style={{ width: '100%' }} type='primary' htmlType='submit' loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
