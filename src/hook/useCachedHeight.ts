import { useState, useLayoutEffect } from 'react'

/**
 * 使用缓存的高度 - 该函数通过ResizeObserver观察元素的尺寸变化，并将变化后的高度存储在状态中。
 * @param ref React的RefObject，指向一个HTMLDivElement元素，这个元素的高度将被观察和缓存。
 * @returns 返回当前缓存的高度值。
 */
function useCachedHeight(ref: React.RefObject<HTMLDivElement>) {
  // 初始化高度状态为0
  const [height, setHeight] = useState(0)

  // 使用useLayoutEffect来处理布局后的效果，避免在渲染过程中触发过多重渲染
  useLayoutEffect(() => {
    // 如果ref当前不存在，则不执行任何操作
    if (!ref.current) {
      return
    }
    // 创建一个新的ResizeObserver来观察元素的尺寸变化
    const observer = new ResizeObserver(entries => {
      // 遍历所有观察到的条目，并更新状态中的高度
      for (const entry of entries) {
        setHeight(entry.contentRect.height)
      }
    })

    // 开始观察ref.current元素的尺寸变化
    observer.observe(ref.current)

    // 清理函数，组件卸载时调用，断开ResizeObserver的连接
    return () => observer.disconnect()
  }, [ref]) // 依赖项列表，确保当ref变化时，效果重新执行

  return height // 返回缓存的高度值
}
export default useCachedHeight
