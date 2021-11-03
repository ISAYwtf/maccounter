import { combineReducers, createStore } from 'redux'
import expensesReducer from '@store/expenses/expensesReducer'
import { InitialState as expensesState } from '@store/expenses/initialState'

const reducers = combineReducers({
    expenses: expensesReducer,
})
const store = createStore(reducers)

export interface State {
    expenses: expensesState
}

export default store
