import React from 'react'
import {withJokes} from '../context/JokesProvider.js'

const GetNewJoke = props => {
    console.log(props.getJokes)
    return(
        <div>

            <button onClick={props.getJokes} >Get a new Joke</button>
            
        </div>
    )
}

export default withJokes(GetNewJoke)