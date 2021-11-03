import { ReactComponent as homeSvg } from '@icons/home.svg'
import { ReactComponent as accountancySvg } from '@icons/accountancy.svg'
import { ReactComponent as statisticsSvg } from '@icons/statistics.svg'
import { ReactComponent as settingsSvg } from '@icons/settings.svg'
import { ReactComponent as addSvg } from '@icons/add.svg'

export const INITIAL_STATE = [
    { title: 'Profile', ico: undefined },
    { title: 'Home', ico: homeSvg },
    { title: 'Accountancy', ico: accountancySvg },
    { title: 'Statistics', ico: statisticsSvg },
    { title: 'Settings', ico: settingsSvg },
    { title: 'Add&nbsp;operation', ico: addSvg },
]

export type SidebarInitialState = typeof INITIAL_STATE
