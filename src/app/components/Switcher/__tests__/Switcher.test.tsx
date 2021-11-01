import React from 'react'
import { render } from '@testing-library/react'
import Switcher from '@components/Switcher/Switcher'

describe('Switcher', () => {
    const renderComponent = <Switcher />

    it('render Switcher', () => {
        const { asFragment } = render(renderComponent)
        expect(asFragment()).toMatchSnapshot()
    })
})
