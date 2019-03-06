import React from 'react'
import { withJokes } from '../context/JokesProvider'


const Jokes = props => {
    console.log(props)
    return(
        <div>
            <h1>{getJoke()}</h1>
        </div>
    )
}

export default withJokes(Jokes)
//ask about setting 
//up something that takes the info 
//from api and sends it to a jokes generator function if needed...