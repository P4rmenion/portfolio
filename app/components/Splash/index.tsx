import { useEffect, useRef } from 'react'
import css from './Splash.module.scss'

const Splash = () => {
    const splashTextContainer = useRef<HTMLDivElement>(null)

    // References to different text elements
    const textOne = useRef<HTMLElement>(null)
    const textTwo = useRef<HTMLElement>(null)
    const textThree = useRef<HTMLElement>(null)
    const textFour = useRef<HTMLElement>(null)
    const textFive = useRef<HTMLElement>(null)

    // Gradually display the text elements
    useEffect(() => {
        setTimeout(() => {
            textOne?.current?.classList.add(css.fade_in)
        }, 1000)
        setTimeout(() => {
            textTwo?.current?.classList.add(css.fade_in)
        }, 2500)
        setTimeout(() => {
            textThree?.current?.classList.add(css.fade_in)
        }, 4500)
        setTimeout(() => {
            textFour?.current?.classList.add(css.fade_in)
        }, 6500)
        setTimeout(() => {
            splashTextContainer?.current?.classList.add(css.fade_out)
        }, 8000)
        setTimeout(() => {
            textFive?.current?.classList.add(css.fade_in)
        }, 9500)
        setTimeout(() => {
            textFive?.current?.classList.add(css.fade_out)
        }, 11000)
    }, [])

    return (
        <div className={css.splash}>
            <div ref={splashTextContainer} className={css.intro}>
                <span ref={textOne} className={`${css.statement} ${css.invisible}`}>
                    I am
                </span>
                <div className={css.info}>
                    <span ref={textTwo} className={`${css.full_name} ${css.invisible}`}>
                        Parmenion Charistos
                    </span>
                    <span ref={textThree} className={`${css.profession} ${css.invisible}`}>
                        a web developer
                        <span ref={textFour} className={`${css.exit} ${css.invisible}`}>
                            , with a soft spot for visual effects
                        </span>
                    </span>
                </div>
            </div>

            <span ref={textFive} className={`${css.welcome} ${css.invisible}`}>
                Welcome
            </span>
        </div>
    )
}

export default Splash
