import { State } from '@store/redux-store'

export const selectTimePeriod = (state: State) => state.app.timePeriod
