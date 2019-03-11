import React from 'react'
import {withJokes} from '../context/JokesProvider.js'
import Jokes from './Jokes.js'
import SavedJokesList from './SavedJokesList.js'

const JokesPage = () => {
    return(
        <div className="jokespagewrapper">
            <div className="jokespage">
                <h1> You've made it this far...</h1>
                <p> You must really like dad jokes.</p>
            </div>
            <div className="jokescomponentswrapper">
                <Jokes />
                <SavedJokesList />
            </div>
        </div>
    )
}

export default withJokes(JokesPage)