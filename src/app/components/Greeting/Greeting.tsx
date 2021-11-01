import React from 'react'
// import styles from './Greeting.module.css'

interface GreetingProps {
    userName: string,
}

const Greeting: React.FC<GreetingProps> = ({ userName }) => (
    <div className="txt--title-small">
        <p>
            Good morning,&nbsp;
            <span>{userName}</span>
            !
        </p>
    </div>
)

export default Greeting
