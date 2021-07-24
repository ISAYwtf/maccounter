import React from "react"
import styles from "./Header.module.css"
import Logo from "../Logo/Logo.tsx";
import Greeting from "../Greeting/Greeting.tsx";
import HomePageSwitcher from "../HomePageSwitcher/HomePageSwitcher";

const Header = () =>
    <header className={`${styles.header} app-wrap`}>
        <div className={styles.headerLeft}>
            <div className={styles.appLogo}>
                <Logo />
            </div>
            <div>
                <Greeting />
            </div>
        </div>
        <HomePageSwitcher />
    </header>

export default Header
