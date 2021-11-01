import React from 'react'
import { render } from '@testing-library/react'
import Widget from '@components/Widget/Widget'

describe('Widget', () => {
    const renderComponent = <Widget type="list" />

    it('render Widget', () => {
        const { asFragment } = render(renderComponent)
        expect(asFragment()).toMatchSnapshot()
    })
})
