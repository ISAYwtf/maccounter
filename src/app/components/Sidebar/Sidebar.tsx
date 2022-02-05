import { ReactComponent as accountancySvg } from '@icons/accountancy.svg'
import { ReactComponent as addSvg } from '@icons/add.svg'
import { ReactComponent as homeSvg } from '@icons/home.svg'
import { ReactComponent as settingsSvg } from '@icons/settings.svg'
import { ReactComponent as statisticsSvg } from '@icons/statistics.svg'
import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import SidebarItem from '@components/Sidebar/SidebarItem'
import { ReactComponent as expandSvg } from '@icons/expand.svg'
import { useSelector, useDispatch } from '@store/hooks'
import { setModalIsActive } from '@store/app-store/appReducer'
import { nameParser } from '@utils/stringParser'

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

    const sidebarRef = useCallback((node: HTMLDivElement) => {
        if (!node) { return }

        setSidebarHeight(node.getBoundingClientRect().height)
        const sidebarItems = node.querySelectorAll(`.${styles.prompt}`)
        const widths: number[] = []

        sidebarItems.forEach((item: Element) => {
            widths.push(item.getBoundingClientRect().width)
        })
        setSidebarItemsWidth(widths)
    }, [])

    const sidebarStyles = {
        top: `${window.innerHeight / 2 - sidebarHeight / 2}px`,
        width: isOpened ? sidebarWidths.max : sidebarWidths.min,
    }

    const dispatch = useDispatch()
    const handleClickToProfile = () => {
        dispatch(setModalIsActive(true))
    }

    const links = useSelector((state) => state.app.links)

    const userFirstName = useSelector((state) => state.profile.firstName)
    const userSecondName = useSelector((state) => state.profile.secondName)
    const userInitials = nameParser(userFirstName, userSecondName)

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
                Ico={userInitials}
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
