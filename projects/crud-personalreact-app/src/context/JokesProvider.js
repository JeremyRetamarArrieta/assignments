import React, { Component } from 'react'
import axios from 'axios'

const JokesContext = React.createContext()

class JokesProvider extends Component {
    constructor (){
        super()
        this.state = {
            savedJokes: [],
            currentJoke: ""
        }
        this.url = "https://icanhazdadjoke.com/"
    }

    getJokes = () => {
        axios.get(this.url).then(response => {
            this.setState({
                savedJokes: response.data
            })
        }).catch(error => console.log(error))
    }

    //save current joke and previous jokes

    render(){
        return(
            <JokesContext.Provider
                value={{
                    savedJokes: this.state.jokes,
                    currentJoke: this.state.currentJoke
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