'use client'

import { useEffect, useRef, useState } from 'react'

import Splash from '@/components/Splash'
import Menu from '@/components/Menu'
import CV from '@/components/CV'

import css from './page.module.scss'

export default function Home() {
    const [showSplashScreen, setShowSplashScreen] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showMenuSideline, setShowMenuSideline] = useState(false)
    const [showSidebarHandle, setShowSidebarHandle] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

    const menuBar = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const lastAccess = localStorage.getItem('lastVisit')
            ? JSON.parse(localStorage.getItem('lastVisit')!)
            : null
        const fifteenMinutes = 1000 * 60 * 15 * 0.1

        // Show splash screen if the last visit was more than 15 minutes ago
        if (!lastAccess || new Date().getTime() - lastAccess.timestamp > fifteenMinutes) {
            setShowSplashScreen(true)
            setTimeout(() => {
                setShowSplashScreen(false)
            }, 11500)
            setTimeout(() => {
                setShowMenu(true)
            }, 12500)
            setTimeout(() => {
                setShowMenuSideline(true)
            }, 13750)
            setTimeout(() => {
                setShowSidebarHandle(true)
            }, 15000)
        } else {
            setShowMenu(true)
            setShowMenuSideline(true)
            setShowSidebarHandle(true)
        }

        // Save the visit
        const lastVisit = { timestamp: new Date().getTime() }
        localStorage.setItem('lastVisit', JSON.stringify(lastVisit))
    }, [])

    return (
        (showSplashScreen && <Splash />) || (
            <div className={css.landing}>
                <div
                    className={`${css.sidebar} ${!showSidebar && css.hidden}`}
                    onMouseOver={() => setShowSidebar(true)}
                    onMouseLeave={() => setShowSidebar(false)}
                >
                    <CV />
                    <div
                        className={`${css.sidebar_handle} ${css.fade_in} ${
                            showSidebarHandle && css.visible
                        }`}
                    >
                        <span>INFORMATION</span>
                    </div>
                </div>
                <main className={css.main}>
                    <section className={css.work_experience}>
                        <h2>Work Experience</h2>
                    </section>
                    <section className={css.education}>
                        <h2>Education</h2>
                    </section>
                    <section className={css.volunteering}>
                        <h2>Volunteering</h2>
                    </section>
                    <section className={css.hobbies}>
                        <h2>Hobbies</h2>
                    </section>
                    <section className={css.work_experience}>
                        <h2>Work Experience</h2>
                    </section>
                    <section className={css.education}>
                        <h2>Education</h2>
                    </section>
                    <section className={css.volunteering}>
                        <h2>Volunteering</h2>
                    </section>
                    <section className={css.hobbies}>
                        <h2>Hobbies</h2>
                    </section>
                </main>
                <div className={css.navigation}>
                    <Menu ref={menuBar} visible={showMenu} sideline={showMenuSideline} />
                </div>
            </div>
        )
    )
}
