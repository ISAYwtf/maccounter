import React from 'react'
import styles from './Widget.module.scss'

interface WidgetProps {
    type: string
}

const Widget: React.FC<WidgetProps> = ({ type }) => (
    <div className={`component ${styles.container}`}>
        <p>{type}</p>
    </div>
)

export default Widget
