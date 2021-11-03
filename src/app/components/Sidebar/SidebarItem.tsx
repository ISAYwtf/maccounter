import React from 'react'
import { NavLink } from 'react-router-dom'
import { MouseEventType } from '@localTypes/EventTypes'
import styles from './Sidebar.module.scss'

const DELAY = 1000
let timerForShow: ReturnType<typeof setTimeout>

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

interface SidebarItemProps {
    title: string,
    Ico: React.FC | undefined,
    link: string,
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    Ico,
    link,
}) => (
    <NavLink
        to={link}
        activeClassName={styles.active}
        role="link"
        className={styles.sidebarItem}
        onMouseEnter={(e) => hoverSidebar(e.target as MouseEventType)}
        onMouseLeave={(e) => leaveSidebar(e.target as MouseEventType)}
    >
        {Ico ? <Ico /> : <span className={styles.sidebarProfile}>IA</span>}
        <div className={styles.prompt}>
            <p>{title}</p>
        </div>
    </NavLink>
)

export default SidebarItem
