import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import ContentPage from '@components/ContentPage/ContentPage'
import { Provider } from 'react-redux'
import store from '@store/redux-store'

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
