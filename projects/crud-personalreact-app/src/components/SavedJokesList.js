import React from 'react'
import {withJokes } from '../context/JokesProvider'

const SavedJokesList = props => {
    console.log(props.savedJokes)
    let mappedsavedJokes= props.savedJokes.map((joke, i) => 
            <div>
                <ul>{joke}</ul> 
                // img
                //div bkgrnd
            </div>
    )
    
    return (
    <div>
        {mappedsavedJokes}
    </div>
    )
}

export default withJokes(SavedJokesList)