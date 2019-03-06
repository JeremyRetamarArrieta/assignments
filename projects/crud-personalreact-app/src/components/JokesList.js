import React from 'react'
import {savedJokes} from '../context/JokesProvider'

const JokesList = props => {
    <div>
        {props.savedJokes}
    </div>
}

export default withJokes(JokesList)