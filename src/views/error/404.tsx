import alovaInstance from '@/api'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'alova'
function NotFound() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    const todoListGetter = alovaInstance.Get('/todo')
    const {
        // loading是加载状态值，当加载时它的值为true，结束后自动更新为false
        // 它的值为普通的boolean值，请求状态变化时内部将自动调用set函数更新它的值
        loading,

        // 响应数据
        data,

        // 请求错误对象，请求错误时有值，否则为undefined
        error
        // 直接将Method实例传入即可发送请求
    } = useRequest(todoListGetter, {
        // 请求响应前，data的初始值
        initialData: []
    })
    console.log(loading, data, error)
    return (
        <Result
            status='404'
            title='404'
            subTitle='对不起，您访问的页面不存在。'
            extra={
                <Button type='primary' onClick={handleClick}>
                    反回首页
                </Button>
            }
        />
    )
}
export default NotFound
