import Greeting from '@components/Greeting/Greeting'
import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'

describe('Greeting', () => {
    const renderComponent = (period: string) => <Greeting userName="Jack" timePeriod={period} />

    // eslint-disable-next-line jest/expect-expect
    it('render morning', () => compareSnapshot(renderComponent('morning')))

    // eslint-disable-next-line jest/expect-expect
    it('render afternoon', () => compareSnapshot(renderComponent('afternoon')))

    // eslint-disable-next-line jest/expect-expect
    it('render evening', () => compareSnapshot(renderComponent('evening')))

    // eslint-disable-next-line jest/expect-expect
    it('render night', () => compareSnapshot(renderComponent('night')))
})
