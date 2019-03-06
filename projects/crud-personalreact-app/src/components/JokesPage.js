import React from 'react'
import {withJokes} from '../context/JokesProvider.js'

const JokesPage = (props) => {
    // console.log(props)
    return(
        <div>
            <h1> You've made it this far...</h1>
            <p> You must really like dad jokes.</p>
            <h1>{props.savedJoke}</h1>
        </div>
    )
}

export default withJokes(JokesPage)