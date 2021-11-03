import React from 'react'
import clsx from 'clsx'
import { BasePropsWithoutChild } from '@localTypes/BaseProps'
import Column from '@components/Table/Column/Column'
import Row from '@components/Table/Row/Row'
import Rows from '@components/Table/Rows/Rows'
import { ReactComponent as DotsSvg } from '@icons/dots.svg'
import { ReactComponent as AddSvg } from '@icons/add.svg'
import { ruble, space } from '@assets/symbols'
import styles from './Widget.module.scss'

const dataFromServer = [
    {
        id: 1,
        card: {
            title: 'Mastercard',
            number: '4653719568499474',
        },
        sumOfExpenses: 3000,
    },
    {
        id: 2,
        card: {
            title: 'Mastercard',
            number: '4653719568499474',
        },
        sumOfExpenses: 3000,
    },
    {
        id: 3,
        card: {
            title: 'Mastercard',
            number: '4653719568499474',
        },
        sumOfExpenses: 17000,
    },
    {
        id: 4,
        card: {
            title: 'Mastercard',
            number: '4653719568499474',
        },
        sumOfExpenses: 1150000,
    },
]

type Data = typeof dataFromServer

const mapDataToRow = (data: Data) => data.map((el) => {
    const cardNumber = `****${el.card.number.slice(-4)}`
    const sum = el.sumOfExpenses.toLocaleString()
    return (
        <Row>
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

interface WidgetProps extends BasePropsWithoutChild {
    title: string,
}

const Widget: React.FC<WidgetProps> = ({
    title,
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
            {mapDataToRow(dataFromServer)}
        </Rows>
    </div>
)

export default Widget
