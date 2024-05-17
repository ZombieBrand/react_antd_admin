import { useEffect, useState } from 'react'
import settings from '@/config/layout'
/**
 * 给Table组件设置内容显示高度,超过开启滚动
 * @param options 配置对象，包含表格的类名。
 * @param options.className 表格元素的类名,在多个表格时，需要指定自定义类名。
 * @returns 滚动条在Y轴上的偏移量。
 */
export function useTableScrollY(
  options = {
    className: '.ant-pro-table'
  }
) {
  const className = options.className
  const [y, setY] = useState(0)
  const {
    styles: { contentPadding }
  } = settings()
  useEffect(() => {
    const tableWrapperEl = document.querySelector(className)
    const parentElement = tableWrapperEl?.parentElement
    const tableHeaderEl = tableWrapperEl?.querySelector('.ant-table-header')

    if (!tableWrapperEl || !parentElement || !tableHeaderEl) {
      return
    }

    const updateY = () => {
      const tablePaginationEl = tableWrapperEl?.querySelector('.ant-table-pagination')
      const parentBottom = parentElement.getBoundingClientRect().bottom
      const tableHeaderBottom = tableHeaderEl.getBoundingClientRect().bottom
      const contentHeight = parentBottom - tableHeaderBottom
      if (tablePaginationEl) {
        const tablePaginationStyle = window.getComputedStyle(tablePaginationEl)
        const tablePaginationMarginTop = parseFloat(tablePaginationStyle.marginTop)
        const tablePaginationMarginBottom = parseFloat(tablePaginationStyle.marginBottom)
        const tablePaginationHeight = tablePaginationEl.getBoundingClientRect().height + tablePaginationMarginTop + tablePaginationMarginBottom
        setY(contentHeight - tablePaginationHeight - contentPadding)
      } else {
        setY(contentHeight - contentPadding)
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      updateY()
    })

    resizeObserver.observe(tableWrapperEl)
    resizeObserver.observe(parentElement)
    resizeObserver.observe(tableHeaderEl)

    // Initial update
    updateY()

    return () => {
      resizeObserver.disconnect()
    }
  }, [className, contentPadding])

  return y
}
