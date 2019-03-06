import React from 'react'
import { withJokes } from '../context/JokesProvider'


const Jokes = props => {
    console.log(props)
    return(
        <div>
            <h3>{props.currentJoke}</h3>
            <button onClick={props.saveJoke}>Save</button>
        </div>
    )
}

export default withJokes(Jokes)
