import { render } from '@testing-library/react'
import React, { ReactElement } from 'react'

export const compareSnapshot = (component: ReactElement, wrapper?: React.FC) => {
    const { asFragment } = render(component, { wrapper })
    expect(asFragment()).toMatchSnapshot()
}
