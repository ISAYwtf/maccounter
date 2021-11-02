import React from 'react'
import Switcher from '@components/Switcher/Switcher'
import { compareSnapshot } from '@testUtils/renderSnapshot'

describe('Switcher', () => {
    const renderComponent = <Switcher />

    // eslint-disable-next-line
    it('render Switcher', () => compareSnapshot(renderComponent))
})
