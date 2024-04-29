import { SunFilled, MoonFilled } from '@ant-design/icons'
import { Switch, ConfigProvider, theme } from 'antd'

const { useToken } = theme
const NightToggleButton = () => {
  const { token } = useToken()
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextQuaternary: token.colorPrimary
        }
      }}
    >
      <Switch checkedChildren={<SunFilled />} unCheckedChildren={<MoonFilled />} defaultChecked />
    </ConfigProvider>
  )
}

export default NightToggleButton
