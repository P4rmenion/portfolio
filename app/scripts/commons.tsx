import { useEffect, useState } from 'react'

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
        if (prefersDarkTheme.matches) setIsDark(true)

        // This callback will fire if the perferred color scheme changes without a reload
        prefersDarkTheme.addEventListener('change', (event) => setIsDark(event.matches))
    }, [])

    return isDark
}
