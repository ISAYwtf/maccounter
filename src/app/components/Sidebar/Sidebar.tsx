import React, { useCallback, useState } from 'react'
import stringParser from '@utils/stringParser/stringParser'
import clsx from 'clsx'
import SidebarItem from '@components/Sidebar/SidebarItem'
import { v4 as createId } from 'uuid'
import { connect } from 'react-redux'
import { State } from '@store/redux-store'
import { getSidebarState } from '@store/sidebar/sidebarSelectors'
import { SidebarInitialState } from '@store/sidebar/sidebarInitialState'
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Sidebar.module.scss'

interface SidebarProps {
    sidebarItems: SidebarInitialState
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const { sidebarItems } = props
    const [isOpened, setIsOpened] = useState(false)
    const [sidebarHeight, setSidebarHeight] = useState(0)
    const [sidebarItemsWidth, setSidebarItemsWidth] = useState<number[]>([])
    let sidebarItemsMaxWidth = 24

    if (sidebarItemsWidth.length) {
        sidebarItemsMaxWidth = Math.max(...sidebarItemsWidth)
    }

    const sidebarWidths = { min: 64, max: `${sidebarItemsMaxWidth + 64}px` }
    const sidebarRef = useCallback((node) => {
        if (node !== null) {
            setSidebarHeight(node.getBoundingClientRect().height)
        }
    }, [])
    const sidebarStyles = {
        top: `${window.innerHeight / 2 - sidebarHeight / 2}px`,
        width: isOpened ? sidebarWidths.max : sidebarWidths.min,
    }
    const openSidebar = () => {
        setIsOpened(!isOpened)
    }
    const sidebarItemsRef = useCallback((node) => {
        const widths = sidebarItemsWidth
        if (node !== null) {
            widths?.push(node.children[1].getBoundingClientRect().width)
            setSidebarItemsWidth(widths)
        }
    }, [sidebarItemsWidth])

    type Items = typeof sidebarItems
    const mapItemToSidebar = (items: Items) => items.map((item) => {
        const { title, ico } = item
        const parsedTitle = stringParser(title) ?? title
        const link = `/${parsedTitle.toLowerCase().replace(/\s/g, '-')}`

        return (
            <SidebarItem
                isSidebarOpened={isOpened}
                ref={sidebarItemsRef}
                key={createId()}
                title={parsedTitle}
                Ico={ico}
                link={link}
            />
        )
    })

    return (
        <div
            className={clsx(
                styles.sidebar,
                'component',
                { [styles.opened]: isOpened },
            )}
            role="navigation"
            onDoubleClick={openSidebar}
            ref={sidebarRef}
            style={sidebarStyles}
        >
            {mapItemToSidebar(sidebarItems)}
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    sidebarItems: getSidebarState(state),
})

export default connect(mapStateToProps)(Sidebar)
