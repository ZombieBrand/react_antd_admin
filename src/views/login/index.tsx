import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import { useDarkMode } from '@/hook'
import classNames from 'classnames'
import styles from './index.module.less'
import { useRequest } from 'alova'
import { loginApi } from '@/api/methods/login'
import { ILoginData } from '@/types/login'
import storage from '@/utils/storage'
import { message } from '@/utils/AntdGlobal'

function Login() {
    const isDarkMode = useDarkMode()
    const backgroundColor = isDarkMode ? '#252525' : 'white'
    const loginFormData = {
        userName: '562168176',
        userPwd: '123456'
    }
    const { send: handleLogin } = useRequest(loginData => loginApi(loginData), {
        immediate: false
    })
    const onFinish = async (values: ILoginData) => {
        try {
            const result = await handleLogin(values)
            storage.set('token', result.data)
            message.success('登录成功')
        } catch (error) {
            console.log('%c [ error ]-23', 'font-size:13px; background:#10fab9; color:#54fffd;', error)
            message.error('登录失败')
        }
    }

    const loginWrapperClass = classNames({
        [styles.loginWrapper]: true,
        [styles.dark]: isDarkMode
    })
    return (
        <div className={styles.login} style={{ backgroundColor }}>
            <Card className={loginWrapperClass}>
                <h2 className={styles.loginTitle}>Ant Design Admin</h2>
                <Form name='login' initialValues={loginFormData} onFinish={onFinish} autoComplete='off'>
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
