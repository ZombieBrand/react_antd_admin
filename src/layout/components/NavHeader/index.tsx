import { Avatar, Dropdown, MenuProps, Space, Flex } from 'antd'
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import DarkToggleButton from '@/components/ThemeToggleButton'
import { message } from '@/utils/AntdGlobal'
import { resetAllStores } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/modules/user'

const items: MenuProps['items'] = [
  {
    key: 'changePassword',
    label: '修改密码',
    icon: <SettingOutlined />
  },
  {
    key: 'logOut',
    danger: true,
    label: '退出登录',
    icon: <LogoutOutlined />
  }
]

export default function NavHeader() {
  const navigate = useNavigate()
  const userName = useUserStore(state => state.userInfo.userName)
  const onClick: MenuProps['onClick'] = ({ key }) => {
    const menuFn = {
      changePassword: () => {
        message.info('修改密码')
      },
      logOut: () => {
        message.info('退出登录成功!')
        resetAllStores()
        navigate('/login')
      }
    }
    const runFn = Reflect.get(menuFn, key)
    runFn()
  }

  return (
    <div className='px-4'>
      <Flex align='center' justify='space-between'>
        <Space align='baseline'></Space>
        <Space align='baseline'>
          <DarkToggleButton />
          <Dropdown menu={{ items, onClick }} placement='bottomLeft'>
            <Space className='cursor-pointer'>
              <Avatar className='align-middle' size='large' gap={1}>
                {userName}
              </Avatar>
            </Space>
          </Dropdown>
        </Space>
      </Flex>
    </div>
  )
}
