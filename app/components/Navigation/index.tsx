import { useEffect, useRef } from 'react'
import Image from 'next/image'

import css from './Navigation.module.scss'

export const Navigation = ({
    open,
    setOpenNavigation,
}: {
    open: boolean
    setOpenNavigation: (open: boolean) => void
}) => {
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

            if (
                nav.current &&
                !nav.current.contains(target) &&
                target.id !== 'navigation-button'
            ) {
                setOpenNavigation(false)
            }
        })
    }, [nav, setOpenNavigation])

    return (
        <div className={`${css.navigation} ${open && css.navigation_open}`} ref={nav}>
            <button className={css.navigation_close_button} onClick={hideNavigation}>
                <Image src={'/icons/general/close.svg'} alt="Close Icon" width={30} height={30} />
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
    return (
        <button className={css.navigation_open_button} onClick={() => setOpenNavigation(true)}>
            <Image
                id="navigation-button"
                src={'/icons/general/map.svg'}
                alt="Map Icon"
                width={45}
                height={45}
            />
        </button>
    )
}
