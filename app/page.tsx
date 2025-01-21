'use client'

import { useEffect, useState, useRef } from 'react'

import Splash from '@/components/Splash'
import Menu from '@/components/Menu'
import CV from '@/components/CV'

import Image from 'next/image'
import Link from 'next/link'

import { josefin_sans } from './fonts'
import css from './page.module.scss'

export default function Home() {
    const [showSplashScreen, setShowSplashScreen] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showSidebarHandle, setShowSidebarHandle] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [showNavigation, setShowNavigation] = useState(true)
    const [showMain, setShowMain] = useState(false)

    // Add refs for the sidebar and navigation
    const sidebarRef = useRef<HTMLDivElement>(null)
    const navigationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setShowNavigation(window.innerWidth > 1024)
    }, [])

    // Animate components loading.
    useEffect(() => {
        // Check if the last visit was more than 15 minutes ago
        const lastAccess = localStorage.getItem('lastVisit')
            ? JSON.parse(localStorage.getItem('lastVisit')!)
            : null
        const fifteenMinutes = 1000 * 60 * 15 * 0.001

        // Show splash screen if the last visit was more than 15 minutes ago
        if (!lastAccess || new Date().getTime() - lastAccess.timestamp > fifteenMinutes) {
            setShowSplashScreen(true)
            setTimeout(() => {
                setShowSplashScreen(false)
            }, 3000)

            if (window.innerWidth >= 1100) {
                setTimeout(() => {
                    setShowMenu(true)
                    setShowSidebarHandle(true)
                }, 4000)
                setTimeout(() => {
                    setShowMain(true)
                }, 5750)
            } else {
                setTimeout(() => {
                    setShowMenu(true)
                    setShowSidebarHandle(true)
                    setShowMain(true)
                }, 4000)
            }
        } else {
            setShowMenu(true)
            setShowSidebarHandle(true)
            setShowMain(true)
        }

        // Save the visit
        const lastVisit = { timestamp: new Date().getTime() }
        localStorage.setItem('lastVisit', JSON.stringify(lastVisit))
    }, [])

    // Add click outside effect
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (window.innerWidth <= 1024) {
                if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node))
                    setShowSidebar(false)

                if (navigationRef.current && !navigationRef.current.contains(event.target as Node))
                    setShowNavigation(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        (showSplashScreen && <Splash />) || (
            <div className={css.landing}>
                <button
                    className={`${css.sidebar_open_button} ${
                        showSidebar ? css.hidden : css.fade_in
                    }`}
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <Image
                        src="/icons/general/info.svg"
                        alt="Open Info Icon"
                        width={50}
                        height={50}
                    />
                </button>

                <div
                    ref={sidebarRef}
                    className={`${css.sidebar} ${!showSidebar && css.hidden}`}
                    onMouseOver={() => setShowSidebar(true)}
                    onMouseLeave={() => setShowSidebar(false)}
                >
                    <CV />
                    <div
                        className={`${css.sidebar_handle} ${css.invisible} ${
                            showSidebarHandle && css.fade_in
                        }`}
                    >
                        <span>INFORMATION</span>
                    </div>
                    <button
                        className={css.sidebar_close_button}
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <Image
                            src="/icons/general/close.svg"
                            alt="Close Button Icon"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
                <main
                    className={`${css.main} ${css.invisible} ${showMain && css.fade_in} ${
                        showMain && showSidebar && css.blur
                    }`}
                >
                    <section id="about" className={css.experience}>
                        <h2 className={css.section_title}>About</h2>
                    </section>
                    <section id="experience" className={css.experience}>
                        <h2 className={css.section_title}>Experience</h2>
                        <div className={`${css.entry} ${josefin_sans.className}`}>
                            <div className={css.entry_header}>
                                <div className={css.employer}>
                                    <Link href="https://www.deloitte.com" target="_blank">
                                        <Image
                                            src="/icons/companies/deloitte.svg"
                                            alt="Deloitte Logo"
                                            width={140}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                                <div className={css.dash}></div>
                                <span className={css.job_title}>Frontend Engineer</span>
                            </div>

                            <div className={css.details}>
                                <div className={css.time_period}>
                                    <Image
                                        src="/icons/general/calendar.svg"
                                        alt="Calendar Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>June 2022 - Today</span>
                                </div>

                                <div className={css.location}>
                                    <Image
                                        src="/icons/general/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Thessaloniki, Greece</span>
                                </div>
                            </div>

                            <div className={css.description}>
                                <ul>
                                    <li>
                                        Developed complete web UIs for internal activities (Deloitte
                                        Digital) and external clients.
                                    </li>
                                    <li>
                                        Built web pages in NextJS, integrated with client&apos;s
                                        mobile application.
                                    </li>
                                    <li>
                                        Implemented services within NextJS server components to
                                        boost security and performance.
                                    </li>
                                    <li>
                                        Collaborated within international teams to build atop
                                        existing client infrastructure.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="education" className={css.education}>
                        <h2 className={css.section_title}>Education</h2>
                        <div className={`${css.entry} ${josefin_sans.className}`}>
                            <div className={css.entry_header}>
                                <div className={css.employer}>
                                    <Link href="https://www.auth.gr/en/" target="_blank">
                                        <Image
                                            src="/icons/universities/auth.svg"
                                            alt="Aristotle University Logo"
                                            width={90}
                                            height={90}
                                        />
                                    </Link>
                                </div>
                                <div className={css.dash}></div>
                                <span className={css.job_title}>BSc Computer Science</span>
                            </div>

                            <div className={css.details}>
                                <div className={css.time_period}>
                                    <Image
                                        src="/icons/general/calendar.svg"
                                        alt="Calendar Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Oct 2017 - Nov 2023</span>
                                </div>

                                <div className={css.location}>
                                    <Image
                                        src="/icons/general/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Thessaloniki, Greece</span>
                                </div>
                            </div>

                            <div className={css.description}>
                                <ul>
                                    <li>
                                        Studied fundamentals of computer science across most
                                        disciplines.
                                    </li>
                                    <li>
                                        Majored in <strong>Artificial Intelligence</strong>, as well
                                        as <strong>Web & Data Management</strong>.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${css.entry} ${josefin_sans.className}`}>
                            <div className={css.entry_header}>
                                <div className={css.employer}>
                                    <Link
                                        href="https://www.mdu.se/en/malardalen-university"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/icons/universities/mdu.svg"
                                            alt="Malardalens University Logo"
                                            width={100}
                                            height={80}
                                        />
                                    </Link>
                                </div>
                                <div className={css.dash}></div>
                                <span className={css.job_title}>Erasmus+ Exchange Semester</span>
                            </div>

                            <div className={css.details}>
                                <div className={css.time_period}>
                                    <Image
                                        src="/icons/general/calendar.svg"
                                        alt="Calendar Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Aug 2021 - Jan 2022</span>
                                </div>

                                <div className={css.location}>
                                    <Image
                                        src="/icons/general/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Västerås, Sweden</span>
                                </div>
                            </div>

                            <div className={css.description}>
                                <ul>
                                    <li>
                                        Attended courses with emphasis in web and mobile
                                        development.
                                    </li>
                                    <li>
                                        Collaborated in team development projects in a multicultural
                                        environment.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="volunteering" className={css.volunteering}>
                        <h2 className={css.section_title}>Volunteering</h2>
                        <div className={`${css.entry} ${josefin_sans.className}`}>
                            <div className={css.entry_header}>
                                <div className={css.employer}>
                                    <Link href="https://pplg.org" target="_blank">
                                        <Image
                                            src="/icons/organisations/pplg.png"
                                            alt="PPLG Logo"
                                            width={130}
                                            height={54}
                                        />
                                    </Link>
                                </div>
                                <div className={css.dash}></div>
                                <span className={css.job_title}>Tech Support</span>
                            </div>

                            <div className={css.details}>
                                <div className={css.time_period}>
                                    <Image
                                        src="/icons/general/calendar.svg"
                                        alt="Calendar Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Sep 2021</span>
                                </div>

                                <div className={css.location}>
                                    <Image
                                        src="/icons/general/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Remote</span>
                                </div>
                            </div>

                            <div className={css.description}>
                                <ul>
                                    <li>
                                        Managed the technical side of large scale zoom sessions.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${css.entry} ${josefin_sans.className}`}>
                            <div className={css.entry_header}>
                                <div className={css.employer}>
                                    <Link href="https://arsis.gr" target="_blank">
                                        <Image
                                            src="/icons/organisations/arsis.svg"
                                            alt="Arsis Logo"
                                            width={130}
                                            height={90}
                                        />
                                    </Link>
                                </div>
                                <div className={css.dash}></div>
                                <span className={css.job_title}>Computers Class Teacher</span>
                            </div>

                            <div className={css.details}>
                                <div className={css.time_period}>
                                    <Image
                                        src="/icons/general/calendar.svg"
                                        alt="Calendar Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Oct 2019 - Jan 2020</span>
                                </div>

                                <div className={css.location}>
                                    <Image
                                        src="/icons/general/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Thessaloniki, Greece</span>
                                </div>
                            </div>

                            <div className={css.description}>
                                <ul>
                                    <li>
                                        Taught basic computer tools and fundamental programming
                                        principles to children refugees.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${css.entry} ${josefin_sans.className}`}>
                            <div className={css.entry_header}>
                                <div className={css.employer}>
                                    <Link href="https://aiesec.org" target="_blank">
                                        <Image
                                            src="/icons/organisations/aiesec.png"
                                            alt="AIESEC Logo"
                                            width={290}
                                            height={60}
                                        />
                                    </Link>
                                </div>
                                <div className={css.dash}></div>
                                <span className={css.job_title}>OGV Manager</span>
                            </div>

                            <div className={css.details}>
                                <div className={css.time_period}>
                                    <Image
                                        src="/icons/general/calendar.svg"
                                        alt="Calendar Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Nov 2018 - Oct 2019</span>
                                </div>

                                <div className={css.location}>
                                    <Image
                                        src="/icons/general/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <span>Thessaloniki, Greece</span>
                                </div>
                            </div>

                            <div className={css.description}>
                                <ul>
                                    <li>
                                        Demonstrated the organization&apos;s volunteering programs
                                        to university students.
                                    </li>
                                    <li>Monitored their subsequent programs abroad.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
                <div
                    ref={navigationRef}
                    className={`${css.navigation} ${!showNavigation && css.hidden}`}
                >
                    <Menu fade_in={showMenu} showNavigation={setShowNavigation} />
                    <button
                        className={css.navigation_close_button}
                        onClick={() => setShowNavigation(!showNavigation)}
                    >
                        <Image
                            src="/icons/general/close.svg"
                            alt="Close Button Icon"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
                <button
                    className={`${css.navigation_open_button} ${
                        showNavigation ? css.hidden : css.fade_in
                    }`}
                    onClick={() => setShowNavigation(true)}
                >
                    <Image src="/icons/general/map.svg" alt="Map Icon" width={50} height={50} />
                </button>
            </div>
        )
    )
}
