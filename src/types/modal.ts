import { IAction } from '@/constant/editType'
import { MutableRefObject } from 'react'

export interface IModalProp<T> {
  mRef: MutableRefObject<{ open: (type: IAction, data: T) => void } | undefined>
  update: () => void
}

export interface IDetailProp {
  mRef: MutableRefObject<{ open: (id: string) => void } | undefined>
}
