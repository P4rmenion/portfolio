import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useDarkMode } from '@/scripts/commons'

import css from './Navigation.module.scss'

export const Navigation = ({
    open,
    setOpenNavigation,
}: {
    open: boolean
    setOpenNavigation: (open: boolean) => void
}) => {
    const darkTheme = useDarkMode()

    const hideNavigation = () => {
        setOpenNavigation(false)
    }

    const showNavigation = () => {
        setOpenNavigation(true)
    }

    const nav = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement

            if (nav.current && !nav.current.contains(target) && target.id !== 'navigation-button') {
                setOpenNavigation(false)
            }
        })
    }, [nav, setOpenNavigation])

    return (
        <div className={`${css.navigation} ${open && css.navigation_open}`} ref={nav}>
            <button className={css.navigation_close_button} onClick={hideNavigation}>
                <Image
                    src={darkTheme ? '/icons/general/close-black.svg' : '/icons/general/close.svg'}
                    alt="Close Icon"
                    width={30}
                    height={30}
                />
            </button>

            <div className={css.navigation_content}>
                <span className={css.navigation_title}>Navigate</span>
                <a onTouchEnd={() => setTimeout(hideNavigation, 600)} href="#experience">
                    <span>Experience</span>
                </a>
                <a onTouchEnd={() => setTimeout(hideNavigation, 600)} href="#education">
                    <span>Education</span>
                </a>
                <a onTouchEnd={() => setTimeout(hideNavigation, 600)} href="#volunteering">
                    <span>Volunteering</span>
                </a>
            </div>

            <div
                onMouseOver={showNavigation}
                onMouseLeave={hideNavigation}
                className={css.navigation_handle}
            >
                <span>Navigate</span>
            </div>
        </div>
    )
}

export const NavigationButton = ({
    setOpenNavigation,
}: {
    setOpenNavigation: (open: boolean) => void
}) => {
    const darkTheme = useDarkMode()

    return (
        <button className={css.navigation_open_button} onClick={() => setOpenNavigation(true)}>
            <Image
                id="navigation-button"
                src={darkTheme ? '/icons/general/map.svg' : '/icons/general/map-black.svg'}
                alt="Map Icon"
                width={35}
                height={35}
            />
        </button>
    )
}
