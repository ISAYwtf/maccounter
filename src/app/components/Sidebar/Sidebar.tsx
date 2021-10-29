import React, { useCallback, useState } from 'react'
import stringParser from 'app/utils/stringParser/stringParser'
import styles from './Sidebar.module.scss'

const homeImg = () => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="var(--svg-color-fill)" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 10.8182V25H9.45455V17.3636H16.5455V25H25V10.8182L13 1L1 10.8182Z"
            stroke="var(--svg-color-stroke)"
            strokeLinejoin="round"
        />
    </svg>
)

const accountancyImg = () => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="var(--svg-color-fill)" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 3.37363C1 2.09023 2.28395 1.26374 3.07407 1H25C25 1 24.5008 2.50435 24.5 3.5C24.4992 4.49985 25 6.01099 25 6.01099M1 3.37363C0.999999 5.21978 1.59259 5.48352 2.48148 6.01099H25M1 3.37363C1 9.08791 1 20.8857 1 22.3626C1 23.8396 1.98765 24.5604 2.48148 24.7363L25 25V6.01099M15.8148 13.1319C15.8148 12.4286 15.3407 11.022 13.4444 11.022M13.4444 11.022C11.0741 11.022 11.0741 12.8681 11.0741 13.1319C11.0741 13.3956 11.0741 14.4506 13.4444 15.2418C15.8148 16.033 15.8148 16.2967 15.8148 17.3516C15.8148 18.4066 14.9259 19.4615 13.4444 19.4615M13.4444 11.022V9.96703M13.4444 19.4615C11.3704 19.4615 11.0741 17.6154 11.0741 17.3516M13.4444 19.4615V20.5165"
            stroke="var(--svg-color-stroke)"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const statisticsImg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--svg-color-fill)" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.5 12.3288V12.5003L10.6053 12.6358L17.4999 21.4992L17.5003 21.4996C16.5583 22.2741 15.7411 22.7651 14.8344 23.0686C13.9237 23.3734 12.8903 23.4997 11.5 23.4997C5.43515 23.4997 0.5 18.5645 0.5 12.4997C0.5 6.39111 5.02798 1.49976 10.5 1.49976L10.5 1.49977V12.3288ZM17.818 21.8857L17.8169 21.8845L17.818 21.8857Z"
            stroke="var(--svg-color-stroke)"
        />
        <path
            d="M23.5 11.5H12.5L12.5 11.5V0.500015L12.5 0.5C18.5648 0.5 23.4999 5.43515 23.5 11.5L23.5 11.5Z"
            stroke="var(--svg-color-stroke)"
        />
        <path
            d="M19.4805 21.0267L12.9806 12.98H22.9805L22.9805 12.98C22.9805 16.0185 21.7047 18.9516 19.4819 21.026C19.4814 21.0265 19.4809 21.0267 19.4806 21.0268L19.4805 21.0267Z"
            stroke="var(--svg-color-stroke)"
        />
    </svg>
)

const settingsImg = () => (
    <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="var(--svg-color-fill)"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21.1495 12.8501L21.1179 13.1318L21.3434 13.3036L23.6059 15.0264C23.6063 15.0267 23.6067 15.027 23.607 15.0272C23.8299 15.2003 23.8926 15.4993 23.7542 15.7517L21.3899 19.7345L21.3898 19.7344L21.3837 19.7453C21.2546 19.9755 20.9372 20.1006 20.6465 19.9919L17.9693 18.9451L17.7208 18.8479L17.5018 19.0002C16.9908 19.3555 16.4899 19.6382 15.9837 19.8612L15.7308 19.9726L15.6906 20.246L15.2829 23.0159L15.2828 23.0159L15.2816 23.0255C15.2503 23.2706 15.0129 23.4998 14.6901 23.4998H9.96643C9.64676 23.4998 9.40673 23.2735 9.37394 23.0157L9.37404 23.0157L9.37259 23.0059L8.96594 20.2459L8.92562 19.9722L8.67234 19.861C8.14792 19.6306 7.63861 19.3431 7.15354 19.0025L6.93401 18.8484L6.6842 18.9461L4.01997 19.9876C3.70445 20.0955 3.39376 19.9619 3.26667 19.7352L3.2668 19.7351L3.26052 19.7246L0.908507 15.7618C0.761512 15.4941 0.830597 15.1966 1.0463 15.0295C1.04662 15.0292 1.04694 15.029 1.04725 15.0287L3.31224 13.3036L3.53468 13.1341L3.50678 12.8559C3.47403 12.5292 3.45792 12.2536 3.45792 11.9998C3.45792 11.7462 3.47396 11.4713 3.50849 11.1467L3.5383 10.8665L3.31411 10.6959L1.05096 8.97357C1.05066 8.97334 1.05037 8.97311 1.05007 8.97288C0.817342 8.79306 0.763268 8.48083 0.906292 8.24542L0.906315 8.24544L0.908969 8.24096L3.26776 4.26596L3.26789 4.26604L3.27392 4.25528C3.4038 4.02358 3.71977 3.89881 4.01052 4.00843L6.6883 5.05547L6.93677 5.15262L7.15582 5.00032C7.66681 4.64504 8.16769 4.36231 8.67388 4.13937L8.92679 4.02798L8.96702 3.75456L9.37468 0.983546L9.37477 0.98356L9.37598 0.974048C9.40726 0.728875 9.64476 0.499756 9.96749 0.499756H14.6912C15.0109 0.499756 15.2509 0.725996 15.2837 0.983829L15.2836 0.983842L15.285 0.993659L15.6917 3.75464L15.732 4.02883L15.986 4.13989C16.5097 4.36894 17.0175 4.6562 17.5025 4.99763L17.7222 5.15226L17.9724 5.05445L20.638 4.01238C20.9473 3.90439 21.2604 4.03561 21.3906 4.26643L21.3904 4.26649L21.3961 4.27599L23.7483 8.23914C23.8955 8.50579 23.8268 8.80319 23.6096 8.9709C23.6093 8.9711 23.6091 8.97131 23.6088 8.97151L21.3435 10.6959L21.1189 10.8669L21.1493 11.1475C21.1769 11.4031 21.1997 11.6949 21.1997 11.9998C21.1997 12.3056 21.1778 12.5973 21.1495 12.8501Z"
            stroke="var(--svg-color-stroke)"
        />
        <path
            d="M7.69382 11.9995C7.69382 9.5311 9.76071 7.49951 12.3283 7.49951C14.8959 7.49951 16.9628 9.5311 16.9628 11.9995C16.9628 14.468 14.8959 16.4995 12.3283 16.4995C9.76071 16.4995 7.69382 14.468 7.69382 11.9995Z"
            stroke="var(--svg-color-stroke)"
        />
    </svg>
)

