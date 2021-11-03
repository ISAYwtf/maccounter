import React from 'react'
import clsx from 'clsx'
import { BaseProps } from '@localTypes/BaseProps'
import styles from './Row.module.scss'

const Row: React.FC<BaseProps> = ({
    children,
    className,
}) => (
    <div className={clsx(
        styles.row,
        className,
    )}
    >
        {children}
    </div>
)

export default Row
