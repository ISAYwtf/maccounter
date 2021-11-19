import React from 'react'
import WidgetContainer from '@components/Widget/WidgetContainer'
import classes from './Home.module.scss'

const Home: React.FC = () => (
    <div className={classes.container}>
        <WidgetContainer title="Last expenses" />
        <WidgetContainer title="Last expenses" />
        <WidgetContainer title="Last expenses" />
        <WidgetContainer title="Last expenses" />
    </div>
)

export default Home
