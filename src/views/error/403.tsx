import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
function NotAuthorized() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <Result
            status='403'
            title='403'
            subTitle='对不起，您没有权限访问此页面。'
            extra={
                <Button type='primary' onClick={handleClick}>
                    反回首页
                </Button>
            }
        />
    )
}
export default NotAuthorized
