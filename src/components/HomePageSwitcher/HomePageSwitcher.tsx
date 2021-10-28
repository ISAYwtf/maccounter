import React from 'react'
import styles from './HomePageSwitcher.module.css'
import Switcher from '../Switcher/Switcher'

const HomePageSwitcher: React.FC = () => (
    <div className={styles.switcher}>
        <p>Light mode</p>
        <Switcher />
    </div>
)

export default HomePageSwitcher
