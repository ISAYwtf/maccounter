import React from 'react'
import Widget from '@components/Widget/Widget'
import styles from './ContentPage.module.scss'

const ContentPage: React.FC = () => (
    <main className={styles.container}>
        <div>
            <Widget title="Last expenses" />
        </div>
    </main>
)

export default ContentPage
