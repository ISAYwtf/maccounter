import React from 'react'
import styles from './ContentPage.module.scss'
import Widget from '../Widget/Widget'

const ContentPage: React.FC = () => (
    <main className={styles.container}>
        <div>
            <Widget type="list" />
        </div>
    </main>
)

export default ContentPage
