import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
      localStorage.theme = 'light'
    }
  }, [])

  return isDarkMode
}
