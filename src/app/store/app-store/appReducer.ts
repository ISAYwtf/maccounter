import { appInitialState } from '@store/app-store/appInitialState'
import { getCurrentTimePeriod } from '@store/app-store/utils'
import { AnyAction } from 'redux'
import { appActionTypes } from '@store/app-store/actionTypes'

const appReducer = (state = appInitialState, action: AnyAction) => {
    switch (action.type) {
        case appActionTypes.setTimePeriod:
            return {
                ...state,
                timePeriod: action.payload,
            }
        default:
            return state
    }
}

export const setTimePeriod = () => ({
    type: appActionTypes.setTimePeriod,
    payload: getCurrentTimePeriod(),
})

export type SetTimePeriod = typeof setTimePeriod

export default appReducer
