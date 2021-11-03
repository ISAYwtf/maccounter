import React from 'react'
import clsx from 'clsx'
import { BaseProps } from '@localTypes/BaseProps'
import styles from './Column.module.scss'

const Column: React.FC<BaseProps> = ({
    children,
    className,
}) => (
    <div className={clsx(
        styles.column,
        className,
    )}
    >
        {children ?? ''}
    </div>
)

export default Column
