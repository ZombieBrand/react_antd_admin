import { memo } from 'react'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import layoutSetting from '@/config/layout'

type LogoProps = {
  collapsed: boolean
}

const Logo = memo((props: LogoProps) => {
  const { title } = layoutSetting()
  const { collapsed } = props
  const navigate = useNavigate()
  const handleClickLogo = () => {
    navigate('/')
  }
  return (
    <div className='flex h-16 cursor-pointer items-center justify-evenly p-1 text-slate-100' onClick={handleClickLogo}>
      <Image width={50} preview={false} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
      {!collapsed && <span className='align-middle text-2xl'>{title}</span>}
    </div>
  )
})

export default Logo
