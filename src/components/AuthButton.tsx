import type { IAuthData } from '@/types/menu'
import { useUserStore } from '@/store/modules/user'
import { useRouteLoaderData } from 'react-router-dom'
import { Button, ButtonProps } from 'antd'

type Props = {
  auth?: string
  children?: React.ReactNode
} & ButtonProps

export default function AuthButton(props: Props) {
  const data = useRouteLoaderData('layout') as IAuthData
  const role = useUserStore(state => state.userInfo.role)
  if (!props.auth) return <Button {...props}>{props.children}</Button>
  if (data.buttonList.includes(props.auth) || role === 1) {
    return <Button {...props}>{props.children}</Button>
  }
}
