import { InitialState } from '@store/expenses/initialState'
import { State } from '@store/redux-store'

export const getExpensesState = (state: State) => state.expenses
