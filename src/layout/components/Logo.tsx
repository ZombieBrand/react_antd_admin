import { memo } from 'react'
import { Image } from 'antd'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNavigate } from 'react-router-dom'
type LogoProps = {
  collapsed: boolean
}

const Logo = memo((props: LogoProps) => {
  const { collapsed } = props
  const [parent] = useAutoAnimate()
  const navigate = useNavigate()
  const handleClickLogo = () => {
    navigate('/home')
  }
  return (
    <div className='flex h-16 items-center justify-evenly p-1 text-slate-100' ref={parent} onClick={handleClickLogo}>
      <Image width={60} preview={false} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
      {!collapsed && <span className='align-middle text-2xl'>React Admin</span>}
    </div>
  )
})

export default Logo
