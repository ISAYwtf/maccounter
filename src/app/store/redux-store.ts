import appReducer from '@store/app-store/appReducer'
import { combineReducers, createStore } from 'redux'
import expensesReducer from '@store/expenses-store/expensesReducer'
import sidebarReducer from '@store/sidebar-store/sidebarReducer'

const reducers = combineReducers({
    expenses: expensesReducer,
    sidebar: sidebarReducer,
    app: appReducer,
})
const store = createStore(reducers)

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
