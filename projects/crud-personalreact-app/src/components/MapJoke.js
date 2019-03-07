import React from 'react'
import { withJokes } from '../context/JokesProvider.js'


const MapJoke = (props) => {
    return(
        mappedsavedJokes= props.savedJokes.map((joke, i) => 
            <Joke 
                key={i}
                joke={joke}
                id = {props.id}/>)
    )
}


export default withJokes(MapJoke)