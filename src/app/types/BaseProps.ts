import { MouseEventHandler, ReactNode } from 'react'

export interface BaseProps {
    className?: string
    children?: ReactNode
    onClick?: MouseEventHandler
}

export type BasePropsWithoutChild = Omit<BaseProps, 'children'>

export interface WithChildren {
    children?: ReactNode
}
