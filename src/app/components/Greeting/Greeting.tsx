import { space } from '@assets/symbols'
import { SetTimePeriod } from '@store/app-store/appReducer'
import React from 'react'

// import styles from './Greeting.module.css'

export interface GreetingProps {
    userName: string,
    timePeriod: string,
    setTimePeriod: SetTimePeriod,
}

const Greeting: React.FC<Omit<GreetingProps, 'setTimePeriod'>> = ({ userName, timePeriod }) => (
    <div className="txt--title-small">
        <p>
            Good
            {space}
            {timePeriod}
            ,
            {space}
            <span>{userName}</span>
            !
        </p>
    </div>
)

export default Greeting
