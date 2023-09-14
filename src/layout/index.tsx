import { Watermark } from 'antd'
import MyLayout from '@/layout/Layout'
import layoutSetting from '@/config/layout'
const App: React.FC = () => {
  const { watermark } = layoutSetting()

  if (watermark) {
    return (
      <Watermark content="react_admin">
        <MyLayout />
      </Watermark>
    )
  }

  return <MyLayout />
}

export default App
