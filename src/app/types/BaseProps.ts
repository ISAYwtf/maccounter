import { MouseEventHandler, ReactChild, ReactChildren } from 'react'
import { Omit } from 'react-redux'

export interface BaseProps {
    className?: string,
    children?: ReactChildren | ReactChild | JSX.Element | JSX.Element[],
    onClick?: MouseEventHandler,
}

export type BasePropsWithoutChild = Omit<BaseProps, 'children'>
