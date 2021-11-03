import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import Sidebar from '@components/Sidebar/Sidebar'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '@store/redux-store'
import { BrowserRouter } from 'react-router-dom'

describe('Sidebar', () => {
    const renderComponent = <Sidebar />
    const wrapper: React.FC = ({ children }) => (
        <BrowserRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </BrowserRouter>
    )

    beforeEach(() => jest.useFakeTimers())

    // eslint-disable-next-line
    it('render Sidebar', () => compareSnapshot(renderComponent, wrapper))

    const checkEvent = (item: HTMLElement) => {
        fireEvent.mouseEnter(item)
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
        fireEvent.mouseLeave(item)

        jest.useFakeTimers()

        fireEvent.mouseEnter(item.children[0])
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
        fireEvent.mouseLeave(item.children[0])
    }

    // eslint-disable-next-line jest/expect-expect
    it('mouse enter should call timeout from sidebarItem profile', () => {
        render(renderComponent, { wrapper })

        const sidebarItemProfile = screen.getAllByRole('link')[0]
        checkEvent(sidebarItemProfile)
    })

    // eslint-disable-next-line jest/expect-expect
    it('mouse enter should call timeout from sidebarItems', () => {
        render(renderComponent, { wrapper })

        const sidebarItem = screen.getAllByRole('link')[1]
        checkEvent(sidebarItem)
    })
})
