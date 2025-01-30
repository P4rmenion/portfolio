import Profile from '@/components/Profile'

import css from './ProfileSidebar.module.scss'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useDarkMode } from '@/scripts/commons'

export const ProfileSidebar = ({
    open,
    setOpenSidebar,
}: {
    open: boolean
    setOpenSidebar: (open: boolean) => void
}) => {
    const darkTheme = useDarkMode()

    const hideSidebar = () => {
        setOpenSidebar(false)
    }

    const showSidebar = () => {
        setOpenSidebar(true)
    }

    const sidebar = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement

            if (
                sidebar.current &&
                !sidebar.current.contains(target) &&
                target.id !== 'sidebar-button'
            ) {
                setOpenSidebar(false)
            }
        })
    }, [sidebar, setOpenSidebar])

    return (
        <div
            className={`${css.sidebar} ${!open && css.hidden}`}
            onMouseOver={showSidebar}
            onMouseLeave={hideSidebar}
            ref={sidebar}
        >
            <button className={css.sidebar_close_button} onClick={hideSidebar}>
                <Image
                    src={darkTheme ? '/icons/general/close-black.svg' : '/icons/general/close.svg'}
                    alt="Close Icon"
                    width={30}
                    height={30}
                />
            </button>
            <Profile />
            <div className={css.sidebar_handle}>
                <span>INFORMATION</span>
            </div>
        </div>
    )
}

export const SidebarButton = ({ setOpenSidebar }: { setOpenSidebar: (open: boolean) => void }) => {
    const darkTheme = useDarkMode()

    return (
        <button className={css.sidebar_open_button} onClick={() => setOpenSidebar(true)}>
            <Image
                id="sidebar-button"
                src={darkTheme ? '/icons/general/info.svg' : '/icons/general/info-black.svg'}
                alt="Info Icon"
                width={35}
                height={35}
            />
        </button>
    )
}
