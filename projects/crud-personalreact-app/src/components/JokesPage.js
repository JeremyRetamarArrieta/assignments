import React from 'react'
import {withJokes} from '../context/JokesProvider.js'
import Jokes from './Jokes.js'
//import SavedJokesList from './SavedJokesList.js'

const JokesPage = () => {
    return(
        <div className="jokespage">
            <h1> You've made it this far...</h1>
            <p> You must really like dad jokes.</p>
            <Jokes />
            {/* <SavedJokesList /> */}
        </div>
    )
}

export default withJokes(JokesPage)