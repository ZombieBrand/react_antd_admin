import { Avatar, Dropdown, MenuProps, Space, Flex } from 'antd'
import { DownOutlined, LogoutOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import NightToggleButton from '@/components/NightToggleButton'
import { message } from '@/utils/AntdGlobal'
const items: MenuProps['items'] = [
  {
    key: '1',
    label: '修改密码',
    icon: <SettingOutlined />
  },
  {
    key: '4',
    danger: true,
    label: '退出登录',
    icon: <LogoutOutlined />
  }
]

export default function NavHeader() {
  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`)
  }

  return (
    <div className='px-4'>
      <Flex align='center' justify='space-between'>
        <Space align='baseline'></Space>
        <Space align='baseline'>
          <NightToggleButton />
          <Dropdown menu={{ items, onClick }} placement='bottomLeft' arrow>
            <Space className='cursor-pointer'>
              <Avatar icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </Flex>
    </div>
  )
}
