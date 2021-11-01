import React from 'react'
import { render } from '@testing-library/react'
import ContentPage from '../ContentPage'

describe('ContentPage', () => {
    const renderComponent = <ContentPage />

    it('render ContentPage', () => {
        const { asFragment } = render(renderComponent)
        expect(asFragment()).toMatchSnapshot()
    })
})
