import React, { useCallback, useState } from 'react'
import stringParser from '@utils/stringParser/stringParser'
import { ReactComponent as homeSvg } from '@icons/home.svg'
import { ReactComponent as accountancySvg } from '@icons/accountancy.svg'
import { ReactComponent as statisticsSvg } from '@icons/statistics.svg'
import { ReactComponent as settingsSvg } from '@icons/settings.svg'
import { ReactComponent as addSvg } from '@icons/add.svg'
import clsx from 'clsx'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import SidebarItem from '@components/Sidebar/SidebarItem'
import { MouseEventType } from '@localTypes/EventTypes'
import { v4 as createId } from 'uuid'
import styles from './Sidebar.module.scss'

type SidebarProps = RouteComponentProps

const Sidebar: React.FC<SidebarProps> = () => {
    const [sidebarHeight, setSidebarHeight] = useState(0)

    const sidebarRef = useCallback((node) => {
        if (node !== null) {
            setSidebarHeight(node.getBoundingClientRect().height)
        }
    }, [])

    const sidebarStyles = {
        top: `${window.innerHeight / 2 - sidebarHeight / 2}px`,
    }

    const openSidebar = (target: MouseEventType) => {
        const sidebar = target
        if (!sidebar) {
            return
        }
        const isOpen = sidebar.dataset.open === 'true'

        if (!isOpen) {
            sidebar.dataset.open = 'true'
        } else {
            sidebar.dataset.open = 'false'
        }
    }

    const sidebarItems = [
        { title: 'Profile', ico: undefined },
        { title: 'Home', ico: homeSvg },
        { title: 'Accountancy', ico: accountancySvg },
        { title: 'Statistics', ico: statisticsSvg },
        { title: 'Settings', ico: settingsSvg },
        { title: 'Add&nbsp;operation', ico: addSvg },
    ]

    type Items = typeof sidebarItems

    const mapItemToSidebar = (items: Items) => items.map((item) => {
        const { title, ico } = item
        const parsedTitle = stringParser(title) ?? title
        const link = `/${parsedTitle.toLowerCase().replace(/\s/g, '-')}`

        return (
            <SidebarItem key={createId()} title={parsedTitle} Ico={ico} link={link} />
        )
    })

    return (
        <div
            className={clsx(
                styles.sidebar,
                'component',
            )}
            data-open="false"
            role="navigation"
            onDoubleClick={(e) => openSidebar(e.target as MouseEventType)}
            ref={sidebarRef}
            style={sidebarStyles}
        >
            {mapItemToSidebar(sidebarItems)}
        </div>
    )
}

export default withRouter(Sidebar)
