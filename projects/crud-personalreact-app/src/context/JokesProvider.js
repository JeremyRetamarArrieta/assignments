import React, { Component } from 'react'
import axios from 'axios'

const JokesContext = React.createContext()

class JokesProvider extends Component {
    constructor (){
        super()
        this.state = {
            id: {},
            savedJoke: {},
            currentJoke: ""
        }
        this.url = "https://icanhazdadjoke.com/"
    }

    getJokes = () => {
        axios.get(this.url, {headers: {Accept: 'application/json'}}).then(response => {
            // console.log(response.data)
            this.setState({
                savedJoke: response.data
            })
            // console.log(this.state)
        }).catch(error => console.log(error))
    }

    //save current joke and previous jokes

    render(){
        console.log(this.state)
        return(
            <JokesContext.Provider
                value={{
                    id: this.state.id,
                    savedJoke: this.state.savedJoke.joke,
                    currentJoke: this.state.currentJoke,
                    getJokes: this.getJokes
                }}>
                { this.props.children }
            </JokesContext.Provider>
        )
    }
}

//Lets other components use context

export const withJokes = C => props => (
    <JokesContext.Consumer>
        { value => <C {...props} {...value}/> }
    </JokesContext.Consumer>
)

export default JokesProvider