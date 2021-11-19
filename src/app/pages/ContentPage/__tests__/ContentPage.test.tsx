import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import { Provider } from 'react-redux'
import store from '@store/redux-store'
import ContentPage from '../ContentPage'

describe('ContentPage', () => {
    const renderComponent = <ContentPage />
    const wrapper: React.FC = ({ children }) => (
        <Provider store={store}>
            {children}
        </Provider>
    )

    // eslint-disable-next-line
    it('render ContentPage', () => compareSnapshot(renderComponent, wrapper))
})
