import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Greeting from '../Greeting/Greeting'
import HomePageSwitcher from '../HomePageSwitcher/HomePageSwitcher'

const Header: React.FC = () => (
    <header className={`${styles.header} app-wrap`}>
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
