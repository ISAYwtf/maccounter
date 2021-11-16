import { useAppSelector } from '@store/hooks'
import React from 'react'
import Widget from '@components/Widget/Widget'
import { WidgetProps } from '@components/Widget/WidgetProps'

const WidgetContainer: React.FC<Pick<WidgetProps, 'title'>> = ({ title }) => {
    const expensesData = useAppSelector((state) => state.expenses)
    return (
        <Widget title={title} expenses={expensesData} />
    )
}

export default WidgetContainer
