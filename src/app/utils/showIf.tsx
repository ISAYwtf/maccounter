import React, { ReactElement } from 'react'

export const showComponentIf = (
    condition: boolean, component: ReactElement,
): ReactElement => (condition ? component : <></>)
