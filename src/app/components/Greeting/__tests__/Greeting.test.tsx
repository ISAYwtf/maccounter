import { render } from '@testing-library/react'
import React from 'react'
import Greeting from '../Greeting'

describe('Greeting', () => {
    const userName = 'Jack'
    const renderComponent = <Greeting userName={userName} />

    it('render Greeting', () => {
        const { asFragment } = render(renderComponent)
        expect(asFragment()).toMatchSnapshot()
    })
})
