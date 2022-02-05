import Greeting from '@components/Greeting/Greeting'
import { setTimePeriod } from '@store/app-store/appReducer'
import { useSelector } from '@store/hooks'
import React from 'react'
import { useDispatch } from 'react-redux'

const GreetingContainer: React.FC = () => {
    const dispatch = useDispatch()
    const userName = useSelector(((state) => state.profile.firstName))
    const timePeriod = useSelector((state) => state.app.timePeriod)
    dispatch(setTimePeriod())
    return <Greeting userName={userName} timePeriod={timePeriod} />
}

export default GreetingContainer
