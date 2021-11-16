import { space } from '@assets/symbols'
import React from 'react'

// import styles from './Greeting.module.css'

export interface GreetingProps {
    userName: string,
    timePeriod: string,
}

const Greeting: React.FC<GreetingProps> = ({ userName, timePeriod }) => (
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
