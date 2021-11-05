import React from 'react'
import WidgetContainer from '@components/Widget/WidgetContainer'
import styles from './ContentPage.module.scss'

const ContentPage: React.FC = () => (
    <main className={styles.container}>
        <WidgetContainer title="Last expenses" />
        <WidgetContainer title="Last expenses" />
        <WidgetContainer title="Last expenses" />
        <WidgetContainer title="Last expenses" />
    </main>
)

export default ContentPage
