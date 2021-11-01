import React from 'react'
import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    const renderComponent = <Header />

    it('render Header', () => {
        const { asFragment } = render(renderComponent)
        expect(asFragment()).toMatchSnapshot()
    })
})