const addImg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--svg-color-fill)" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.5 11.9998C0.5 5.65921 5.65945 0.499756 12 0.499756C18.3405 0.499756 23.5 5.65921 23.5 11.9998C23.5 18.3403 18.3405 23.4998 12 23.4998C5.65945 23.4998 0.5 18.3403 0.5 11.9998Z"
            stroke="var(--svg-color-stroke)"
        />
        <path
            d="M12 11.4998V11.9998H12.5H18.5L18.5 11.9998L18.5 11.9998H12.5H12V12.4998V18.4998L12 18.4998L12 18.4998V12.4998V11.9998H11.5H5.49999L5.49997 11.9998L5.49999 11.9998H11.5H12V11.4998V5.49977L12 5.49976L12 5.49977V11.4998Z"
            stroke="var(--svg-color-stroke)"
        />
    </svg>
)

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

    const time = 500
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let timer = setTimeout(() => {}, time)

    const hoverSidebar = (item: any) => {
        const parent = item.parentElement

        if (item.classList.contains(styles.sidebarItem) && parent.dataset.open === 'false') {
            timer = setTimeout(() => {
                item.classList.add(styles.promptActive)
            }, time)
        } else if (parent.classList.contains(styles.sidebarItem)
            && parent.parentElement.dataset.open === 'false') {
            timer = setTimeout(() => {
                parent.classList.add(styles.promptActive)
            }, time)
        } else if (item.tagName === 'path') {
            hoverSidebar(parent)
        }
    }

    const leaveSidebar = (item: any) => {
        clearTimeout(timer)
        item.classList.remove(styles.promptActive)
        const parent = item.parentElement

        if (parent.classList.contains(styles.sidebarItem)) {
            parent.classList.remove(styles.promptActive)
        } else if (item.tagName === 'path') {
            leaveSidebar(parent)
        }
    }

    const openSidebar = (e: any) => {
        const sidebar = e.target
        const isOpen = sidebar.dataset.open === 'true'

        if (!isOpen) {
            sidebar.dataset.open = 'true'
        } else {
            sidebar.dataset.open = 'false'
        }
    }

    const sidebarItem = (title: string, ico: () => any) => (
        <div
            className={styles.sidebarItem}
            onMouseEnter={(e: any) => hoverSidebar(e.target)}
            onMouseLeave={(e: any) => leaveSidebar(e.target)}
        >
            {ico()}
            <div className={styles.prompt}>
                <p>{stringParser(title)}</p>
            </div>
        </div>
    )

    return (
        <div
            className={`${styles.sidebar} component`}
            data-open="false"
            onDoubleClick={openSidebar}
            ref={sidebarRef}
            style={sidebarStyles}
        >
            <div
                className={styles.sidebarItem}
                onMouseEnter={(e: any) => hoverSidebar(e.target)}
                onMouseLeave={(e: any) => leaveSidebar(e.target)}
            >
                <span className={styles.sidebarProfile}>IA</span>
                <div className={styles.prompt}>
                    <p>Profile</p>
                </div>
            </div>
            {sidebarItem('Home', homeImg)}
            {sidebarItem('Accountancy', accountancyImg)}
            {sidebarItem('Statistics', statisticsImg)}
            {sidebarItem('Settings', settingsImg)}
            {sidebarItem('Add&nbsp;operation', addImg)}

        </div>
    )
}

export default Sidebar
