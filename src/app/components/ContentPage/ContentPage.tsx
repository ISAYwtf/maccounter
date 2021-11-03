import React from 'react'
import WidgetContainer from '@components/Widget/WidgetContainer'
import styles from './ContentPage.module.scss'

const ContentPage: React.FC = () => (
    <main className={styles.container}>
        <div>
            <WidgetContainer title="Last expenses" />
        </div>
    </main>
)

export default ContentPage
