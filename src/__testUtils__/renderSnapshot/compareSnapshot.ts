import { render } from '@testing-library/react'
import { ReactElement } from 'react'

export const compareSnapshot = (component: ReactElement) => {
    const { asFragment } = render(component)
    expect(asFragment()).toMatchSnapshot()
}
