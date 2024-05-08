import { Watermark } from 'antd'
import MyLayout from '@/layout/Layout'
import layoutSetting from '@/config/layout'
import { useRequest } from 'ahooks'
import { getUserInfoApi } from '@/api/users/login'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/modules/user'
import { useEffect } from 'react'

const LayoutWrapper = () => {
  const { watermark, watermarkContent } = layoutSetting()
  const token = useUserStore(state => state.token)
  const navigate = useNavigate()
  const setToken = useUserStore(state => state.updateToken)
  const setUserInfo = useUserStore(state => state.updateUserInfo)
  const { data, error } = useRequest(getUserInfoApi, {
    defaultParams: [{ token }]
  })

  useEffect(() => {
    if (error) {
      // 删除token
      setToken('')
      navigate('/login')
    }

    if (data) {
      setUserInfo(data)
    }
  }, [error, data])

  if (watermark) {
    return (
      <Watermark content={watermarkContent}>
        <MyLayout />
      </Watermark>
    )
  }

  return <MyLayout />
}

export default LayoutWrapper
