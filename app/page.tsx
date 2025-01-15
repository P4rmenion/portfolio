'use client'

import { useEffect, useState } from 'react'

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
    const [showMenuSideline, setShowMenuSideline] = useState(false)
    const [showSidebarHandle, setShowSidebarHandle] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [showMain, setShowMain] = useState(false)

    useEffect(() => {
        const lastAccess = localStorage.getItem('lastVisit')
            ? JSON.parse(localStorage.getItem('lastVisit')!)
            : null
        const fifteenMinutes = 1000 * 60 * 15

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
            setTimeout(() => {
                setShowMain(true)
            }, 16500)
        } else {
            setShowMenu(true)
            setShowMenuSideline(true)
            setShowSidebarHandle(true)
            setShowMain(true)
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
                <main className={`${css.main} ${css.fade_in} ${showMain && css.visible}`}>
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
                                <div className={css.separator}></div>
                                <span className={css.job_title}>Web Developer</span>
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
                                        Developed complete web UIs for Enel Energia&apos;s latest
                                        campaigns.
                                    </li>
                                    <li>
                                        Built web pages in NextJS, integrated with the Enel Energia
                                        mobile app.
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
                                <div className={css.separator}></div>
                                <span className={css.job_title}>BSc in Computer Science</span>
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
                                        Developed complete web UIs for Enel Energia&apos;s latest
                                        campaigns.
                                    </li>
                                    <li>
                                        Built web pages in NextJS, integrated with the Enel Energia
                                        mobile app.
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
                                <div className={css.separator}></div>
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
                                        Developed complete web UIs for Enel Energia&apos;s latest
                                        campaigns.
                                    </li>
                                    <li>
                                        Built web pages in NextJS, integrated with the Enel Energia
                                        mobile app.
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
                                <div className={css.separator}></div>
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
                                        Developed complete web UIs for Enel Energia&apos;s latest
                                        campaigns.
                                    </li>
                                    <li>
                                        Built web pages in NextJS, integrated with the Enel Energia
                                        mobile app.
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
                                <div className={css.separator}></div>
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
                                        Developed complete web UIs for Enel Energia&apos;s latest
                                        campaigns.
                                    </li>
                                    <li>
                                        Built web pages in NextJS, integrated with the Enel Energia
                                        mobile app.
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
                                <div className={css.separator}></div>
                                <span className={css.job_title}>
                                    Outgoing Global Volunteer (OGV) Manager
                                </span>
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
                                        Developed complete web UIs for Enel Energia&apos;s latest
                                        campaigns.
                                    </li>
                                    <li>
                                        Built web pages in NextJS, integrated with the Enel Energia
                                        mobile app.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="hobbies" className={css.hobbies}>
                        <h2 className={css.section_title}>Hobbies</h2>
                        <div className={css.entry}>
                            <span className={css.time_period}>2022 - Present</span>
                        </div>
                    </section>
                </main>
                <div className={css.navigation}>
                    <Menu visible={showMenu} sideline={showMenuSideline} />
                </div>
            </div>
        )
    )
}
