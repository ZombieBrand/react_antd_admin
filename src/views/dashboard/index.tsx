import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <Result
            title='首页'
            subTitle='这是首页'
            extra={
                <Button type='primary' onClick={handleClick}>
                    反回首页
                </Button>
            }
        />
    )
}
export default Dashboard
