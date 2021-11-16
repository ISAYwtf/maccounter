import { State } from '@store/redux-store'

export const selectProfile = (state: State) => state.profile
export const selectProfileFirstName = (state: State) => state.profile.firstName
export const selectProfileSecondName = (state: State) => state.profile.secondName
export const selectProfilePhone = (state: State) => state.profile.phone
export const selectProfileEmail = (state: State) => state.profile.email
