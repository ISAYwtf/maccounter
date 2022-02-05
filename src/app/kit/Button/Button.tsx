import { BRANDS, SIZES } from '@localTypes/Enums'
import clsx from 'clsx'
import { FC, forwardRef } from 'react'
import classes from './Button.module.scss'
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = forwardRef(({
    children,
    disabled,
    type = BRANDS.primary,
    size = SIZES.small,
    className,
    ...props
}, ref) => {
    const mapTypes: Record<BRANDS, string> = {
        [BRANDS.primary]: classes.primary,
        [BRANDS.secondary]: classes.secondary,
        [BRANDS.critical]: classes.critical,
        [BRANDS.warning]: classes.warning,
    }
    const mapSizes: Record<SIZES, string> = {
        [SIZES.xSmall]: classes.xSmall,
        [SIZES.small]: classes.small,
        [SIZES.medium]: classes.medium,
        [SIZES.large]: classes.large,
        [SIZES.xLarge]: classes.xLarge,
    }

    return (
        <button
            type="button"
            ref={ref}
            className={clsx(
                classes.button,
                mapTypes[type],
                mapSizes[size],
                disabled && classes.disabled,
                className,
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
})
