import { MouseEventHandler } from 'react'

export interface BaseProps {
    className?: string,
    children?: JSX.Element | JSX.Element[],
    onClick?: MouseEventHandler
}

export type BasePropsWithoutChild = Omit<BaseProps, 'children'>
