import { BaseProps } from '@localTypes/BaseProps'
import clsx from 'clsx'
import React, { Ref } from 'react'
import classes from './Button.module.scss'

interface ButtonProps extends BaseProps {
    ref?: Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = React.forwardRef(({ children }, ref) => (
    <button
        type="button"
        ref={ref}
        className={clsx(
            classes.button,
        )}
    >
        {children}
    </button>
))

export default Button
