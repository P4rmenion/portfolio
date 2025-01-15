import css from './Menu.module.scss'
import { forwardRef } from 'react'

const Menu = forwardRef<HTMLDivElement, { visible: boolean; sideline: boolean }>(
    ({ visible = true, sideline = true }, ref) => {
        return (
            <div
                ref={ref}
                className={`${css.menu} ${css.fade_in} ${visible && css.visible} ${
                    sideline && css.side_line
                }`}
            >
                <a href="#experience">
                    <span>Experience</span>
                </a>
                <a href="#education">
                    <span>Education</span>
                </a>
                <a href="#volunteering">
                    <span>Volunteering</span>
                </a>
                <a href="#hobbies">
                    <span>Hobbies</span>
                </a>
            </div>
        )
    },
)

Menu.displayName = 'Menu'

export default Menu
