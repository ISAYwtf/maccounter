import React from "react"
import styles from "./HomePageSwitcher.module.css"
import Switcher from "../Switcher/Switcher";

const HomePageSwitcher = () =>
    <div className={styles.switcher}>
        <p>Light mode</p>
        <Switcher />
    </div>

export default HomePageSwitcher
