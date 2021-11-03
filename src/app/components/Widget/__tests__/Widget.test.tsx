import React from 'react'
import Widget from '@components/Widget/Widget'
import { compareSnapshot } from '@testUtils/renderSnapshot'

describe('Widget', () => {
    const renderComponent = <Widget title="Last expenses" />

    // eslint-disable-next-line
    it('render Widget', () => compareSnapshot(renderComponent))
})
