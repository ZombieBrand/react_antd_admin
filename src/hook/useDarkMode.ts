import { useState, useEffect } from 'react'
import { useUserStore } from '@/store/modules/user'
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const setTheme = useUserStore(state => state.updateTheme)
  const theme = useUserStore(state => state.theme)
  useEffect(() => {
    if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
      setTheme('light')
    }
  }, [theme])

  return isDarkMode
}
