import { BasePropsWithoutChild } from '@localTypes/BaseProps'
import React, { forwardRef, MouseEventHandler, Ref, useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Sidebar.module.scss'

interface SidebarItemProps extends BasePropsWithoutChild {
    title: string,
    Ico: React.FC | undefined,
    link: string,
    isSidebarOpened: boolean,
    isLinked?: boolean,
    ref: Ref<HTMLAnchorElement>,
}

const SidebarItem: React.FC<SidebarItemProps> = forwardRef<HTMLAnchorElement, SidebarItemProps>(({
    title,
    Ico,
    link,
    isSidebarOpened,
    className,
    isLinked = true,
    onClick,
}, ref) => {
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
            activeClassName={styles.active}
            role="link"
            className={clsx(
                styles.sidebarItem,
                { [styles.promptActive]: isActive },
                className,
            )}
            onMouseEnter={hoverSidebar}
            onMouseLeave={leaveSidebar}
            ref={ref}
            onClick={clickHandler}
        >
            {Ico ? <Ico /> : <span className={styles.sidebarProfile}>IA</span>}
            <div className={styles.prompt}>
                <p>{title}</p>
            </div>
        </NavLink>
    )
})

export default SidebarItem
