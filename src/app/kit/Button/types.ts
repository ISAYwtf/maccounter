import { BaseProps } from '@localTypes/BaseProps';
import { BRANDS, SIZES } from '@localTypes/Enums';
import { Ref } from 'react';

export interface ButtonProps extends BaseProps {
    type?: BRANDS.primary | BRANDS.secondary | BRANDS.critical
    size?: SIZES.xSmall | SIZES.small | SIZES.medium | SIZES.large | SIZES.xLarge
    disabled?: boolean
    ref?: Ref<HTMLButtonElement>
}
