import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import Header from '@components/Header/Header'

describe('Header', () => {
    const renderComponent = <Header />

    // eslint-disable-next-line jest/expect-expect
    it('render Header', () => compareSnapshot(renderComponent))
})
