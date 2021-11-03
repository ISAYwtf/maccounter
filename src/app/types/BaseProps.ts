export interface BaseProps {
    className?: string,
    children?: JSX.Element | JSX.Element[],
}

export type BasePropsWithoutChild = Omit<BaseProps, 'children'>
