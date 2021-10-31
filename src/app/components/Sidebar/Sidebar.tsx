import React, { useCallback, useState } from 'react'
import stringParser from '@utils/stringParser/stringParser'
import { ReactComponent as homeSvg } from '@icons/home.svg'
import { ReactComponent as accountancySvg } from '@icons/accountancy.svg'
import { ReactComponent as statisticsSvg } from '@icons/statistics.svg'
import { ReactComponent as settingsSvg } from '@icons/settings.svg'
import { ReactComponent as addSvg } from '@icons/add.svg'
import clsx from 'clsx'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
    const [sidebarHeight, setSidebarHeight] = useState(0)

    const sidebarRef = useCallback((node) => {
        if (node !== null) {
            setSidebarHeight(node.getBoundingClientRect().height)
        }
    }, [])

    const sidebarStyles = {
        top: `${window.innerHeight / 2 - sidebarHeight / 2}px`,
    }

    const DELAY = 500
    let timerForShow: ReturnType<typeof setTimeout>

    type MouseEventType = HTMLDivElement | undefined

    const hoverSidebar = (item: MouseEventType) => {
        const parent = item?.parentElement as MouseEventType
        if (!item || !parent) {
            return
        }

        if (item.classList.contains(styles.sidebarItem) && parent.dataset.open === 'false') {
            timerForShow = setTimeout(() => {
                item.classList.add(styles.promptActive)
            }, DELAY)
        } else if (parent.classList.contains(styles.sidebarItem)
            && parent.parentElement?.dataset.open === 'false') {
            timerForShow = setTimeout(() => {
                parent.classList.add(styles.promptActive)
            }, DELAY)
        } else if (item.tagName === 'path') {
            hoverSidebar(parent)
        }
    }

    const leaveSidebar = (item: MouseEventType) => {
        clearTimeout(timerForShow)
        item?.classList.remove(styles.promptActive)
        const parent = item?.parentElement as MouseEventType
        if (!item || !parent) {
            return
        }

        if (parent.classList.contains(styles.sidebarItem)) {
            parent.classList.remove(styles.promptActive)
        } else if (item.tagName === 'path') {
            leaveSidebar(parent)
        }
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

    const sidebarItem = (title: string, Ico: React.FC) => (
        <div
            className={styles.sidebarItem}
            onMouseEnter={(e) => hoverSidebar(e.target as MouseEventType)}
            onMouseLeave={(e) => leaveSidebar(e.target as MouseEventType)}
        >
            <Ico />
            <div className={styles.prompt}>
                <p>{stringParser(title)}</p>
            </div>
        </div>
    )

    return (
        <div
            className={clsx(
                styles.sidebar,
                'component',
            )}
            data-open="false"
            onDoubleClick={(e) => openSidebar(e.target as MouseEventType)}
            ref={sidebarRef}
            style={sidebarStyles}
        >
            <div
                className={styles.sidebarItem}
                onMouseEnter={(e) => hoverSidebar(e.target as MouseEventType)}
                onMouseLeave={(e) => leaveSidebar(e.target as MouseEventType)}
            >
                <span className={styles.sidebarProfile}>IA</span>
                <div className={styles.prompt}>
                    <p>Profile</p>
                </div>
            </div>
            {sidebarItem('Home', homeSvg)}
            {sidebarItem('Accountancy', accountancySvg)}
            {sidebarItem('Statistics', statisticsSvg)}
            {sidebarItem('Settings', settingsSvg)}
            {sidebarItem('Add&nbsp;operation', addSvg)}

        </div>
    )
}

export default Sidebar
