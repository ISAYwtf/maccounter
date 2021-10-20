import React from "react"
import styles from "./Widget.module.scss"

interface WidgetProps {
    type: string
}

const Widget: React.FC<WidgetProps> = (props) =>
    <div className={`component ${styles.container}`}>
        <p>{props.type}</p>
    </div>

export default Widget
