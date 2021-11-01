import React from 'react'
import HomePageSwitcher from '@components/HomePageSwitcher/HomePageSwitcher'
import { compareSnapshot } from '@testUtils/renderSnapshot'

describe('HomePageSwitcher', () => {
    const renderComponent = <HomePageSwitcher />

    // eslint-disable-next-line
    it('render HomePageSwitcher', () => compareSnapshot(renderComponent))
})
