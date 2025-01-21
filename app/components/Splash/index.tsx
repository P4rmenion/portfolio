import { useEffect, useRef } from 'react'
import css from './Splash.module.scss'

const Splash = () => {
    const splashTextContainer = useRef<HTMLDivElement>(null)

    // References to text elements
    const textFive = useRef<HTMLElement>(null)

    // Gradually display the text elements
    useEffect(() => {
        setTimeout(() => {
            textFive?.current?.classList.add(css.fade_in)
        }, 1000)
        setTimeout(() => {
            textFive?.current?.classList.add(css.fade_out)
        }, 2500)
    }, [])

    return (
        <div className={css.splash}>
            <span ref={textFive} className={`${css.welcome} ${css.invisible}`}>
                Welcome
            </span>
        </div>
    )
}

export default Splash
