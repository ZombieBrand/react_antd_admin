import { Spin, SpinProps } from 'antd'
import './loading.less'
export default function Loading(props?: SpinProps) {
    return (
        <Spin tip='loading...' size='large' {...props} className='request-loading'>
            <div className='content' />
        </Spin>
    )
}
