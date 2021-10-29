import React from 'react'
import Switcher from 'app/components/Switcher/Switcher'
import styles from './HomePageSwitcher.module.css'

const HomePageSwitcher: React.FC = () => (
    <div className={styles.switcher}>
        <p>Light mode</p>
        <Switcher />
    </div>
)

export default HomePageSwitcher
