import { appInitialState } from '@store/app-store/appInitialState'
import { getCurrentTimePeriod } from '@store/app-store/utils'
import { AnyAction } from 'redux'
import { appActionTypes } from '@store/app-store/actionTypes'

// eslint-disable-next-line default-param-last
const appReducer = (state = appInitialState, action?: AnyAction) => {
    switch (action?.type) {
        case appActionTypes.setTimePeriod:
            return {
                ...state,
                timePeriod: action?.payload,
            }
        case appActionTypes.setModalIsActive:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isActive: action?.payload,
                },
            }
        default:
            return state
    }
}

export const setTimePeriod = () => ({
    type: appActionTypes.setTimePeriod,
    payload: getCurrentTimePeriod(),
})

export const setModalIsActive = (payload: boolean) => ({
    type: appActionTypes.setModalIsActive,
    payload,
})

export type SetTimePeriod = typeof setTimePeriod
export type SetModalIsActive = typeof setModalIsActive

export default appReducer
