import React, { ReactElement } from 'react'

export const showComponentIf = (condition: boolean, component: ReactElement) => (condition ? component : <></>)
