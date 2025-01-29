'use client'

import Header from '@/components/Header'
import { ProfileSidebar, SidebarButton } from '@/components/ProfileSidebar'
import CV from '@/components/CV'
import { Navigation, NavigationButton } from '@/components/Navigation'

import css from './page.module.scss'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
    const [openNavigation, setOpenNavigation] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <div className={css.landing}>
            <Header>
                <SidebarButton setOpenSidebar={setOpenSidebar} />
                <NavigationButton setOpenNavigation={setOpenNavigation} />
            </Header>

            <ProfileSidebar open={openSidebar} setOpenSidebar={setOpenSidebar} />
            <CV />
            <Navigation open={openNavigation} setOpenNavigation={setOpenNavigation} />
        </div>
    )
}
