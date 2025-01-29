'use client'

import Header from '@/components/Header'
import ProfileSidebar from '@/components/ProfileSidebar'
import CV from '@/components/CV'
import Navigation from '@/components/Navigation'

import css from './page.module.scss'
import Image from 'next/image'

export default function Home() {
    return (
        <div className={css.landing}>
            <Header>
                <button className={css.sidebar_open_button}>
                    <Image src={'/icons/general/info.svg'} alt="Info Icon" width={30} height={30} />
                </button>

                <button className={css.navigation_open_button}>
                    <Image src={'/icons/general/map.svg'} alt="Map Icon" width={30} height={30} />
                </button>
            </Header>
            <ProfileSidebar />
            <CV />
            <Navigation />
        </div>
    )
}
