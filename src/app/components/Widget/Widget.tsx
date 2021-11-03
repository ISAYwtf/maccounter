import React from 'react'
import clsx from 'clsx'
import Column from '@components/Table/Column/Column'
import Row from '@components/Table/Row/Row'
import Rows from '@components/Table/Rows/Rows'
import { ReactComponent as DotsSvg } from '@icons/dots.svg'
import { ReactComponent as AddSvg } from '@icons/add.svg'
import { ruble, space } from '@assets/symbols'
import { WidgetProps } from '@components/Widget/WidgetProps'
import { ExpensesInitialState } from '@store/expenses/expensesInitialState'
import { v4 as createId } from 'uuid'
import styles from './Widget.module.scss'

const mapDataToRow = (data: ExpensesInitialState) => data.map((el) => {
    const cardNumber = `****${el.card.number.slice(-4)}`
    const sum = el.sumOfExpenses.toLocaleString()
    return (
        <Row key={createId()}>
            <Column className={styles.card}>
                <p className={styles.cardTitle}>{el.card.title}</p>
                <p className={styles.cardNumber}>{cardNumber}</p>
            </Column>
            <Column className={styles.sum}>
                <p>
                    {sum}
                    {space}
                    {ruble}
                </p>
            </Column>
            <Column className={styles.dots}>
                <DotsSvg />
            </Column>
        </Row>
    )
})

const Widget: React.FC<WidgetProps> = ({
    title,
    expenses,
}) => (
    <div className="component">
        <div className={clsx(
            'txt--title-small',
            styles.title,
        )}
        >
            <p>
                {title}
            </p>
            <AddSvg />
        </div>
        <Rows>
            {mapDataToRow(expenses)}
        </Rows>
    </div>
)

export default Widget
