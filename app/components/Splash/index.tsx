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
            textOne?.current?.classList.add(css.visible)
        }, 1000)
        setTimeout(() => {
            textTwo?.current?.classList.add(css.visible)
        }, 2500)
        setTimeout(() => {
            textThree?.current?.classList.add(css.visible)
        }, 4500)
        setTimeout(() => {
            textFour?.current?.classList.add(css.visible)
        }, 6500)
        setTimeout(() => {
            splashTextContainer?.current?.classList.add(css.fade)
        }, 8000)
        setTimeout(() => {
            textFive?.current?.classList.add(css.visible)
        }, 9500)
        setTimeout(() => {
            textFive?.current?.classList.add(css.fade)
        }, 11000)
    }, [])

    return (
        <div className={css.splash}>
            <div ref={splashTextContainer} className={css.intro}>
                <span ref={textOne} className={`${css.statement} ${css.fade_in}`}>
                    I am
                </span>
                <div className={css.info}>
                    <span ref={textTwo} className={css.fade_in}>
                        <strong>Parmenion</strong> Charistos
                    </span>
                    <span ref={textThree} className={css.fade_in}>
                        a web developer
                    </span>
                </div>
                <span ref={textFour} className={`${css.exit} ${css.fade_in}`}>
                    ..or perhaps <strong>more</strong>
                </span>
            </div>

            <span ref={textFive} className={`${css.welcome} ${css.fade_in}`}>
                Welcome
            </span>
        </div>
    )
}

export default Splash
