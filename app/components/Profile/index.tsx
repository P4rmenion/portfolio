import { useState } from 'react'

import ProfileImage from '@/components/Profile/ProfileImage'
import Image from 'next/image'
import Link from 'next/link'

import { useDarkMode } from '@/scripts/commons'

import { josefin_sans } from '@/fonts'
import css from './Profile.module.scss'

const Profile = () => {
    const darkTheme = useDarkMode()
    const [listView, setListView] = useState(false)

    return (
        <div className={css.profile}>
            <div className={css.image_container}>
                <ProfileImage />

                <div className={`${css.bio} ${josefin_sans.className}`}>
                    <q className={css.quote}>What&apos;s the best that can happen?</q>

                    <div className={css.contact}>
                        <span className={css.birthplace}>
                            Residing in <strong>Thessaloniki, Greece</strong>.
                        </span>
                        <div className={css.links}>
                            <span>Reach me</span>
                            <Link
                                href={'https://www.linkedin.com/in/parmenion-charistos'}
                                target="_blank"
                            >
                                <Image
                                    src={
                                        darkTheme
                                            ? '/icons/media/linkedin.svg'
                                            : '/icons/media/linkedin-black.svg'
                                    }
                                    width={30}
                                    height={30}
                                    alt="LinkedIn Icon"
                                />
                                <span className={css.link_text}>parmenion-charistos</span>
                            </Link>
                            <Link href={'https://github.com/P4rmenion'} target="_blank">
                                <Image
                                    src={
                                        darkTheme
                                            ? '/icons/media/github.svg'
                                            : '/icons/media/github-black.svg'
                                    }
                                    width={30}
                                    height={30}
                                    alt="Github Icon"
                                />
                                <span className={css.link_text}>P4rmenion</span>
                            </Link>
                            <Link href={'mailto:parmenion.char@gmail.com'} target="_blank">
                                <Image
                                    src={
                                        darkTheme
                                            ? '/icons/media/email.svg'
                                            : '/icons/media/email-black.svg'
                                    }
                                    width={30}
                                    height={30}
                                    alt="Email Icon"
                                />
                                <span className={css.link_text}>parmenion.char@gmail.com</span>
                            </Link>
                            <Link href={'tel:+306972742397'} target="_blank">
                                <Image
                                    src={
                                        darkTheme
                                            ? '/icons/media/phone.svg'
                                            : '/icons/media/phone-black.svg'
                                    }
                                    width={30}
                                    height={30}
                                    alt="Phone Icon"
                                />
                                <span className={css.link_text}>+306972742397</span>
                            </Link>
                        </div>
                    </div>

                    <div className={css.outro}>
                        <span>A dev is only as good as their tech</span>
                        <div className={css.tech_view}>
                            <span>{listView ? 'List' : 'Grid'}</span>
                            <button
                                className={`${css.tech_view_button} ${listView && css.active}`}
                                onClick={() => setListView(true)}
                            >
                                <Image
                                    src={
                                        darkTheme
                                            ? '/icons/general/list-view.svg'
                                            : '/icons/general/list-view-black.svg'
                                    }
                                    width={20}
                                    height={20}
                                    alt="List View Icon"
                                />
                            </button>
                            <button
                                className={`${css.tech_view_button} ${!listView && css.active}`}
                                onClick={() => setListView(false)}
                            >
                                <Image
                                    src={
                                        darkTheme
                                            ? '/icons/general/grid-view.svg'
                                            : '/icons/general/grid-view-black.svg'
                                    }
                                    width={20}
                                    height={20}
                                    alt="Grid View Icon"
                                />
                            </button>
                        </div>

                        <div className={`${css.technologies} ${listView && css.list_view}`}>
                            <Link
                                href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
                                target="_blank"
                            >
                                <Image
                                    src={'/icons/tech/javascript.svg'}
                                    width={40}
                                    height={40}
                                    alt="JavaScript Icon"
                                />
                                <span className={css.tech_name}>JavaScript</span>
                            </Link>

                            <Link href={'https://www.typescriptlang.org'} target="_blank">
                                <Image
                                    src={'/icons/tech/typescript.svg'}
                                    width={40}
                                    height={40}
                                    alt="TypeScript Icon"
                                />
                                <span className={css.tech_name}>TypeScript</span>
                            </Link>

                            <Link href={'https://react.dev'} target="_blank">
                                <Image
                                    src={'/icons/tech/react.svg'}
                                    width={40}
                                    height={40}
                                    alt="ReactJS Icon"
                                />
                                <span className={css.tech_name}>ReactJS</span>
                            </Link>

                            <Link href={'https://nextjs.org'} target="_blank">
                                <Image
                                    src={
                                        darkTheme
                                            ? '/icons/tech/next.svg'
                                            : '/icons/tech/next-black.svg'
                                    }
                                    width={35}
                                    height={35}
                                    alt="NextJS Icon"
                                />
                                <span className={css.tech_name}>NextJS</span>
                            </Link>

                            <Link href={'https://sass-lang.com'} target="_blank">
                                <Image
                                    src={'/icons/tech/sass.svg'}
                                    width={40}
                                    height={40}
                                    alt="SASS Icon"
                                />
                                <span className={css.tech_name}>SCSS</span>
                            </Link>
                            <Link href={'https://tailwindcss.com'} target="_blank">
                                <Image
                                    src={'/icons/tech/tailwind.svg'}
                                    width={40}
                                    height={40}
                                    alt="TailwindCSS Icon"
                                />
                                <span className={css.tech_name}>TailwindCSS</span>
                            </Link>

                            <Link href={'https://nodejs.org'} target="_blank">
                                <Image
                                    src={'/icons/tech/node.svg'}
                                    width={40}
                                    height={40}
                                    alt="NodeJS Icon"
                                />
                                <span className={css.tech_name}>NodeJS</span>
                            </Link>

                            <Link href={'https://www.postgresql.org'} target="_blank">
                                <Image
                                    src={'/icons/tech/postgresql.svg'}
                                    width={40}
                                    height={40}
                                    alt="PostgreSQL Icon"
                                />
                                <span className={css.tech_name}>PostgreSQL</span>
                            </Link>

                            <Link
                                href={'https://www.java.com/en/download/help/whatis_java.html'}
                                target="_blank"
                            >
                                <Image
                                    src={'/icons/tech/java.svg'}
                                    width={40}
                                    height={40}
                                    alt="Java Icon"
                                />
                                <span className={css.tech_name}>Java</span>
                            </Link>

                            <Link href={'https://www.python.org'} target="_blank">
                                <Image
                                    src={'/icons/tech/python.svg'}
                                    width={40}
                                    height={40}
                                    alt="Python Icon"
                                />
                                <span className={css.tech_name}>Python</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
