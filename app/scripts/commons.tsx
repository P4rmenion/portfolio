import { useEffect, useState } from 'react'

const desktop = '(min-width: 1024px)'
const tablet = '(min-width: 768px)'

export const useBreakpoints = () => {
    const [device, setDevice] = useState({
        isTablet: false,
        isDesktop: false,
    })

    useEffect(() => {
        setDevice({
            isTablet: window.matchMedia(tablet).matches,
            isDesktop: window.matchMedia(desktop).matches,
        })
    }, [])

    return device
}
