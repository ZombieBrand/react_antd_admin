import { Breadcrumb } from 'antd'
import settings from '@/config/layout'

function MyBreadcrumb() {
  const {
    styles: { contentMargin }
  } = settings()

  return (
    <Breadcrumb
      style={{ marginLeft: contentMargin, marginTop: contentMargin }}
      items={[
        {
          title: 'Home'
        },
        {
          title: <a href=''>Application Center</a>
        },
        {
          title: <a href=''>Application List</a>
        },
        {
          title: 'An Application'
        }
      ]}
    />
  )
}

export default MyBreadcrumb
