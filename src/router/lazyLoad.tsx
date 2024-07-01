import { Spin } from 'antd'
import React from 'react'
import { Suspense } from 'react'

/**
 * 使用React的Suspense和Lazy特性来延迟加载组件。
 * @param Component 一个React的LazyExoticComponent类型，表示一个被延迟加载的组件。
 * @returns 返回一个React节点，包含在Suspense组件中，用于延迟加载指定的组件。
 */
const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>): React.ReactNode => {
  return (
    <Suspense fallback={<Spin fullscreen />}>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
