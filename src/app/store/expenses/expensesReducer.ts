import { ActionType } from '@store/ActionType'
import { INITIAL_STATE } from '@store/expenses/initialState'

const expensesReducer = (state = INITIAL_STATE, action: ActionType) => state

export default expensesReducer
