import { Spin } from 'antd'
import './loading.css'
export default function Loading({ tip = 'Loading' }: { tip?: string }) {
  return <Spin tip={tip} size='large' fullscreen className='request-loading' delay={1000} />
}
