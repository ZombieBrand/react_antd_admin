import { useState, useEffect } from 'react'

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        setIsDarkMode(mediaQuery.matches)

        const handleChange = () => setIsDarkMode(mediaQuery.matches)
        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    return isDarkMode
}
