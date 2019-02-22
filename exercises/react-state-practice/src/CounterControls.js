import React from 'react'

const CounterControls = (props) => {

    return(
        <div>
        <button onClick={props.handleIncrement}>+</button>
        <button onClick={props.handleDecrement}>-</button>
        <button onClick={props.handleDivideByTwo}>/2</button>
        </div>
    )
    
}

export default CounterControls