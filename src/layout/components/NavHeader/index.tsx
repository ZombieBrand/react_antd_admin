import { Avatar, Col, Dropdown, MenuProps, Row, Space } from 'antd'
import ThemeSwitch from './ThemeSwitch'
import { DownOutlined, LogoutOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'

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
      <Row justify='end' align='middle'>
        <Col className='flex items-center'>
          <ThemeSwitch />
        </Col>
        <Col>
          <Dropdown menu={{ items, onClick }} placement='bottomLeft' arrow>
            <Space className='cursor-pointer'>
              <Avatar icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </Dropdown>
        </Col>
      </Row>
    </div>
  )
}
