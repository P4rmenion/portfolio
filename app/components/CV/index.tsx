import Image from 'next/image'
import Link from 'next/link'
import { useDarkMode } from '@/scripts/commons'

import { josefin_sans } from '@/fonts'
import css from './CV.module.scss'

const CV = () => {
    const darkTheme = useDarkMode()

    return (
        <main className={css.cv}>
            <section id="experience" className={css.experience}>
                <h2 className={css.section_title}>
                    <span>Experience</span>
                </h2>
                <div className={`${css.entry} ${josefin_sans.className}`}>
                    <div className={css.entry_header}>
                        <div className={css.employer}>
                            <Link
                                className={css.company_logo}
                                href="https://www.deloitte.com"
                                target="_blank"
                            >
                                <span className={css.company_name}>Deloitte Digital</span>
                            </Link>
                        </div>
                        <span className={css.job_title}>Frontend Engineer</span>
                    </div>

                    <div className={css.details}>
                        <div className={css.time_period}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/calendar.svg'
                                        : '/icons/general/calendar-black.svg'
                                }
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                            <span>June 2022 - Today</span>
                        </div>

                        <div className={css.location}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/location.svg'
                                        : '/icons/general/location-black.svg'
                                }
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
                                Developed complete web UIs for internal activities and external
                                clients (<strong>React, TailwindCSS</strong>).
                            </li>
                            <li>
                                Integrated REST APIs to provide users analytics in real-time.
                                Included localization for several countries (
                                <strong>React, i18n</strong>).
                            </li>
                            <li>
                                Programmed custom solution for location suggestions based on the
                                users&apos; history, location and live input autocompletion by
                                reusing existing information to reduce API calls and improve
                                performance (<strong>React, Google Maps Javascript API</strong>).
                            </li>
                            <li>
                                Performed code reviews and provided constructive feedback. Monitored
                                and managed PR requests for project scopes.
                            </li>
                            <li>
                                Built and integrated web interfaces with client&apos;s mobile
                                application (<strong>NextJS Server Components, SCSS</strong>).
                            </li>
                            <li>
                                Built lightweight animations to improve user experience, by
                                strategically targetting interactive elements (
                                <strong>JavaScript, GSAP, ImageMagick</strong>).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="education" className={css.education}>
                <h2 className={css.section_title}>
                    <span>Education</span>
                </h2>
                <div className={`${css.entry} ${josefin_sans.className}`}>
                    <div className={css.entry_header}>
                        <div className={css.employer}>
                            <Link
                                className={css.company_logo}
                                href="https://www.auth.gr/en/"
                                target="_blank"
                            >
                                <span className={css.company_name}>Aristotle University</span>
                            </Link>
                        </div>
                        <span className={css.job_title}>BSc Computer Science</span>
                    </div>

                    <div className={css.details}>
                        <div className={css.time_period}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/calendar.svg'
                                        : '/icons/general/calendar-black.svg'
                                }
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                            <span>Oct 2017 - Nov 2023</span>
                        </div>

                        <div className={css.location}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/location.svg'
                                        : '/icons/general/location-black.svg'
                                }
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
                                Studied fundamentals of computer science across multiple
                                disciplines.
                            </li>
                            <li>
                                Majored in <strong>Artificial Intelligence</strong>, as well as{' '}
                                <strong>Web & Data Management</strong>.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${css.entry} ${josefin_sans.className}`}>
                    <div className={css.entry_header}>
                        <div className={css.employer}>
                            <Link
                                className={css.company_logo}
                                href="https://www.mdu.se/en/malardalen-university"
                                target="_blank"
                            >
                                <span className={css.company_name}>Mälardalens University</span>
                            </Link>
                        </div>
                        <span className={css.job_title}>Erasmus+ Exchange Semester</span>
                    </div>

                    <div className={css.details}>
                        <div className={css.time_period}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/calendar.svg'
                                        : '/icons/general/calendar-black.svg'
                                }
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                            <span>Aug 2021 - Jan 2022</span>
                        </div>

                        <div className={css.location}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/location.svg'
                                        : '/icons/general/location-black.svg'
                                }
                                alt="Location Icon"
                                width={20}
                                height={20}
                            />
                            <span>Västerås, Sweden</span>
                        </div>
                    </div>

                    <div className={css.description}>
                        <ul>
                            <li>Attended courses with emphasis in web and mobile development.</li>
                            <li>
                                Collaborated in team development projects in a multicultural
                                environment.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="volunteering" className={css.volunteering}>
                <h2 className={css.section_title}>
                    <span>Volunteering</span>
                </h2>
                <div className={`${css.entry} ${josefin_sans.className}`}>
                    <div className={css.entry_header}>
                        <div className={css.employer}>
                            <Link
                                className={css.company_logo}
                                href="https://pplg.org"
                                target="_blank"
                            >
                                <span className={css.company_name}>Play Perform Learn Grow</span>
                            </Link>
                        </div>
                        <span className={css.job_title}>Tech Support</span>
                    </div>

                    <div className={css.details}>
                        <div className={css.time_period}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/calendar.svg'
                                        : '/icons/general/calendar-black.svg'
                                }
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                            <span>Sep 2021</span>
                        </div>

                        <div className={css.location}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/location.svg'
                                        : '/icons/general/location-black.svg'
                                }
                                alt="Location Icon"
                                width={20}
                                height={20}
                            />
                            <span>Remote</span>
                        </div>
                    </div>

                    <div className={css.description}>
                        <ul>
                            <li>Managed the technical side of large scale zoom sessions.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${css.entry} ${josefin_sans.className}`}>
                    <div className={css.entry_header}>
                        <div className={css.employer}>
                            <Link
                                className={css.company_logo}
                                href="https://arsis.gr"
                                target="_blank"
                            >
                                <span className={css.company_name}>ARSIS</span>
                            </Link>
                        </div>
                        <span className={css.job_title}>Computers Class Teacher</span>
                    </div>

                    <div className={css.details}>
                        <div className={css.time_period}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/calendar.svg'
                                        : '/icons/general/calendar-black.svg'
                                }
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                            <span>Oct 2019 - Jan 2020</span>
                        </div>

                        <div className={css.location}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/location.svg'
                                        : '/icons/general/location-black.svg'
                                }
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
                                Taught basic computer tools and fundamental programming principles
                                to children refugees.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${css.entry} ${josefin_sans.className}`}>
                    <div className={css.entry_header}>
                        <div className={css.employer}>
                            <Link
                                className={css.company_logo}
                                href="https://aiesec.org"
                                target="_blank"
                            >
                                <span className={css.company_name}>AIESEC</span>
                            </Link>
                        </div>
                        <span className={css.job_title}>OGV Manager</span>
                    </div>

                    <div className={css.details}>
                        <div className={css.time_period}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/calendar.svg'
                                        : '/icons/general/calendar-black.svg'
                                }
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                            <span>Nov 2018 - Oct 2019</span>
                        </div>

                        <div className={css.location}>
                            <Image
                                src={
                                    darkTheme
                                        ? '/icons/general/location.svg'
                                        : '/icons/general/location-black.svg'
                                }
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
                                Demonstrated the organization&apos;s volunteering programs to
                                university students.
                            </li>
                            <li>Monitored their subsequent programs abroad.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CV
