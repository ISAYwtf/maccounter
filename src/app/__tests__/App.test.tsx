import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import App from 'app/App'

describe('App', () => {
    const renderComponent = <App />

    // eslint-disable-next-line
    it('render App', () => compareSnapshot(renderComponent))
})
