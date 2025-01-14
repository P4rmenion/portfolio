import css from './Menu.module.scss'
import { forwardRef } from 'react'

const Menu = forwardRef<HTMLDivElement, { visible: boolean; sideline: boolean }>((props, ref) => {
    return (
        <div
            ref={ref}
            className={`${css.menu} ${css.fade_in} ${props.visible && css.visible} ${
                props.sideline && css.side_line
            }`}
        >
            <a href="#">
                <span>Experience</span>
            </a>
            <a href="#">
                <span>Education</span>
            </a>
            <a href="#">
                <span>Volunteering</span>
            </a>
            <a href="#">
                <span>Hobbies</span>
            </a>
        </div>
    )
})

Menu.displayName = 'Menu'

export default Menu
