import React from "react"
import styles from "./Switcher.module.css"

const Switcher = () =>
    <label className={styles.switch}>
        <input type="checkbox"/>
        <span className={styles.slider}></span>
    </label>

export default Switcher
