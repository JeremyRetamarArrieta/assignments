import React from 'react'
import { withJokes } from '../context/JokesProvider'
import GetNewJoke from './GetNewJoke.js'


const Jokes = props => {
    // console.log(props)
    return(
        <div>
            <h3>{props.currentJoke}</h3>


            <button onClick={props.saveJoke}>Save</button>
            <GetNewJoke />
        </div>
    )
}

export default withJokes(Jokes)
