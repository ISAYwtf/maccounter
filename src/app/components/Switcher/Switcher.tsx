import React from 'react'
import styles from './Switcher.module.css'

const Switcher: React.FC = () => (
    <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider} />
    </label>
)

export default Switcher
