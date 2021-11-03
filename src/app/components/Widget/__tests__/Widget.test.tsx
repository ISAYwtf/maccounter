import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import WidgetContainer from '@components/Widget/WidgetContainer'
import { Provider } from 'react-redux'
import store from '@store/redux-store'

describe('Widget', () => {
    const renderComponent = <WidgetContainer title="Last expenses" />
    const wrapper: React.FC = ({ children }) => (
        <Provider store={store}>
            {children}
        </Provider>
    )

    // eslint-disable-next-line
    it('render Widget', () => compareSnapshot(renderComponent, wrapper))
})
