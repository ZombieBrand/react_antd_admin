import React from 'react'
import * as Icons from '@ant-design/icons'

export default function CreateIcon(name?: string) {
  if (!name) return <></>
  const customerIcons: { [key: string]: any } = Icons
  const icon = customerIcons[name]
  if (!icon) return <></>
  return React.createElement(icon)
}
