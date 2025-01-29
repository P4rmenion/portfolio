import Profile from '@/components/Profile'

import { useState } from 'react'

import css from './ProfileSidebar.module.scss'

const ProfileSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div
            className={`${css.sidebar} ${!showSidebar && css.hidden}`}
            onMouseOver={() => setShowSidebar(true)}
            onMouseLeave={() => setShowSidebar(false)}
        >
            <Profile />
            <div className={css.sidebar_handle}>
                <span>INFORMATION</span>
            </div>
        </div>
    )
}

export default ProfileSidebar
