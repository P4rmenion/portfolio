'use client'

import Header from '@/components/Header'
import CV from '@/components/CV'
import Profile from '@/components/Profile'
import { Sidebar, SidebarButton } from '@/components/Sidebar'
import { Navigation, NavigationButton } from '@/components/Navigation'

import css from './page.module.scss'
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

            <Sidebar open={openSidebar} setOpenSidebar={setOpenSidebar} handleLabel="Information">
                <Profile />
            </Sidebar>

            <CV />

            <Navigation open={openNavigation} setOpenNavigation={setOpenNavigation} />
        </div>
    )
}
