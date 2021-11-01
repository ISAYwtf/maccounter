import React from 'react'
import Logo from '@components/Logo/Logo'
import Greeting from '@components/Greeting/Greeting'
import HomePageSwitcher from '@components/HomePageSwitcher/HomePageSwitcher'
import clsx from 'clsx'
import styles from './Header.module.css'

const Header: React.FC = () => (
    <header className={clsx(
        styles.header,
        'app-wrap',
    )}
    >
        <div className={styles.headerLeft}>
            <div className={styles.appLogo}>
                <Logo />
            </div>
            <div>
                <Greeting userName="User" />
            </div>
        </div>
        <HomePageSwitcher />
    </header>
)

export default Header
