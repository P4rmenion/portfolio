'use client'

const desktop = '(min-width: 1024px)'
const tablet = '(min-width: 768px)'

export const breakpoints = {
    isTablet: () => window.matchMedia(tablet).matches,
    isDesktop: () => window.matchMedia(desktop).matches,
}
