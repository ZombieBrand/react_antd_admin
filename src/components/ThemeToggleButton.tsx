import { SunFilled, MoonFilled } from '@ant-design/icons'
import { Switch, ConfigProvider, theme } from 'antd'
import { useUserStore } from '@/store/modules/user'

const { useToken } = theme
const DarkToggleButton = () => {
  const { token } = useToken()
  const theme = useUserStore(state => state.theme)
  const setTheme = useUserStore(state => state.updateTheme)
  const onChange = (checked: boolean) => {
    setTheme(checked ? 'light' : 'dark')
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextQuaternary: token.colorPrimary
        }
      }}
    >
      <Switch checkedChildren={<SunFilled />} checked={theme !== 'dark'} unCheckedChildren={<MoonFilled />} onChange={onChange} />
    </ConfigProvider>
  )
}

export default DarkToggleButton
