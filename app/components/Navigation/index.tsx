import { useRef, useState } from 'react'

import Image from 'next/image'
import css from './Navigation.module.scss'

const Navigation = () => {
    const [openNavigation, setOpenNavigation] = useState(false)
    const nav = useRef<HTMLDivElement>(null)

    const hideNavigation = () => {
        setOpenNavigation(false)
    }

    const showNavigation = () => {
        setOpenNavigation(true)
    }

    return (
        <div className={`${css.navigation} ${openNavigation && css.navigation_open}`} ref={nav}>
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

            <div onMouseOver={showNavigation} onMouseLeave={hideNavigation} className={css.navigation_handle}>
                <span>Navigate</span>
            </div>
        </div>
    )
}

Navigation.displayName = 'Navigation'

export default Navigation
