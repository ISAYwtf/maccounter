import { combineReducers, createStore } from 'redux'
import expensesReducer from '@store/expenses/expensesReducer'
import { ExpensesInitialState as expensesState } from '@store/expenses/expensesInitialState'
import { SidebarInitialState as sidebarState } from '@store/sidebar/sidebarInitialState'
import sidebarReducer from '@store/sidebar/sidebarReducer'

const reducers = combineReducers({
    expenses: expensesReducer,
    sidebar: sidebarReducer,
})
const store = createStore(reducers)

export interface State {
    expenses: expensesState,
    sidebar: sidebarState
}

export default store
