import css from './Header.module.scss'

import { useEffect, useRef, type ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
    const header = useRef<HTMLDivElement>(null)

    // Keep track of scroll value.
    const scrollY = useRef<number>(0)

    // Add scroll listener to hide/show the header.
    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (header.current)
                header.current.style.transform =
                    window.scrollY > scrollY.current && window.scrollY > 20
                        ? `translateY(-100%)`
                        : `translateY(0)`

            console.log(window.scrollY, scrollY.current)
            scrollY.current = window.scrollY
        })
    }, [])

    return (
        <header ref={header} className={css.header}>
            {children}
        </header>
    )
}

export default Header
