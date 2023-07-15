import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import Sidebar from '@components/Sidebar/Sidebar'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '@store/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { WithChildren } from '@localTypes/BaseProps'

describe('Sidebar', () => {
    const renderComponent = <Sidebar />
    const wrapper: React.FC<WithChildren> = ({ children }) => (
        <BrowserRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </BrowserRouter>
    )

    // eslint-disable-next-line
    it('render Sidebar', () => compareSnapshot(renderComponent, wrapper))

    it('mouse enter should call timeout from sidebarItems', () => {
        jest.useFakeTimers()
        render(renderComponent, { wrapper })

        const sidebarItem = screen.getAllByRole('link')[1]
        fireEvent.mouseEnter(sidebarItem)
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
        fireEvent.mouseLeave(sidebarItem)
    })

    it('dbClick should open sidebar', () => {
        render(renderComponent, { wrapper })
        const sidebar = screen.getByRole('navigation')
        fireEvent.dblClick(sidebar)
        expect(sidebar.classList.contains('opened')).toBe(true)
    })
})
