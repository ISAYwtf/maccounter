import React from 'react'
import Logo from '@components/Logo/Logo'
import { compareSnapshot } from '@testUtils/renderSnapshot'

describe('Logo', () => {
    const renderComponent = <Logo />

    // eslint-disable-next-line jest/expect-expect
    it('render Logo', () => compareSnapshot(renderComponent))
})
