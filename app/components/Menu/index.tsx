import css from './Menu.module.scss'
import { forwardRef, useState } from 'react'

const Menu = forwardRef<
    HTMLDivElement,
    { fade_in: boolean; showNavigation: (show: boolean) => void }
>(({ fade_in = true, showNavigation }, ref) => {
    const [hideLinks, setHideLinks] = useState(true)

    return (
        <div
            ref={ref}
            className={`${css.menu} ${css.invisible} ${fade_in && css.fade_in} ${
                hideLinks && css.hide_links
            }`}
            onMouseEnter={() => setHideLinks(false)}
            onMouseLeave={() => setHideLinks(true)}
        >
            <span className={css.menu_title}>Navigate</span>
            <a onTouchEnd={() => setTimeout(() => showNavigation(false), 750)} href="#experience">
                <span>Experience</span>
            </a>
            <a onTouchEnd={() => setTimeout(() => showNavigation(false), 750)} href="#education">
                <span>Education</span>
            </a>
            <a onTouchEnd={() => setTimeout(() => showNavigation(false), 750)} href="#volunteering">
                <span>Volunteering</span>
            </a>
            <div className={css.menu_handle}>
                <span>Navigate</span>
            </div>
        </div>
    )
})

Menu.displayName = 'Menu'

export default Menu
