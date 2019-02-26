import React from 'react'
import Superheros from './Superheros.js'
import data from './superHeros.json'

class App extends React.Component {
    constructor(){
        super()
        this.state ={

        }
    }
    sayCatchPhrase = (catchPhrase) => {
        alert(catchPhrase)
    }

    render(){
        const mappedSuperheroes = data.superHeros.map((hero, i)=> <superHeros 
        key = {i} 
        name ={hero.name}
        imgUrl ={hero.imgUrl}
        catchPhrase ={hero.catchPhrase} />)

    return (
        <div>
            {mappedSuperheroes}
        </div>
    )
    }
}
    