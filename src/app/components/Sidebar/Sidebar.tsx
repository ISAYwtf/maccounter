import { ReactComponent as accountancySvg } from '@icons/accountancy.svg'
import { ReactComponent as addSvg } from '@icons/add.svg'
import { ReactComponent as homeSvg } from '@icons/home.svg'
import { ReactComponent as settingsSvg } from '@icons/settings.svg'
import { ReactComponent as statisticsSvg } from '@icons/statistics.svg'
import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import SidebarItem from '@components/Sidebar/SidebarItem'
import { ReactComponent as expandSvg } from '@icons/expand.svg'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setModalIsActive } from '@store/app-store/appReducer'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [sidebarHeight, setSidebarHeight] = useState(0)
    const [sidebarItemsWidth, setSidebarItemsWidth] = useState<number[]>([])
    let sidebarItemsMaxWidth = 24

    if (sidebarItemsWidth.length) {
        sidebarItemsMaxWidth = Math.max(...sidebarItemsWidth)
    }

    const sidebarWidths = { min: 64, max: `${sidebarItemsMaxWidth + 74}px` }

    const sidebarRef = useCallback((node) => {
        if (!node) { return }

        setSidebarHeight(node.getBoundingClientRect().height)
        const sidebarItems = node.querySelectorAll(`.${styles.prompt}`)
        const widths: number[] = []

        sidebarItems.forEach((item: HTMLElement) => {
            widths.push(item.getBoundingClientRect().width)
        })
        setSidebarItemsWidth(widths)
    }, [])

    const sidebarStyles = {
        top: `${window.innerHeight / 2 - sidebarHeight / 2}px`,
        width: isOpened ? sidebarWidths.max : sidebarWidths.min,
    }

    const dispatch = useAppDispatch()
    const handleClickToProfile = () => {
        dispatch(setModalIsActive(true))
    }

    const links = useAppSelector((state) => state.app.links)

    return (
        <div
            className={clsx(
                styles.sidebar,
                'component',
                { [styles.opened]: isOpened },
            )}
            role="navigation"
            onDoubleClick={() => setIsOpened(!isOpened)}
            ref={sidebarRef}
            style={sidebarStyles}
        >
            <SidebarItem
                title="Profile"
                Ico={undefined}
                isLinked={false}
                isSidebarOpened={isOpened}
                onClick={handleClickToProfile}
            />
            <SidebarItem
                title="Home"
                Ico={homeSvg}
                link={links.home}
                isSidebarOpened={isOpened}
            />
            <SidebarItem
                title="Accountancy"
                Ico={accountancySvg}
                link={links.accountancy}
                isSidebarOpened={isOpened}
            />
            <SidebarItem
                title="Statistics"
                Ico={statisticsSvg}
                link={links.statistics}
                isSidebarOpened={isOpened}
            />
            <SidebarItem
                title="Settings"
                Ico={settingsSvg}
                link={links.settings}
                isSidebarOpened={isOpened}
            />
            <SidebarItem
                title="Add&nbsp;operation"
                Ico={addSvg}
                isLinked={false}
                isSidebarOpened={isOpened}
            />
            <SidebarItem
                className={styles.expand}
                title="Expand&nbsp;sidebar"
                Ico={expandSvg}
                isSidebarOpened={isOpened}
                isLinked={false}
                onClick={() => setIsOpened(!isOpened)}
            />
        </div>
    )
}

export default Sidebar
