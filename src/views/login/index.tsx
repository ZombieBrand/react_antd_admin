import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormCheckbox, ProFormText, ProConfigProvider } from '@ant-design/pro-components'

const Login = () => {
    return (
        <ProConfigProvider hashed={false}>
            <div style={{ backgroundColor: 'white' }}>
                <LoginForm
                    logo='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
                    title='Github'
                    subTitle='全球最大的代码托管平台'
                >
                    <>
                        <ProFormText
                            name='username'
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className={'prefixIcon'} />
                            }}
                            placeholder={'用户名: admin or user'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!'
                                }
                            ]}
                        />
                        <ProFormText.Password
                            name='password'
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'} />
                            }}
                            placeholder={'密码: ant.design'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！'
                                }
                            ]}
                        />
                    </>
                    <div
                        style={{
                            marginBlockEnd: 24
                        }}
                    >
                        <ProFormCheckbox noStyle name='autoLogin'>
                            自动登录
                        </ProFormCheckbox>
                        <a
                            style={{
                                float: 'right'
                            }}
                        >
                            忘记密码
                        </a>
                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    )
}
export default Login
