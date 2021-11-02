import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import Greeting from '@components/Greeting/Greeting'

describe('Greeting', () => {
    const userName = 'Jack'
    const renderComponent = <Greeting userName={userName} />

    // eslint-disable-next-line jest/expect-expect
    it('render Greeting', () => compareSnapshot(renderComponent))
})
