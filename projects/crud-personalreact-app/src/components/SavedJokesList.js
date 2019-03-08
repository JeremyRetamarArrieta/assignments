import React from 'react'
import {withJokes } from '../context/JokesProvider'

const SavedJokesList = props => {
    return (
    <div>
        <h4>{props.savedJokes}</h4>
    </div>
    )
}

export default withJokes(SavedJokesList)