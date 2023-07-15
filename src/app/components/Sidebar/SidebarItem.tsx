import { BasePropsWithoutChild } from '@localTypes/BaseProps'
import React, { MouseEventHandler, useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Sidebar.module.scss'

interface SidebarItemProps extends BasePropsWithoutChild {
    title: string
    Ico: React.FC | string | undefined
    link?: string
    isSidebarOpened: boolean
    isLinked?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = (({
    title,
    Ico,
    link = '/',
    isSidebarOpened,
    className,
    isLinked,
    onClick,
}) => {
    const [isActive, setIsActive] = useState(false)
    const DELAY = 1000
    let timerForShow: ReturnType<typeof setTimeout>

    const hoverSidebar = () => {
        if (isSidebarOpened) { return }
        timerForShow = setTimeout(() => {
            setIsActive(true)
        }, DELAY)
    }

    const leaveSidebar = () => {
        clearTimeout(timerForShow)
        setIsActive(false)
    }

    const clickHandler: MouseEventHandler = (e) => {
        if (!isLinked) { e.preventDefault() }
        if (onClick) {
            leaveSidebar()
            onClick(e)
        }
    }

    return (
        <NavLink
            to={link}
            activeClassName={isLinked ? styles.active : undefined}
            role="link"
            className={clsx(
                styles.sidebarItem,
                { [styles.promptActive]: isActive },
                className,
            )}
            onMouseEnter={hoverSidebar}
            onMouseLeave={leaveSidebar}
            onClick={clickHandler}
        >
            {Ico && typeof Ico !== 'string' ? <Ico /> : <span className={styles.sidebarProfile}>{Ico}</span>}
            <div className={styles.prompt}>
                <p>{title}</p>
            </div>
        </NavLink>
    )
})

SidebarItem.defaultProps = { isLinked: true, link: '/' }

export default SidebarItem
