import React from 'react'
import clsx from 'clsx'
import { BaseProps } from '@localTypes/BaseProps'
import styles from './Rows.module.scss'

const Rows: React.FC<BaseProps> = ({
    children,
    className,
}) => (
    <div className={clsx(
        styles.rows,
        className,
    )}
    >
        {children ?? ''}
    </div>
)

export default Rows
