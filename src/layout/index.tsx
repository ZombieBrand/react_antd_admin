import { Watermark } from 'antd'
import MyLayout from '@/layout/Layout'
import layoutSetting from '@/config/layout'
const App: React.FC = () => {
  const { watermark, watermarkContent } = layoutSetting()

  if (watermark) {
    return (
      <Watermark content={watermarkContent}>
        <MyLayout />
      </Watermark>
    )
  }

  return <MyLayout />
}

export default App
