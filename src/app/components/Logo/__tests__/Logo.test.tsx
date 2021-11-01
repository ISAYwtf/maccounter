import React from 'react'
import { render } from '@testing-library/react'
import Logo from '../Logo'

describe('Logo', () => {
    const renderComponent = <Logo />

    it('render Logo', () => {
        const { asFragment } = render(renderComponent)
        expect(asFragment()).toMatchSnapshot()
    })
})
