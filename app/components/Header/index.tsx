import css from './Header.module.scss'

import type { ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
    return <header className={css.header}>{children}</header>
}

export default Header
