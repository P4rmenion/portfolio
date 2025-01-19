import css from './Menu.module.scss'
import { forwardRef } from 'react'

const Menu = forwardRef<
    HTMLDivElement,
    { fade_in: boolean; sideline: boolean; showNavigation: (show: boolean) => void }
>(({ fade_in = true, sideline = true, showNavigation }, ref) => {
    return (
        <div
            ref={ref}
            className={`${css.menu} ${css.invisible} ${fade_in && css.fade_in} ${
                sideline && css.side_line
            }`}
        >
            <span className={css.menu_title}>Navigate to</span>
            <a onTouchEnd={() => setTimeout(() => showNavigation(false), 500)} href="#experience">
                <span>Experience</span>
            </a>
            <a onTouchEnd={() => setTimeout(() => showNavigation(false), 500)} href="#education">
                <span>Education</span>
            </a>
            <a onTouchEnd={() => setTimeout(() => showNavigation(false), 500)} href="#volunteering">
                <span>Volunteering</span>
            </a>
        </div>
    )
})

Menu.displayName = 'Menu'

export default Menu
