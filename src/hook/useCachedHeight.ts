import { useState, useLayoutEffect } from 'react'

function useCachedHeight(ref: React.RefObject<HTMLDivElement>) {
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height)
      }
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return height
}
export default useCachedHeight
