import { create as _create } from 'zustand'
import type { StateCreator } from 'zustand'

const storeResetFns = new Set<() => void>()

// 初始化全部状态商店
export const resetAllStores = () => {
  storeResetFns.forEach(resetFn => {
    resetFn()
  })
}

// 其他module需要使用这个create创建状态商店
export const create = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = _create(stateCreator)
    const initialState = store.getState()
    storeResetFns.add(() => {
      store.setState(initialState, true)
    })
    return store
  }
}) as typeof _create
