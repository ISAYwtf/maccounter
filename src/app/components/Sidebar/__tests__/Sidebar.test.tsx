import React from 'react'
import { compareSnapshot } from '@testUtils/renderSnapshot'
import Sidebar from '@components/Sidebar/Sidebar'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Sidebar', () => {
    const renderComponent = <Sidebar />

    beforeEach(() => jest.useFakeTimers())

    // eslint-disable-next-line
    it('render Sidebar', () => compareSnapshot(renderComponent))

    it('dbClick should toggle data-open', () => {
        const { getByRole } = render(renderComponent)
        const sidebar = getByRole('navigation')
        let dataOpen

        fireEvent.dblClick(sidebar)
        dataOpen = sidebar.dataset.open
        expect(dataOpen).toStrictEqual('true')

        fireEvent.dblClick(sidebar)
        dataOpen = sidebar.dataset.open
        expect(dataOpen).toStrictEqual('false')
    })

    const checkEvent = (item: HTMLElement) => {
        fireEvent.mouseEnter(item)
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500)
        fireEvent.mouseLeave(item)

        jest.useFakeTimers()

        fireEvent.mouseEnter(item.children[0])
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500)
        fireEvent.mouseLeave(item.children[0])
    }

    // eslint-disable-next-line jest/expect-expect
    it('mouse enter should call timeout from sidebarItem profile', () => {
        render(renderComponent)

        const sidebarItemProfile = screen.getByTestId('sidebarItem-profile')
        checkEvent(sidebarItemProfile)
    })

    // eslint-disable-next-line jest/expect-expect
    it('mouse enter should call timeout from sidebarItems', () => {
        render(renderComponent)

        const sidebarItem = screen.getAllByRole('listitem')[1]
        checkEvent(sidebarItem)
    })
})
