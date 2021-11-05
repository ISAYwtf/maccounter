import { BasePropsWithoutChild } from '@localTypes/BaseProps'
import { ExpensesInitialState } from '@store/expenses-store/expensesInitialState'

export interface WidgetProps extends BasePropsWithoutChild {
    title: string,
    expenses: ExpensesInitialState
}
