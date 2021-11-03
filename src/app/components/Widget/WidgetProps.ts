import { BasePropsWithoutChild } from '@localTypes/BaseProps'
import { InitialState } from '@store/expenses/initialState'

export interface WidgetProps extends BasePropsWithoutChild {
    title: string,
    expenses: InitialState
}
