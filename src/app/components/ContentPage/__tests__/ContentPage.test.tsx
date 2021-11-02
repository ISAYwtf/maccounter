import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import ContentPage from '@components/ContentPage/ContentPage'

describe('ContentPage', () => {
    const renderComponent = <ContentPage />

    // eslint-disable-next-line
    it('render ContentPage', () => compareSnapshot(renderComponent))
})
