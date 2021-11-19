export const appInitialState = {
    timePeriod: 'morning',
    modal: {
        isActive: false,
    },
    links: {
        basedir: '/',
        home: '/home',
        accountancy: '/accountancy',
        statistics: '/statistics',
        settings: '/settings',
    },
}

export type AppInitialState = typeof appInitialState
