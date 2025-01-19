import { useEffect, useState } from 'react'

export const useBreakpoints = () => {
    const [device, setDevice] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    })

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })

    const handleWindowResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        handleWindowResize()
        window.addEventListener('resize', handleWindowResize)

        setDevice({
            isMobile: windowSize.width < 770,
            isTablet: windowSize.width >= 770 && windowSize.width < 1100,
            isDesktop: windowSize.width >= 1100,
        })
    }, [windowSize.width])

    return device
}
