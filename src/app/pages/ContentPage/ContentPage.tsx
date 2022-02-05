import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from '@store/hooks'
import Home from '../Home/Home'
import styles from './ContentPage.module.scss'

const Accountancy = lazy(() => import('@pages/Accountancy/Accountancy'))
const Statistics = lazy(() => import('@pages/Statistics/Statistics'))
const Settings = lazy(() => import('@pages/Settings/Settings'))

const ContentPage: React.FC = () => {
    const links = useSelector((state) => state.app.links)
    return (
        <main className={styles.container}>
            <Suspense fallback="Загрузка...">
                <Switch>
                    <Route path={links.basedir} exact render={() => <Redirect to={links.home} />} />
                    <Route path={links.home} component={Home} />
                    <Route path={links.accountancy} component={Accountancy} />
                    <Route path={links.statistics} component={Statistics} />
                    <Route path={links.settings} component={Settings} />
                </Switch>

            </Suspense>
        </main>
    )
}

export default ContentPage
