import Greeting, { GreetingProps } from '@components/Greeting/Greeting'
import { setTimePeriod } from '@store/app-store/appReducer'
import { selectTimePeriod } from '@store/app-store/appSelectors'
import { State } from '@store/redux-store'
import React from 'react'
import { connect } from 'react-redux'

const GreetingContainer: React.FC<GreetingProps> = ({ setTimePeriod: setPeriod, ...props }) => {
    setPeriod()
    return <Greeting {...props} />
}

const mapStateToProps = (state: State) => ({
    timePeriod: selectTimePeriod(state),
})

const mapDispatchToProps = {
    setTimePeriod,
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetingContainer)
