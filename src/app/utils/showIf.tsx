import React, { Fragment, ReactElement } from 'react'

export const showComponentIf = (condition: boolean, component: ReactElement) => (condition ? component : <Fragment />)
